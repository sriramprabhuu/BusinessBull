package in.businessbull.dataaccess;

import in.businessbull.vo.RealEstateVO;

import java.util.Date;
import java.util.List;

import org.hibernate.criterion.Conjunction;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

public class PropertyDAO extends HibernateDaoSupport {

	public RealEstateVO addProperty(RealEstateVO estateVO) {
		estateVO.setCreatedDate(new Date());
		getHibernateTemplate().saveOrUpdate(estateVO);
		return estateVO;
	}

	public List<RealEstateVO> getProperties(RealEstateVO estateVO) {
		DetachedCriteria criteria = DetachedCriteria
				.forClass(RealEstateVO.class);
		Conjunction conjunction = Restrictions.conjunction();
		if (estateVO.getPlaces() != null && estateVO.getPlaces().length > 0) {
			conjunction.add(Restrictions.in("placeVo.placeId",
					estateVO.getPlaces()));
		}
		if (estateVO.getAreaType().getConstantId() != 0) {
			conjunction
					.add(Restrictions.eq("areaType", estateVO.getAreaType()));
		}
		if (estateVO.getAreaFromSearch() != 0) {
			conjunction.add(Restrictions.sizeGt("area",
					estateVO.getAreaFromSearch()));
		}
		if (estateVO.getAreaToSearch() != 0) {
			conjunction.add(Restrictions.sizeLe("area",
					estateVO.getAreaToSearch()));
		}
		if (estateVO.getPriceFromSearch() != 0) {
			conjunction.add(Restrictions.sizeGt("price",
					estateVO.getPriceFromSearch()));
		}
		if (estateVO.getPriceToSearch() != 0) {
			conjunction.add(Restrictions.sizeLe("price",
					estateVO.getPriceToSearch()));
		}
		criteria.add(conjunction);
		List users = getHibernateTemplate().findByCriteria(criteria);
		return users;
	}
}