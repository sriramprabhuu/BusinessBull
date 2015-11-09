package in.businessbull.vo;

import java.util.Date;

public class BaseVO {

	private Date dateFromSearch = null;
	
	private Date dateToSearch = null;
	
	private int priceFromSearch;
	
	private int priceToSearch;
	
	private int areaFromSearch;
	
	private int areaToSearch;
	
	private int noOfOwners;
	
	private int kmsRanTo;
	
	private int kmsRanFrom;
	
	private int modelFrom;
	
	private int modelTo;
	
	private Long[] places;
	
	private int bikesubCategoriesSearch[];
	
	private int carsubCategoriesSearch[];

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

	public int getNoOfOwners() {
		return noOfOwners;
	}

	public void setNoOfOwners(int noOfOwners) {
		this.noOfOwners = noOfOwners;
	}

	public int getKmsRanTo() {
		return kmsRanTo;
	}

	public void setKmsRanTo(int kmsRanTo) {
		this.kmsRanTo = kmsRanTo;
	}

	public int getKmsRanFrom() {
		return kmsRanFrom;
	}

	public void setKmsRanFrom(int kmsRanFrom) {
		this.kmsRanFrom = kmsRanFrom;
	}

	public int getModelFrom() {
		return modelFrom;
	}

	public void setModelFrom(int modelFrom) {
		this.modelFrom = modelFrom;
	}

	public int getModelTo() {
		return modelTo;
	}

	public void setModelTo(int modelTo) {
		this.modelTo = modelTo;
	}

	public Long[] getPlaces() {
		return places;
	}

	public void setPlaces(Long[] places) {
		this.places = places;
	}

	public int[] getBikesubCategoriesSearch() {
		return bikesubCategoriesSearch;
	}

	public void setBikesubCategoriesSearch(int[] bikesubCategoriesSearch) {
		this.bikesubCategoriesSearch = bikesubCategoriesSearch;
	}

	public int[] getCarsubCategoriesSearch() {
		return carsubCategoriesSearch;
	}

	public void setCarsubCategoriesSearch(int[] carsubCategoriesSearch) {
		this.carsubCategoriesSearch = carsubCategoriesSearch;
	}
}