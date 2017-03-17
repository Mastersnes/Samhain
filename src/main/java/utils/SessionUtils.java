package utils;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;

/**
 * Classe utilitaire permettant de gerer la session
 * 
 * @author snesztler
 *
 */
public class SessionUtils extends HttpServlet {
    private static final long serialVersionUID = -1115526172398379397L;
    private static final String USER_SESSION = "USER_CONNECT";

    /**
     * Requete http
     */
    protected HttpServletRequest httpRequest;

    public void connectUser(final String token) {
        httpRequest.getSession().setAttribute(USER_SESSION, token);
    }

    public String getUser() {
        return (String) httpRequest.getSession().getAttribute(USER_SESSION);
    }

}
