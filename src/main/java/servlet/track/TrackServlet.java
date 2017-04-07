package servlet.track;

import java.io.IOException;

import javax.servlet.ServletException;

import servlet.abstrait.AbstractServlet;
import utils.CommunConstantes;
import bdd.Connexion;

/**
 * Controller permettant de tracker une action
 * 
 * @author Mayitabel
 * 
 */
public class TrackServlet extends AbstractServlet<TrackServletRequest, TrackServletResponse> {
	private static final long serialVersionUID = -4647019705021722992L;

	@Override
	protected TrackServletResponse doGet(final TrackServletRequest request) throws ServletException, IOException {
		return null;
	}

	@Override
	protected TrackServletResponse doPost(final TrackServletRequest request) throws ServletException, IOException {
		final TrackServletResponse response = new TrackServletResponse();

		Connexion.addNew(getClientIpAddr(), request.getWhere());

		return response;
	}

	@Override
	protected TrackServletRequest getRequest(final String data) {
		return CommunConstantes.GSON.fromJson(data, TrackServletRequest.class);
	}

}
