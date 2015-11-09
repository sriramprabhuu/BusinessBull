package in.businessbull.vo;

import java.util.Date;

public class RealEstateVO  extends BaseVO{

	private long realId;
	private int area;
	private PlaceVO placeVo;
	private String landMark;
	private String description;
	private int price;
	private Date createdDate;
	private UserVO createdUser;
	private String alternateMobile;
	private int buyOrSell;
	private ConstantsVO areaType = null;

	public RealEstateVO(long realId, int area, ConstantsVO areaType, PlaceVO placeVo,
			String landMark, String description, int price, Date createdDate,
			UserVO createdUser, String alternateMobile, int buyOrSell) {
		super();
		this.realId = realId;
		this.area = area;
		this.areaType = areaType;
		this.placeVo = placeVo;
		this.landMark = landMark;
		this.description = description;
		this.price = price;
		this.createdDate = createdDate;
		this.createdUser = createdUser;
		this.alternateMobile = alternateMobile;
		this.buyOrSell = buyOrSell;
	}
	
	public RealEstateVO()
	{
		
	}
	

	public long getRealId() {
		return realId;
	}

	public void setRealId(long realId) {
		this.realId = realId;
	}

	public int getArea() {
		return area;
	}

	public void setArea(int area) {
		this.area = area;
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

	public ConstantsVO getAreaType() {
		return areaType;
	}

	public void setAreaType(ConstantsVO areaType) {
		this.areaType = areaType;
	}
}