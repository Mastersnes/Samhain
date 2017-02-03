package servlet.abstrait;

/**
 * Reponse de base
 * 
 * @author Snes
 * 
 */
public class GeneralResponse {
	private int codeRetour;
	private String message;

	/**
	 * @return the codeRetour
	 */
	public final int getCodeRetour() {
		return this.codeRetour;
	}

	/**
	 * @param codeRetour
	 *            the codeRetour to set
	 */
	public final void setCodeRetour(final int codeRetour) {
		this.codeRetour = codeRetour;
	}

	/**
	 * @return the message
	 */
	public final String getMessage() {
		return this.message;
	}

	/**
	 * @param message
	 *            the message to set
	 */
	public final void setMessage(final String message) {
		this.message = message;
	}
}
