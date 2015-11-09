package in.businessbull.vo;

import java.util.Date;

public class BikeVO extends BaseVO{

	private long bikeId;
	private BikesSubCategoryVO bikesSubCategoryVO = null;
	private PlaceVO placeVo;
	private String landMark;
	private String description;
	private int price;
	private Date createdDate;
	private UserVO createdUser;
	private String alternateMobile;
	private int buyOrSell;
	private int model;
	private int owners;
	private int mileage;
	private int ran;
	private int type;

	public long getBikeId() {
		return bikeId;
	}

	public void setBikeId(long bikeId) {
		this.bikeId = bikeId;
	}

	public BikesSubCategoryVO getBikesSubCategoryVO() {
		return bikesSubCategoryVO;
	}

	public void setBikesSubCategoryVO(BikesSubCategoryVO bikesSubCategoryVO) {
		this.bikesSubCategoryVO = bikesSubCategoryVO;
	}

	public PlaceVO getPlaceVo() {
		return placeVo;
	}

	public void setPlaceVo(PlaceVO placeVo) {
		this.placeVo = placeVo;
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

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public UserVO getCreatedUser() {
		return createdUser;
	}

	public void setCreatedUser(UserVO createdUser) {
		this.createdUser = createdUser;
	}

	public String getAlternateMobile() {
		return alternateMobile;
	}

	public void setAlternateMobile(String alternateMobile) {
		this.alternateMobile = alternateMobile;
	}

	public int getBuyOrSell() {
		return buyOrSell;
	}

	public void setBuyOrSell(int buyOrSell) {
		this.buyOrSell = buyOrSell;
	}

	public int getModel() {
		return model;
	}

	public void setModel(int model) {
		this.model = model;
	}

	public int getOwners() {
		return owners;
	}

	public void setOwners(int owners) {
		this.owners = owners;
	}

	public int getMileage() {
		return mileage;
	}

	public void setMileage(int mileage) {
		this.mileage = mileage;
	}

	public int getRan() {
		return ran;
	}

	public void setRan(int ran) {
		this.ran = ran;
	}

	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}

}