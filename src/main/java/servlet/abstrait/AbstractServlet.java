package servlet.abstrait;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.logging.Level;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import utils.Constantes;
import utils.Logger;
import utils.SessionUtils;

import com.google.gson.JsonSyntaxException;

/**
 * Servlet abstraite
 * 
 * @author Snes
 * 
 * @param <REQ>
 *            Requete
 * @param <RESP>
 *            Reponse
 */
public abstract class AbstractServlet<REQ, RESP> extends SessionUtils {
	private static final long serialVersionUID = -2106602941142608141L;
	private static Logger LOGGER = new Logger(AbstractServlet.class.getName());

	/**
	 * Requete GET avec un formalisme epuré
	 * 
	 * @param request
	 *            requete
	 * @return reponse
	 * @throws ServletException
	 * @throws IOException
	 */
	protected abstract RESP doGet(final REQ request) throws ServletException, IOException;

	/**
	 * Requete POST avec un formalisme epuré
	 * 
	 * @param request
	 *            requete
	 * @return reponse
	 * @throws ServletException
	 * @throws IOException
	 */
	protected abstract RESP doPost(final REQ request) throws ServletException, IOException;

	/**
	 * Renvoi la requete rattaché au flux json en entrée
	 * 
	 * @param data
	 *            le flux json
	 * @return la requete
	 */
	protected abstract REQ getRequest(final String data);

	@Override
	protected void doGet(final HttpServletRequest req, final HttpServletResponse resp) throws ServletException,
			IOException {
		final REQ requete = mapRequest(req);
		final RESP response = doGet(requete);
		setResponse(resp, response);
	}

	@Override
	protected void doPost(final HttpServletRequest req, final HttpServletResponse resp) throws ServletException,
			IOException {
		final REQ requete = mapRequest(req);
		final RESP response = doPost(requete);
		setResponse(resp, response);
	}

	/**
	 * Retour transforme la requete http en requete json
	 * 
	 * @param req
	 *            requete Http
	 * @return requete json
	 */
    protected REQ mapRequest(final HttpServletRequest req) {
        httpRequest = req;
        final String data = getAttribute(req);
		if (data != null) {
			try {
				final REQ request = getRequest(data);
				return request;
			} catch (final JsonSyntaxException e) {
				LOGGER.log(Level.WARNING, "Requete invalide");
			}
		}
		return null;
	}

	/**
	 * Recupere le flux json present dans la requete
	 * 
	 * @param req
	 * @return
	 */
	private String getAttribute(final HttpServletRequest req) {
		BufferedReader in = null;
		try {
			in = new BufferedReader(new InputStreamReader(req.getInputStream()));
			return in.readLine();
		} catch (final IOException e) {
			LOGGER.log(Level.WARNING, "Erreur d'ouverture de la requete");
		} finally {
			if (in != null) {
				try {
					in.close();
				} catch (final IOException e) {
					LOGGER.log(Level.WARNING, "Erreur de fermeture de la requete");
				}
			}
		}
		return null;
	}

	/**
	 * Ecrit la reponse au format json
	 * 
	 * @param resp
	 * @param response
	 */
	protected void setResponse(final HttpServletResponse resp, final RESP response) {
		PrintWriter writer = null;
		try {
			writer = resp.getWriter();
			writer.append(Constantes.GSON.toJson(response));
			writer.flush();
		} catch (final IOException e) {
			LOGGER.log(Level.WARNING, "Reponse invalide");
		} finally {
			if (writer != null) {
				writer.close();
			}
		}
	}

	protected String getClientIpAddr() {
		String ip = httpRequest.getHeader("X-Forwarded-For");
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = httpRequest.getHeader("Proxy-Client-IP");
		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = httpRequest.getHeader("WL-Proxy-Client-IP");
		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = httpRequest.getHeader("HTTP_CLIENT_IP");
		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = httpRequest.getHeader("HTTP_X_FORWARDED_FOR");
		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = httpRequest.getRemoteAddr();
		}
		return ip;
	}
}
