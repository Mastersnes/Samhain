package servlet.connexion;

import org.apache.commons.lang.StringUtils;

import bean.SimplyUser;

/**
 * Validator du servlet d'authentification
 * 
 * @author Mayitabel
 * 
 */
public class ConnexionValidator {
    /**
     * Verifie que la request est bien remplie
     * 
     * @param request
     * @return
     */
    public boolean checkRequest(final ConnexionServletRequest request) {
        final String login = request.getLogin();
        final String mdp = request.getMdp();

        return !StringUtils.isEmpty(login) && !StringUtils.isEmpty(mdp);
    }

    /**
     * Verifie que le mot de passe est correct
     * 
     * @param user
     * @param mdp
     * @return
     */
    public boolean checkPassword(final SimplyUser user, final String mdp) {
        return user.getMdp().equals(mdp);
    }
}
