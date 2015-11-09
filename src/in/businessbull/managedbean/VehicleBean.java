package in.businessbull.managedbean;

import in.businessbull.exception.TransportException;
import in.businessbull.service.VehicleService;
import in.businessbull.vo.BikeVO;
import in.businessbull.vo.CarVO;

import java.util.List;

import org.apache.log4j.Logger;

public class VehicleBean {

	private Logger logger = Logger.getLogger(this.getClass());

	private VehicleService vehicleService;

	public VehicleService getVehicleService() {
		return vehicleService;
	}

	public void setVehicleService(VehicleService vehicleService) {
		this.vehicleService = vehicleService;
	}

	public String addcar() {
		logger.debug("Start VehicleBean.addcar");
		CarVO carVO = new CarVO();
		try {
			vehicleService.addCar(carVO);
		} catch (TransportException e) {

		}
		logger.debug("End VehicleBean.addcar");
		return "carAdded";
	}

	public String getCars() {
		logger.debug("Start VehicleBean.getcars");
		CarVO carVO = new CarVO();
		List<CarVO> list = null;
		try {
			list = vehicleService.getCars(carVO);
		} catch (TransportException e) {

		}
		logger.debug("End VehicleBean.getcars");
		return "gotCars";
	}

	public String addBike() {
		logger.debug("Start VehicleBean.addBike");
		BikeVO bikeVO = new BikeVO();
		try {
			vehicleService.addBike(bikeVO);
		} catch (TransportException e) {

		}
		logger.debug("End VehicleBean.addBike");
		return "bikeAdded";
	}

	public String getBikes() {
		logger.debug("Start VehicleBean.getBikes");
		BikeVO bikeVO = new BikeVO();
		List<BikeVO> list = null;
		try {
			list = vehicleService.getBikes(bikeVO);
		} catch (TransportException e) {

		}
		logger.debug("End VehicleBean.getBikes");
		return "gotBikes";
	}
}