package servlet.honeybot;

import java.io.IOException;
import java.util.Map;

import javax.servlet.ServletException;

import servlet.abstrait.AbstractServlet;
import bdd.Connexion;
import bean.User;

/**
 * Controller permettant de detecter les robots
 * 
 * @author Snes
 * 
 */
public class HoneyBotServlet extends AbstractServlet<String, HoneyBotServletResponse> {
	private static final long serialVersionUID = -4647019705021722992L;

	@Override
	protected HoneyBotServletResponse doGet(final String request) throws ServletException, IOException {
		final HoneyBotServletResponse response = new HoneyBotServletResponse();

		final Map<String, User> connexions = Connexion.getConnexions();
		final String ip = getClientIpAddr();
		if (connexions.get(ip) != null) {
			connexions.get(ip).setIp("Robot");
		}

		return response;
	}

	@Override
	protected HoneyBotServletResponse doPost(final String request) throws ServletException, IOException {
		return null;
	}

	@Override
	protected String getRequest(final String data) {
		return null;
	}

}
