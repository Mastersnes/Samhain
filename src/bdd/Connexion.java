package bdd;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import utils.Constantes;
import bean.Action;
import bean.User;

public class Connexion {
	private static Map<String, User> connexions = new HashMap<>();

	public static synchronized void addNew(final String ip, final String where) {
		User user = connexions.get(ip);
		if (user == null) {
			user = new User();
			connexions.put(ip, user);
		}
		user.setIp(ip);

		Action action = user.getActions().get(where);
		if (action == null) {
			action = new Action();
			user.getActions().put(where, action);
		}
		action.setDate(Constantes.FORMAT.format(new Date()));
		action.setNombre(action.getNombre() + 1);

	}

	public static synchronized Map<String, User> getConnexions() {
		return connexions;
	}
}
