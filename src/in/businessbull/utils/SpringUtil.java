package in.businessbull.utils;

import javax.servlet.ServletContext;

import org.springframework.context.ApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

public class SpringUtil
{

	private static ApplicationContext appContext;

	private SpringUtil()
	{
		super();
	}

	public static ApplicationContext getContextInstance()
	{
		ServletContext context = null;
		if(appContext == null)
		{
			try
			{
				context = FacesUtils.getServletContext();
				appContext = (ApplicationContext) WebApplicationContextUtils
					.getRequiredWebApplicationContext(context);
			}
			catch (Throwable e)
			{
				e.printStackTrace();
			}
		}
		return appContext;
	}
}
