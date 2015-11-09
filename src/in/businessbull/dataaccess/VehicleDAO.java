package in.businessbull.dataaccess;

import in.businessbull.vo.BikeVO;
import in.businessbull.vo.CarVO;

import java.util.Date;
import java.util.List;

import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Expression;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

public class VehicleDAO extends HibernateDaoSupport {

	public CarVO addCar(CarVO carVO) {
		carVO.setCreatedDate(new Date());
		getHibernateTemplate().saveOrUpdate(carVO);
		return carVO;
	}

	public List<CarVO> getCars(CarVO carVO) {
		DetachedCriteria criteria = DetachedCriteria.forClass(CarVO.class);
		criteria.add(Expression.eq("carsSubCategoryVO.carSubId", carVO
				.getCarsSubCategoryVO().getCarSubId()));
		List cars = getHibernateTemplate().findByCriteria(criteria);
		return cars;
	}

	public BikeVO addBike(BikeVO bikeVO) {
		bikeVO.setCreatedDate(new Date());
		getHibernateTemplate().saveOrUpdate(bikeVO);
		return bikeVO;
	}

	public List<BikeVO> getBikes(BikeVO bikeVO) {
		DetachedCriteria criteria = DetachedCriteria.forClass(CarVO.class);
		criteria.add(Expression.eq("bikesSubCategoryVO.bikeSubId", bikeVO
				.getBikesSubCategoryVO().getBikeSubId()));
		List bikes = getHibernateTemplate().findByCriteria(criteria);
		return bikes;
	}
}