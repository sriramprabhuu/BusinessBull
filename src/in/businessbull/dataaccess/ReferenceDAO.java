package in.businessbull.dataaccess;

import in.businessbull.exception.TransportException;
import in.businessbull.utils.BullConstants;
import in.businessbull.vo.BikesCategoryVO;
import in.businessbull.vo.CarsCategoryVO;
import in.businessbull.vo.ConstantsVO;
import in.businessbull.vo.MainCategoryVO;
import in.businessbull.vo.PlaceVO;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

public class ReferenceDAO extends HibernateDaoSupport {

	private Log logger = LogFactory.getLog(this.getClass());

	public Map loadReferenceData() throws TransportException {
		logger.debug("Start loadReferenceData");
		HashMap<String, List> hashMap = new HashMap<String, List>();

		List list = getHibernateTemplate().loadAll(MainCategoryVO.class);
		hashMap.put(BullConstants.CATEGORY, list);

		list = getHibernateTemplate().loadAll(PlaceVO.class);
		hashMap.put(BullConstants.PLACE, list);

		list = getHibernateTemplate().loadAll(CarsCategoryVO.class);
		hashMap.put(BullConstants.CARS, list);

		list = getHibernateTemplate().loadAll(BikesCategoryVO.class);
		hashMap.put(BullConstants.BIKES, list);

		list = getHibernateTemplate().loadAll(ConstantsVO.class);
		hashMap.put(BullConstants.CONSTANTS, list);

		logger.debug("End loadReferenceData");
		return hashMap;
	}
}