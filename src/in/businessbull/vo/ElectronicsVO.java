package in.businessbull.vo;

import java.util.Date;

public class ElectronicsVO extends BaseVO{

	private long electroId;
	private int electronicsType;
	private PlaceVO placeVo;
	private String landMark;
	private String description;
	private int machineType;
	private int price;
	private Date createdDate;
	private UserVO createdUser;
	private String alternateMobile;
	private int buyOrSell;

	public long getElectroId() {
		return electroId;
	}

	public void setElectroId(long electroId) {
		this.electroId = electroId;
	}

	public int getElectronicsType() {
		return electronicsType;
	}

	public void setElectronicsType(int electronicsType) {
		this.electronicsType = electronicsType;
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

	public int getMachineType() {
		return machineType;
	}

	public void setMachineType(int machineType) {
		this.machineType = machineType;
	}

}