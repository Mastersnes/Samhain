package servlet.connexion;

import java.io.IOException;
import java.util.logging.Level;

import javax.servlet.ServletException;

import servlet.abstrait.AbstractServlet;
import servlet.abstrait.GeneralException;
import utils.Constantes;
import utils.Logger;
import utils.TokenUtils;
import bdd.UserDAO;
import bean.ComplexUser;

/**
 * Controller permettant de se connecter
 * 
 * @author Mayitabel
 * 
 */
public class ConnexionServlet extends AbstractServlet<ConnexionServletRequest, ConnexionServletResponse> {
    private static final long serialVersionUID = -4647019705021722992L;
    private final Logger logger = new Logger(ConnexionServlet.class.getName());
    private final ConnexionValidator validator = new ConnexionValidator();

    @Override
    protected ConnexionServletResponse doGet(final ConnexionServletRequest request) throws ServletException,
            IOException {
        return null;
    }

    @Override
    protected ConnexionServletResponse doPost(final ConnexionServletRequest request) throws ServletException,
            IOException {
        final ConnexionServletResponse response = new ConnexionServletResponse();
        try {
            validator.checkRequest(request);

            final ComplexUser user = UserDAO.getInstance().getUser(request.getLogin());
            if (user == null) {
                throw new GeneralException(2, "Utilisateur inconnu");
            }

            validator.checkPassword(user, request.getMdp());

            if (!user.isVerified()) {
                throw new GeneralException(4, "Veuillez valider votre inscription en verifiant vos mail.");
            }

            // Token de connexion
            response.setToken(TokenUtils.getInstance().generateToken(null));
            connectUser(response.getToken());
        } catch (final GeneralException e) {
            logger.log(Level.WARNING, e.getMessage());
            response.setCodeRetour(e.getCodeRetour());
            response.setMessage(e.getMessage());
        }

        return response;
    }

    @Override
    protected ConnexionServletRequest getRequest(final String data) {
        return Constantes.GSON.fromJson(data, ConnexionServletRequest.class);
    }

}
