package bdd;

import java.util.ArrayList;
import java.util.List;

import utils.Constantes;
import utils.JsonUtil;
import bean.ComplexUser;

import com.google.gson.Gson;

public class UserDAO {
	private static UserDAO instance;
	private final List<ComplexUser> listUser = new ArrayList<ComplexUser>();

	private UserDAO() {
		restore();
	}

	/**
	 * Singleton
	 * 
	 * @return
	 */
	public static synchronized UserDAO getInstance() {
		if (instance == null) {
			instance = new UserDAO();
		}
		return instance;
	}

	/**
	 * Permet de restorer les donnees utilisateur
	 */
	public void restore() {
		final String json = JsonUtil.load(JsonUtil.USER_PATH);
		final Gson gson = Constantes.GSON;
		listUser.clear();
		@SuppressWarnings("unchecked")
		final List<ComplexUser> users = gson.fromJson(json, List.class);
		if (users != null) {
			listUser.addAll(users);
		}
	}

	/**
	 * Permet de raffraichir les donnees utilisateur
	 */
	public void refresh() {
		final Gson gson = Constantes.GSON;
		final String json = gson.toJson(listUser);
		JsonUtil.save(JsonUtil.USER_PATH, json);
	}

	/**
	 * Renvoi l'utilisateur donn�
	 * 
	 * @param titre
	 * @return
	 */
	public ComplexUser getUser(final String loginOrMail) {
		for (final ComplexUser user : listUser) {
			final String userLogin = user.getLogin();
			final String userMail = user.getMail();

			if (loginOrMail.equals(userLogin) || loginOrMail.equals(userMail)) {
				return user;
			}
		}
		return null;
	}

	/**
	 * enregistre l'utilisateur
	 * 
	 * @param user
	 */
	public void saveUser(final ComplexUser user) {
		listUser.add(user);
	}
}
