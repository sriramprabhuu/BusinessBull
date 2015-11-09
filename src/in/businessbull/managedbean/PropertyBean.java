package in.businessbull.managedbean;

import in.businessbull.exception.TransportException;
import in.businessbull.service.PropertyService;
import in.businessbull.vo.ConstantsVO;
import in.businessbull.vo.RealEstateVO;

import java.util.Date;
import java.util.List;

import org.apache.log4j.Logger;

public class PropertyBean {

	private Logger logger = Logger.getLogger(this.getClass());
	private int area;
	private int areaType;
	private long place;
	private String landMark;
	private String description;
	private int price;
	private String alternateMobile;
	private Date dateFromSearch = null;
	private Date dateToSearch = null;
	private int priceFromSearch;
	private int priceToSearch;
	private int areaFromSearch;
	private int areaToSearch;
	private Long searchPlaces[];
	private List<RealEstateVO> realList = null;

	private PropertyService propertyService;

	public PropertyService getPropertyService() {
		return propertyService;
	}

	public void setPropertyService(PropertyService propertyService) {
		this.propertyService = propertyService;
	}

	public String addProperty() {
		logger.debug("Start PropertyBean.addProperty");
		RealEstateVO estateVO = new RealEstateVO();
		try {
			propertyService.addProperty(estateVO);
		} catch (TransportException e) {

		}
		logger.debug("End PropertyBean.addProperty");
		return "userAdded";
	}

	public String getProperties() {
		logger.debug("Start PropertyBean.getProperties");
		ConstantsVO constantsVO = new ConstantsVO();
		RealEstateVO estateVO = new RealEstateVO();
		estateVO.setAreaFromSearch(areaFromSearch);
		estateVO.setAreaToSearch(areaToSearch);
		estateVO.setPriceFromSearch(priceFromSearch);
		estateVO.setPriceToSearch(priceToSearch);
		estateVO.setBuyOrSell(1);
		estateVO.setPlaces(searchPlaces);
		constantsVO.setConstantId(areaType);
		estateVO.setPlaces(searchPlaces);
		estateVO.setAreaType(constantsVO);

		List<RealEstateVO> list = null;
		try {
			list = propertyService.getProperties(estateVO);
			realList = list;
		} catch (TransportException e) {

		}
		logger.debug("End PropertyBean.getProperties");
		return "gotUsers";
	}

	public Logger getLogger() {
		return logger;
	}

	public void setLogger(Logger logger) {
		this.logger = logger;
	}

	public int getArea() {
		return area;
	}

	public void setArea(int area) {
		this.area = area;
	}

	public int getAreaType() {
		return areaType;
	}

	public void setAreaType(int areaType) {
		this.areaType = areaType;
	}

	public String getLandMark() {
		return landMark;
	}

	public void setLandMark(String landMark) {
		this.landMark = landMark;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getAlternateMobile() {
		return alternateMobile;
	}

	public void setAlternateMobile(String alternateMobile) {
		this.alternateMobile = alternateMobile;
	}

	public Date getDateFromSearch() {
		return dateFromSearch;
	}

	public void setDateFromSearch(Date dateFromSearch) {
		this.dateFromSearch = dateFromSearch;
	}

	public Date getDateToSearch() {
		return dateToSearch;
	}

	public void setDateToSearch(Date dateToSearch) {
		this.dateToSearch = dateToSearch;
	}

	public int getPriceFromSearch() {
		return priceFromSearch;
	}

	public void setPriceFromSearch(int priceFromSearch) {
		this.priceFromSearch = priceFromSearch;
	}

	public int getPriceToSearch() {
		return priceToSearch;
	}

	public void setPriceToSearch(int priceToSearch) {
		this.priceToSearch = priceToSearch;
	}

	public int getAreaFromSearch() {
		return areaFromSearch;
	}

	public void setAreaFromSearch(int areaFromSearch) {
		this.areaFromSearch = areaFromSearch;
	}

	public int getAreaToSearch() {
		return areaToSearch;
	}

	public void setAreaToSearch(int areaToSearch) {
		this.areaToSearch = areaToSearch;
	}

	public long getPlace() {
		return place;
	}

	public void setPlace(long place) {
		this.place = place;
	}

	public Long[] getSearchPlaces() {
		return searchPlaces;
	}

	public void setSearchPlaces(Long[] searchPlaces) {
		this.searchPlaces = searchPlaces;
	}

	public List<RealEstateVO> getRealList() {
		return realList;
	}

	public void setRealList(List<RealEstateVO> realList) {
		this.realList = realList;
	}

}
