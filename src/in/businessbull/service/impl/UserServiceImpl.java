package in.businessbull.service.impl;

import in.businessbull.dataaccess.UserDAO;
import in.businessbull.exception.TransportException;
import in.businessbull.service.UserService;
import in.businessbull.vo.UserVO;

import java.util.List;

public class UserServiceImpl implements UserService {
	private UserDAO daoInstance;

	public UserDAO getDaoInstance() {
		return daoInstance;
	}

	public void setDaoInstance(UserDAO daoInstance) {
		this.daoInstance = daoInstance;
	}

	public UserVO addUser(UserVO userVO) throws TransportException {
		return daoInstance.addUser(userVO);
	}

	public List<UserVO> getUsers(UserVO userVO) throws TransportException {
		return daoInstance.getUsers(userVO);
	}

}