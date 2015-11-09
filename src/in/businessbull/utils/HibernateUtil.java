package in.businessbull.utils;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class HibernateUtil
{

	private static final SessionFactory sFactory;

	private HibernateUtil()
	{
		super();
	}

	static
	{
		try
		{
			sFactory = new Configuration().configure().buildSessionFactory();
		}
		catch (Throwable e)
		{
			System.out.println("initial session factory creation failed" + e);
			e.printStackTrace();
			throw new ExceptionInInitializerError(e);
		}
	}

	public static SessionFactory getSessionFactory()
	{
		return sFactory;
	}
}
