package in.businessbull.service.impl;

import in.businessbull.dataaccess.PropertyDAO;
import in.businessbull.exception.TransportException;
import in.businessbull.service.PropertyService;
import in.businessbull.vo.RealEstateVO;

import java.util.List;

public class PropertyServiceImpl implements PropertyService {

	private PropertyDAO daoInstance;

	public PropertyDAO getDaoInstance() {
		return daoInstance;
	}

	public void setDaoInstance(PropertyDAO daoInstance) {
		this.daoInstance = daoInstance;
	}

	public List<RealEstateVO> getProperties(RealEstateVO estateVO) throws TransportException {
		return daoInstance.getProperties(estateVO);
	}

	public RealEstateVO addProperty(RealEstateVO estateVO) throws TransportException {
		return daoInstance.addProperty(estateVO);
	}
}