package servlet.connexion;

import org.apache.commons.lang.StringUtils;

import servlet.abstrait.GeneralException;
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
     * @throws GeneralException
     */
    public void checkRequest(final ConnexionServletRequest request) throws GeneralException {
        final String login = request.getLogin();
        final String mdp = request.getMdp();

        if (StringUtils.isEmpty(login)) {
            throw new GeneralException(1, "Veuillez indiquer un identifiant de connexion.");
        }
        if (StringUtils.isEmpty(mdp)) {
            throw new GeneralException(1, "Veuillez indiquer un mot de passe de connexion.");
        }
    }

    /**
     * Verifie que le mot de passe est correct
     * 
     * @param user
     * @param mdp
     * @throws GeneralException
     */
    public void checkPassword(final SimplyUser user, final String mdp) throws GeneralException {
        if (!user.getMdp().equals(mdp)) {
            throw new GeneralException(3, "Mot de passe incorrecte.");
        }
    }
}
