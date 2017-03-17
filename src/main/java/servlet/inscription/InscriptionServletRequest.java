package servlet.inscription;

/**
 * Requete d'inscription
 * 
 * @author Mayitabel
 * 
 */
public class InscriptionServletRequest {
    private String login;
    private String mail;
    private String mdp;

    /**
     * @return the login
     */
    public String getLogin() {
        return login;
    }

    /**
     * @param login
     *            the login to set
     */
    public void setLogin(final String login) {
        this.login = login;
    }

    /**
     * @return the mail
     */
    public String getMail() {
        return mail;
    }

    /**
     * @param email
     *            the mail to set
     */
    public void setMail(final String mail) {
        this.mail = mail;
    }

    /**
     * @return the mdp
     */
    public String getMdp() {
        return mdp;
    }

    /**
     * @param mdp
     *            the mdp to set
     */
    public void setMdp(final String mdp) {
        this.mdp = mdp;
    }
}
