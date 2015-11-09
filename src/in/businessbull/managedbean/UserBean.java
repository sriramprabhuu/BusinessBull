package in.businessbull.managedbean;

import in.businessbull.exception.TransportException;
import in.businessbull.service.UserService;
import in.businessbull.vo.UserVO;

import java.util.List;

import org.apache.log4j.Logger;

public class UserBean {

	private Logger logger = Logger.getLogger(this.getClass());

	private UserService userService;

	public UserService getUserService() {
		return userService;
	}

	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	public String adduser() {
		logger.debug("Start VehicleBean.adduser");
		UserVO userVO = new UserVO();
		try {
			userService.addUser(userVO);
		} catch (TransportException e) {

		}
		logger.debug("End VehicleBean.adduser");
		return "userAdded";
	}

	public String getUsers() {
		logger.debug("Start VehicleBean.getUsers");
		UserVO userVO = new UserVO();
		List<UserVO> list = null;
		try {
			list = userService.getUsers(userVO);
		} catch (TransportException e) {

		}
		logger.debug("End VehicleBean.getUsers");
		return "gotUsers";
	}
}