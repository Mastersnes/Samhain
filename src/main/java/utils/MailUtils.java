package utils;

import java.util.logging.Level;

import com.sendgrid.SendGrid;
import com.sendgrid.SendGridException;

public class MailUtils {
	private static Logger LOGGER = new Logger(MailUtils.class.getName());
	private static MailUtils instance;

	private MailUtils() {
	}

	public static synchronized MailUtils getInstance() {
		if (instance == null) {
			instance = new MailUtils();
		}
		return instance;
	}

	public void sendMail(final String to, final String subject, final String message) {
		final String userName = System.getenv("SENDGRID_USERNAME");
		final String password = System.getenv("SENDGRID_PASSWORD");
		final SendGrid sendgrid = new SendGrid(userName, password);

		final SendGrid.Email email = new SendGrid.Email();

		email.addTo(to);
		email.setFrom("noReply");
		email.setSubject(subject);
		email.setHtml(message);

		try {
			final SendGrid.Response reponse = sendgrid.send(email);
			LOGGER.log(Level.INFO, "---Mail---");
			LOGGER.log(Level.INFO, "Mail envoyé à : " + to);
			LOGGER.log(Level.INFO, "Sujet : " + subject);
			LOGGER.log(Level.INFO, "Message : " + message);
			LOGGER.log(Level.INFO, "----------");
			if (reponse != null) {
				LOGGER.log(Level.INFO, reponse.getCode() + " : " + reponse.getMessage());
			}
		} catch (final SendGridException e) {
			LOGGER.log(Level.INFO, "Exception : " + e);
		}
	}

	public void sendVerifMail(final String email, final String token) {
		final String subject = "Mail de confirmation";
		final StringBuilder message = new StringBuilder();
		message.append("Bonjour, vous voici inscrit sur BUL !<br/>");
		message.append("Afin de confirmer votre inscription, veuillez suivre ce lien : <br/>");

		final StringBuilder lien = new StringBuilder();
		lien.append("http://tomcat-bebel.rhcloud.com/Bul/");
		lien.append("?page=confirmation");
		lien.append("&email=").append(email);
		lien.append("&token=").append(token);

		String balise = "<a href='?1'>Commencer &agrave; jouer!</a>";
		balise = balise.replace("?1", lien);

		message.append(balise).append("<br/><br/>");
		message.append("Ceci est un message automatique, merci de ne pas y repondre.");

		sendMail(email, subject, message.toString());
	}
}
