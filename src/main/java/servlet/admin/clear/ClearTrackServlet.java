package servlet.admin.clear;

import java.io.IOException;

import javax.servlet.ServletException;

import servlet.abstrait.AbstractServlet;
import servlet.abstrait.GeneralResponse;
import bdd.Connexion;

/**
 * Controller d'administration permettant de supprimer le tracking
 * 
 * @author Snes
 * 
 */
public class ClearTrackServlet extends AbstractServlet<String, GeneralResponse> {
    private static final long serialVersionUID = -4647019705021722992L;

    @Override
    protected GeneralResponse doGet(final String request) throws ServletException, IOException {
        return null;
    }

    @Override
    protected GeneralResponse doPost(final String request) throws ServletException, IOException {
        final GeneralResponse response = new GeneralResponse();
        Connexion.getConnexions().clear();
        response.setCodeRetour(0);
        response.setMessage("Les connexions ont ete reinitialisees");
        return response;
    }

    @Override
    protected String getRequest(final String data) {
        return null;
    }

}
