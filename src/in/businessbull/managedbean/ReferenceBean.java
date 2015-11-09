package in.businessbull.managedbean;

import in.businessbull.exception.TransportException;
import in.businessbull.service.ReferenceService;
import in.businessbull.utils.BullConstants;
import in.businessbull.utils.FacesUtils;
import in.businessbull.vo.BikesCategoryVO;
import in.businessbull.vo.CarsCategoryVO;
import in.businessbull.vo.ConstantsVO;
import in.businessbull.vo.PlaceVO;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.faces.model.SelectItem;

import org.apache.log4j.Logger;

public class ReferenceBean {

	private Logger logger = Logger.getLogger(this.getClass());

	private ReferenceService referenceService;

	private List<SelectItem> categoryList = null;

	private List<SelectItem> areaTypes = new ArrayList<SelectItem>();

	private List<SelectItem> userTypes = new ArrayList<SelectItem>();

	private List<SelectItem> machineTypes = new ArrayList<SelectItem>();

	private List<SelectItem> electronicsTypes = new ArrayList<SelectItem>();

	private List<SelectItem> buyOrSellTypes = new ArrayList<SelectItem>();

	private List<SelectItem> placeList = new ArrayList<SelectItem>();

	private List<SelectItem> carsTypes = new ArrayList<SelectItem>();

	private List<SelectItem> bikeTypes = new ArrayList<SelectItem>();

	private List<SelectItem> fuelTypes = new ArrayList<SelectItem>();

	public void setReferenceService(ReferenceService referenceService) {
		this.referenceService = referenceService;
	}

	public ReferenceService getReferenceService() {
		return referenceService;
	}

	public String loadReferenceData() {
		logger.debug("Start ReferenceBean.loadReferenceData");
		Map<String, List> map = null;
		String response = FacesUtils.getRequestParameter("responseText");
		try {
			map = referenceService.loadReferenceData();
			getSelectItems(map, BullConstants.CATEGORY);
			loadConstantsList(map);
			FacesUtils.setSessionAttribute("refdata", "1");
		} catch (TransportException e) {

		}
		if (response == null) {
			response = "success";
		}
		logger.debug("End ReferenceBean.loadReferenceData");
		return response;
	}

	private void loadConstantsList(Map<String, List> map) {
		List<ConstantsVO> contants = map.get(BullConstants.CONSTANTS);
		if (contants != null) {
			if (contants.size() >= 10) {
				formList(contants.subList(0, 9), userTypes);
			}
			if (contants.size() >= 20) {
				formList(contants.subList(10, 19), userTypes);
			}
			if (contants.size() >= 30) {
				formList(contants.subList(20, 29), userTypes);
			}
			if (contants.size() >= 40) {
				formList(contants.subList(30, 39), userTypes);
			}
			if (contants.size() >= 50) {
				formList(contants.subList(40, 49), userTypes);
			}
			if (contants.size() >= 60) {
				formList(contants.subList(50, 59), userTypes);
			}
		}
	}

	private void formList(List<ConstantsVO> subList, List<SelectItem> items) {
		for (ConstantsVO constantsVO : subList) {
			items.add(new SelectItem(constantsVO.getConstantId(), constantsVO
					.getConstantName()));
		}
	}

	private void getSelectItems(Map<String, List> map, String key) {
		FacesUtils.setSessionAttribute(BullConstants.CATEGORY,
				map.get(BullConstants.CATEGORY));
		List<PlaceVO> placeL = map.get(BullConstants.PLACE);
		for (PlaceVO placeVO : placeL) {
			placeList.add(new SelectItem(placeVO.getPlaceId(), placeVO
					.getPlace()));
		}

		List<CarsCategoryVO> carsL = map.get(BullConstants.CARS);
		for (CarsCategoryVO carsCategoryVO : carsL) {
			carsTypes.add(new SelectItem(carsCategoryVO, carsCategoryVO
					.getCarMake()));
		}

		List<BikesCategoryVO> bikesL = map.get(BullConstants.BIKES);
		for (BikesCategoryVO bikesCategoryVO : bikesL) {
			bikeTypes.add(new SelectItem(bikesCategoryVO, bikesCategoryVO
					.getBikeMake()));
		}
	}

	public Logger getLogger() {
		return logger;
	}

	public void setLogger(Logger logger) {
		this.logger = logger;
	}

	public List<SelectItem> getCategoryList() {
		return categoryList;
	}

	public void setCategoryList(List<SelectItem> categoryList) {
		this.categoryList = categoryList;
	}

	public List<SelectItem> getPlaceList() {
		return placeList;
	}

	public void setPlaceList(List<SelectItem> placeList) {
		this.placeList = placeList;
	}

	public List<SelectItem> getAreaTypes() {
		return areaTypes;
	}

	public void setAreaTypes(List<SelectItem> areaTypes) {
		this.areaTypes = areaTypes;
	}

	public List<SelectItem> getUserTypes() {
		return userTypes;
	}

	public void setUserTypes(List<SelectItem> userTypes) {
		this.userTypes = userTypes;
	}

	public List<SelectItem> getMachineTypes() {
		return machineTypes;
	}

	public void setMachineTypes(List<SelectItem> machineTypes) {
		this.machineTypes = machineTypes;
	}

	public List<SelectItem> getElectronicsTypes() {
		return electronicsTypes;
	}

	public void setElectronicsTypes(List<SelectItem> electronicsTypes) {
		this.electronicsTypes = electronicsTypes;
	}

	public List<SelectItem> getBuyOrSellTypes() {
		return buyOrSellTypes;
	}

	public void setBuyOrSellTypes(List<SelectItem> buyOrSellTypes) {
		this.buyOrSellTypes = buyOrSellTypes;
	}

	public List<SelectItem> getCarsTypes() {
		return carsTypes;
	}

	public void setCarsTypes(List<SelectItem> carsTypes) {
		this.carsTypes = carsTypes;
	}

	public List<SelectItem> getBikeTypes() {
		return bikeTypes;
	}

	public void setBikeTypes(List<SelectItem> bikeTypes) {
		this.bikeTypes = bikeTypes;
	}

	public List<SelectItem> getFuelTypes() {
		return fuelTypes;
	}

	public void setFuelTypes(List<SelectItem> fuelTypes) {
		this.fuelTypes = fuelTypes;
	}
}