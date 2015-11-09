package in.businessbull.service;

import in.businessbull.dataaccess.VehicleDAO;
import in.businessbull.exception.TransportException;
import in.businessbull.vo.BikeVO;
import in.businessbull.vo.CarVO;

import java.util.List;

public interface VehicleService {
	public VehicleDAO getDaoInstance();

	public void setDaoInstance(VehicleDAO daoInstance);

	public List<CarVO> getCars(CarVO carVO) throws TransportException;

	public CarVO addCar(CarVO carVO) throws TransportException;

	public List<BikeVO> getBikes(BikeVO bikeVO) throws TransportException;

	public BikeVO addBike(BikeVO bikeVO) throws TransportException;
}