package servlet.admin.check;

import java.util.Map;

import servlet.abstrait.GeneralResponse;
import bean.User;

/**
 * Reponse de la servlet d'administration
 * 
 * @author Snes
 * 
 */
public class CheckServletResponse extends GeneralResponse {
	private int nbrConnexion;
	private Map<String, User> connexions;

	public int getNbrConnexion() {
		return nbrConnexion;
	}

	public void setNbrConnexion(final int nbrConnexion) {
		this.nbrConnexion = nbrConnexion;
	}

	/**
	 * @return
	 */
	public Map<String, User> getConnexions() {
		return connexions;
	}

	/**
	 * @param connexions
	 */
	public void setConnexions(final Map<String, User> connexions) {
		this.connexions = connexions;
	}

}
