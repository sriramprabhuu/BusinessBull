package in.businessbull.exception;

public class TransportException extends Exception
{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private String errorMessage = null;

	private int errorCode = 0;

	public TransportException(String errorMessage, int errorCode)
	{
		super();
		this.errorMessage = errorMessage;
		this.errorCode = errorCode;
	}
	
	public TransportException(String errorMessage)
	{
		super();
		this.errorMessage = errorMessage;
	}

	public String getErrorMessage()
	{
		return errorMessage;
	}

	public void setErrorMessage(String errorMessage)
	{
		this.errorMessage = errorMessage;
	}

	public int getErrorCode()
	{
		return errorCode;
	}

	public void setErrorCode(int errorCode)
	{
		this.errorCode = errorCode;
	}

}
