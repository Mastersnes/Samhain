package servlet.validation;

import java.io.IOException;
import java.util.logging.Level;

import javax.servlet.ServletException;

import servlet.abstrait.AbstractServlet;
import servlet.abstrait.GeneralException;
import servlet.abstrait.GeneralResponse;
import utils.Constantes;
import utils.Logger;
import bdd.UserDAO;
import bean.ComplexUser;

/**
 * Controller permettant de valider le mail
 * 
 * @author Mayitabel
 * 
 */
public class ValidationServlet extends AbstractServlet<ValidationServletRequest, GeneralResponse> {
	private static final long serialVersionUID = -4647019705021722992L;
	private final Logger logger = new Logger(ValidationServlet.class.getName());
	private final ValidationValidator validator = new ValidationValidator();

	@Override
	protected GeneralResponse doGet(final ValidationServletRequest request) throws ServletException, IOException {
		return null;
	}

	@Override
	protected GeneralResponse doPost(final ValidationServletRequest request) throws ServletException, IOException {
		final GeneralResponse response = new GeneralResponse();
		try {
			if (!validator.checkRequest(request)) {
				throw new GeneralException(1, "Erreur 0001 : Veuillez contacter un administrateur.");
			}

			final ComplexUser user = UserDAO.getInstance().getUser(request.getMail());
			if (user == null) {
				throw new GeneralException(2, "Cet email est inconnu, merci de vous inscrire en premier lieu.");
			}

			if (user.isVerified()) {
				throw new GeneralException(3, "Votre email est deja valide, vous pouvez vous connecter.");
			}

			if (!validator.checkToken(user, request.getToken())) {
				throw new GeneralException(4, "Votre email est deja valide, vous pouvez vous connecter.");
			}

			user.setVerified(true);
		} catch (final GeneralException e) {
			logger.log(Level.WARNING, e.getMessage());
			response.setCodeRetour(e.getCodeRetour());
			response.setMessage(e.getMessage());
		}

		return response;
	}

	@Override
	protected ValidationServletRequest getRequest(final String data) {
		return Constantes.GSON.fromJson(data, ValidationServletRequest.class);
	}

}
