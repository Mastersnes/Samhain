package servlet.connexion;

import java.io.IOException;
import java.util.logging.Level;

import javax.servlet.ServletException;

import servlet.abstrait.AbstractServlet;
import servlet.abstrait.GeneralException;
import utils.CommunConstantes;
import utils.Logger;
import utils.SessionUtils;
import webservices.bebel.BebelConnexionWSRequest;
import webservices.bebel.BebelConnexionWSResponse;
import webservices.bebel.BebelWS;

/**
 * Controller permettant de se connecter
 * 
 * @author Mayitabel
 * 
 */
public class ConnexionServlet extends AbstractServlet<ConnexionServletRequest, ConnexionServletResponse> {
    private static final long serialVersionUID = -4647019705021722992L;
    private final Logger logger = new Logger(ConnexionServlet.class.getName());
    private final BebelWS bebelWs = new BebelWS();

    @Override
    protected ConnexionServletResponse doGet(final ConnexionServletRequest request) throws ServletException,
            IOException {
        return null;
    }

    @Override
    protected ConnexionServletResponse doPost(final ConnexionServletRequest request) throws ServletException,
            IOException {
        final ConnexionServletResponse response = new ConnexionServletResponse();

        final BebelConnexionWSRequest wsRequest = new BebelConnexionWSRequest();
        wsRequest.setLogin(request.getLogin());
        wsRequest.setMdp(request.getMdp());

        BebelConnexionWSResponse wsResponse;
        try {
            wsResponse = bebelWs.callConnexion(wsRequest);

            if (wsResponse.getCodeRetour() == 0) {
                final String token = wsResponse.getToken();
                response.setToken(token);
                SessionUtils.getInstance(httpRequest).connectUser(token);
            } else {
                throw new GeneralException(wsResponse.getCodeRetour(), wsResponse.getMessage());
            }
        } catch (final GeneralException e) {
            logger.log(Level.WARNING, e.getMessage());
            response.setCodeRetour(e.getCodeRetour());
            response.setMessage(e.getMessage());
        }

        return response;
    }

    @Override
    protected ConnexionServletRequest getRequest(final String data) {
        return CommunConstantes.GSON.fromJson(data, ConnexionServletRequest.class);
    }

}
