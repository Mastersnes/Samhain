package bean;

import java.util.HashMap;
import java.util.Map;

/**
 * Classe representant un utilisateur
 * 
 * @author Mastersnes
 * 
 */
public class User {
	private String ip;
	private final Map<String, Action> actions = new HashMap<>();

	/**
	 * @return the ip
	 */
	public final String getIp() {
		return ip;
	}

	/**
	 * @param ip
	 *            the ip to set
	 */
	public final void setIp(final String ip) {
		this.ip = ip;
	}

	/**
	 * @return the actions
	 */
	public Map<String, Action> getActions() {
		return actions;
	}

}
