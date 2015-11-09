package in.businessbull.service;

import in.businessbull.dataaccess.ReferenceDAO;
import in.businessbull.exception.TransportException;

import java.util.Map;

public interface ReferenceService {
	public ReferenceDAO getDaoInstance();

	public void setDaoInstance(ReferenceDAO daoInstance);

	public Map loadReferenceData() throws TransportException;
}