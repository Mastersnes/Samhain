package servlet.admin;

import java.io.IOException;
import java.util.Map;

import javax.servlet.ServletException;

import servlet.abstrait.AbstractServlet;
import bdd.Connexion;
import bean.User;

/**
 * Controller d'administration permettant de recuperer les connexions
 * 
 * @author Snes
 * 
 */
public class AdminServlet extends AbstractServlet<String, AdminServletResponse> {
	private static final long serialVersionUID = -4647019705021722992L;

	@Override
	protected AdminServletResponse doGet(final String request) throws ServletException, IOException {
		final AdminServletResponse response = new AdminServletResponse();

		if ("Meuh".equals(httpRequest.getParameter("mdp"))) {

			if ("clear".equals(httpRequest.getParameter("action"))) {
				Connexion.getConnexions().clear();
			} else {
				final String ip = getClientIpAddr();
				final Map<String, User> connexions = Connexion.getConnexions();
				if (connexions.get(ip) != null) {
					connexions.get(ip).setIp("Moi");
				}
				response.setNbrConnexion(connexions.size());
				response.setConnexions(connexions);
			}
		} else {
			response.setCodeRetour(-1);
		}

		return response;
	}

	@Override
	protected AdminServletResponse doPost(final String request) throws ServletException, IOException {
		return null;
	}

	@Override
	protected String getRequest(final String data) {
		return null;
	}

}
