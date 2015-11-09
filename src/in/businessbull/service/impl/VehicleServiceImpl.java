package in.businessbull.service.impl;

import in.businessbull.dataaccess.VehicleDAO;
import in.businessbull.exception.TransportException;
import in.businessbull.service.VehicleService;
import in.businessbull.vo.BikeVO;
import in.businessbull.vo.CarVO;

import java.util.List;

public class VehicleServiceImpl implements VehicleService {

	private VehicleDAO daoInstance;

	public VehicleDAO getDaoInstance() {
		return daoInstance;
	}

	public void setDaoInstance(VehicleDAO daoInstance) {
		this.daoInstance = daoInstance;
	}

	public List<CarVO> getCars(CarVO carVO) throws TransportException {
		return daoInstance.getCars(carVO);
	}

	public CarVO addCar(CarVO carVO) throws TransportException {
		return daoInstance.addCar(carVO);
	}

	public List<BikeVO> getBikes(BikeVO bikeVO) throws TransportException {
		return daoInstance.getBikes(bikeVO);
	}

	public BikeVO addBike(BikeVO bikeVO) throws TransportException {
		return daoInstance.addBike(bikeVO);
	}
}