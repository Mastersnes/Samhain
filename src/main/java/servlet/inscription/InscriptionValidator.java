package servlet.inscription;

import org.apache.commons.lang.StringUtils;

import bdd.UserDAO;
import bean.ComplexUser;

/**
 * Validator du servlet d'authentification
 * 
 * @author Mayitabel
 * 
 */
public class InscriptionValidator {
	/**
	 * Verifie que les champs ne sont pas null
	 * 
	 * @param request
	 * @return
	 */
	public boolean checkRequest(final InscriptionServletRequest request) {
		final String login = request.getLogin();
		final String mail = request.getMail();
		final String mdp = request.getMdp();

		return !StringUtils.isEmpty(login) && !StringUtils.isEmpty(mail) && !StringUtils.isEmpty(mdp);
	}

	/**
	 * permet de verifier un mail
	 * 
	 * @param request
	 * @return
	 */
	public boolean checkMail(final InscriptionServletRequest request) {
		final String email = request.getMail();
		return email.matches("^[a-zA-Z0-9+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$");
	}

	/**
	 * A remettre en JS
	 * 
	 * @param mdp
	 * @return
	 */
	public boolean checkPassword(final String mdp) {
		boolean mdpValide = true;

		// Contient une majuscule
		mdpValide &= mdp.matches("^(?=.*[A-Z]).*$");

		// Contient une minuscule
		mdpValide &= mdp.matches("^(?=.*[a-z]).*$");

		// Contient un chiffre
		mdpValide &= mdp.matches("^(?=.*\\d).*$");

		// Fit minimum 10 caracteres
		mdpValide &= mdp.length() >= 10;

		return mdpValide;
	}

	public boolean checkNotExist(final String login, final String mail) {
		ComplexUser user = UserDAO.getInstance().getUser(login);
		if (user == null) {
			user = UserDAO.getInstance().getUser(mail);
		}

		return user == null;
	}
}
