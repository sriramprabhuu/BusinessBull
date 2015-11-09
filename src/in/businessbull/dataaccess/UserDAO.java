package in.businessbull.dataaccess;

import in.businessbull.vo.UserVO;

import java.util.Date;
import java.util.List;

import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Expression;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

public class UserDAO extends HibernateDaoSupport {

	public UserVO addUser(UserVO userVO) {
		userVO.setCreatedDate(new Date());
		getHibernateTemplate().saveOrUpdate(userVO);
		return userVO;
	}

	public List<UserVO> getUsers(UserVO userVO) {
		DetachedCriteria criteria = DetachedCriteria.forClass(UserVO.class);
		criteria.add(Expression.eq("userId", userVO.getUserId()));
		List users = getHibernateTemplate().findByCriteria(criteria);
		return users;
	}
}