package in.businessbull.service;

import in.businessbull.dataaccess.UserDAO;
import in.businessbull.exception.TransportException;
import in.businessbull.vo.UserVO;

import java.util.List;

public interface UserService {
	public UserDAO getDaoInstance();

	public void setDaoInstance(UserDAO daoInstance);

	public List<UserVO> getUsers(UserVO userVO) throws TransportException;

	public UserVO addUser(UserVO userVO) throws TransportException;
}