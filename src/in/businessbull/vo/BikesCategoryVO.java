package in.businessbull.vo;

import java.util.List;

public class BikesCategoryVO {

	private int bikeId;
	private String bikeMake;
	private List<BikesSubCategoryVO> variants = null;

	public int getBikeId() {
		return bikeId;
	}

	public void setBikeId(int bikeId) {
		this.bikeId = bikeId;
	}

	public String getBikeMake() {
		return bikeMake;
	}

	public void setBikeMake(String bikeMake) {
		this.bikeMake = bikeMake;
	}

	public List<BikesSubCategoryVO> getVariants() {
		return variants;
	}

	public void setVariants(List<BikesSubCategoryVO> variants) {
		this.variants = variants;
	}

}