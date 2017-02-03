package servlet.admin.clear;

import java.io.IOException;

import javax.servlet.ServletException;

import servlet.abstrait.AbstractServlet;
import bdd.Connexion;

/**
 * Controller d'administration permettant de supprimer le tracking
 * 
 * @author Snes
 * 
 */
public class ClearTrackServlet extends AbstractServlet<String, String> {
    private static final long serialVersionUID = -4647019705021722992L;

    @Override
    protected String doGet(final String request) throws ServletException, IOException {
        Connexion.getConnexions().clear();
        return "DONE";
    }

    @Override
    protected String doPost(final String request) throws ServletException, IOException {
        return null;
    }

    @Override
    protected String getRequest(final String data) {
        return null;
    }

}
