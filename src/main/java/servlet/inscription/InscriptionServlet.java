package servlet.inscription;

import java.io.IOException;
import java.util.logging.Level;

import javax.servlet.ServletException;

import servlet.abstrait.AbstractServlet;
import servlet.abstrait.GeneralException;
import servlet.abstrait.GeneralResponse;
import utils.Constantes;
import utils.Logger;
import utils.MailUtils;
import utils.TokenUtils;
import bdd.UserDAO;
import bean.ComplexUser;

/**
 * Controller permettant de s'inscrire
 * 
 * @author Mayitabel
 * 
 */
public class InscriptionServlet extends AbstractServlet<InscriptionServletRequest, GeneralResponse> {
	private static final long serialVersionUID = -4647019705021722992L;
	private final Logger logger = new Logger(InscriptionServlet.class.getName());
	private final InscriptionValidator validator = new InscriptionValidator();

	@Override
	protected GeneralResponse doGet(final InscriptionServletRequest request) throws ServletException, IOException {
		return null;
	}

	@Override
	protected GeneralResponse doPost(final InscriptionServletRequest request) throws ServletException, IOException {
		final GeneralResponse response = new GeneralResponse();
		try {
			if (!validator.checkRequest(request)) {
				throw new GeneralException(1, "Utilisateur inconnu");
			}

			if (!validator.checkPassword(request.getMdp())) {
				throw new GeneralException(2, "Mot de passe incorrecte.");
			}

			if (!validator.checkNotExist(request.getLogin(), request.getMdp())) {
				throw new GeneralException(3, "Vous etes deja inscrit, merci de vous connecter.");
			}

			inscription(request);
		} catch (final GeneralException e) {
			logger.log(Level.WARNING, e.getMessage());
			response.setCodeRetour(e.getCodeRetour());
			response.setMessage(e.getMessage());
		}

		return response;
	}

	private void inscription(final InscriptionServletRequest request) {
		final ComplexUser user = new ComplexUser();
		user.setLogin(request.getLogin());
		user.setMail(request.getMail());
		user.setMdp(request.getMdp());
		user.setVerifToken(TokenUtils.getInstance().generateToken(null));
		user.setVerified(false);
		UserDAO.getInstance().saveUser(user);
		MailUtils.getInstance().sendVerifMail(user.getMail(), user.getVerifToken());
	}

	@Override
	protected InscriptionServletRequest getRequest(final String data) {
		return Constantes.GSON.fromJson(data, InscriptionServletRequest.class);
	}

}
