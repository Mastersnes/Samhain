package servlet.admin.check;

import java.io.IOException;
import java.util.Map;

import javax.servlet.ServletException;

import servlet.abstrait.AbstractServlet;
import bdd.Connexion;
import bean.Device;

/**
 * Controller d'administration permettant de recuperer les connexions
 * 
 * @author Snes
 * 
 */
public class CheckServlet extends AbstractServlet<String, CheckServletResponse> {
    private static final long serialVersionUID = -4647019705021722992L;

    @Override
    protected CheckServletResponse doGet(final String request) throws ServletException, IOException {
        return null;
    }

    @Override
    protected CheckServletResponse doPost(final String request) throws ServletException, IOException {
        final CheckServletResponse response = new CheckServletResponse();

        final String ip = getClientIpAddr();
        final Map<String, Device> connexions = Connexion.getConnexions();
        if (connexions.get(ip) != null) {
            connexions.get(ip).setIp("Moi");
        }
        response.setNbrConnexion(connexions.size());
        response.setConnexions(connexions);

        return response;
    }

    @Override
    protected String getRequest(final String data) {
        return null;
    }

}
