package utils;

import javax.servlet.http.HttpServletRequest;

/**
 * Classe utilitaire permettant de gerer la session
 * 
 * @author snesztler
 *
 */
public class SessionUtils {
    private static final String USER_SESSION = "USER_CONNECT";
    private static SessionUtils instance;

    private SessionUtils() {
    }

    public static SessionUtils getInstance(final HttpServletRequest httpRequest) {
        if (instance == null) {
            instance = new SessionUtils();
        }
        instance.httpRequest = httpRequest;
        return instance;
    }

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
