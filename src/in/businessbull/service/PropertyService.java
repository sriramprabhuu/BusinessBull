package in.businessbull.service;

import in.businessbull.dataaccess.PropertyDAO;
import in.businessbull.exception.TransportException;
import in.businessbull.vo.RealEstateVO;

import java.util.List;

public interface PropertyService {
	public PropertyDAO getDaoInstance();

	public void setDaoInstance(PropertyDAO daoInstance);

	public List<RealEstateVO> getProperties(RealEstateVO estateVO)
			throws TransportException;

	public RealEstateVO addProperty(RealEstateVO estateVO) throws TransportException;
}