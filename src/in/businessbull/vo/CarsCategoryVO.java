package in.businessbull.vo;

import java.util.List;

public class CarsCategoryVO {

	private int carId;
	private String carMake;
	private List<CarsSubCategoryVO> variants = null;

	public int getCarId() {
		return carId;
	}

	public void setCarId(int carId) {
		this.carId = carId;
	}

	public String getCarMake() {
		return carMake;
	}

	public void setCarMake(String carMake) {
		this.carMake = carMake;
	}

	public List<CarsSubCategoryVO> getVariants() {
		return variants;
	}

	public void setVariants(List<CarsSubCategoryVO> variants) {
		this.variants = variants;
	}

}