package servlet.validation;

import org.apache.commons.lang.StringUtils;

import bean.ComplexUser;

/**
 * Validator du servlet d'authentification
 * 
 * @author Mayitabel
 * 
 */
public class ValidationValidator {
	/**
	 * Verifie que les champs ne sont pas null
	 * 
	 * @param request
	 * @return
	 */
	public boolean checkRequest(final ValidationServletRequest request) {
		final String mail = request.getMail();
		final String token = request.getToken();

		return !StringUtils.isEmpty(mail) && !StringUtils.isEmpty(token);
	}

	/**
	 * Verifie que le token d'inscription est valide
	 * 
	 * @param user
	 * @param request
	 * @return
	 */
	public boolean checkToken(final ComplexUser user, final String requestToken) {
		final String userToken = user.getVerifToken();
		return requestToken.equals(userToken);
	}
}
