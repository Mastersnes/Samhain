package bdd;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import utils.Constantes;
import bean.Action;
import bean.Device;

public class Connexion {
	private static Map<String, Device> connexions = new HashMap<>();

	public static synchronized void addNew(final String ip, final String where) {
		Device user = connexions.get(ip);
		if (user == null) {
			user = new Device();
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

	public static synchronized Map<String, Device> getConnexions() {
		return connexions;
	}
}
