package in.businessbull.service.impl;

import in.businessbull.dataaccess.ReferenceDAO;
import in.businessbull.exception.TransportException;
import in.businessbull.service.ReferenceService;

import java.util.Map;

public class ReferenceServiceImpl implements ReferenceService {
	private ReferenceDAO daoInstance;

	public ReferenceDAO getDaoInstance() {
		return daoInstance;
	}

	public void setDaoInstance(ReferenceDAO daoInstance) {
		this.daoInstance = daoInstance;
	}

	public Map loadReferenceData() throws TransportException {
		return daoInstance.loadReferenceData();
	}

}