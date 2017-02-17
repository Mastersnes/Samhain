package filter.abstrait;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import servlet.abstrait.AbstractServlet;
import servlet.abstrait.GeneralResponse;

/**
 * Filter abstrait
 * 
 * @author Snes
 * 
 * @param <REQ>
 *            Requete
 * @param <RESP>
 *            Reponse
 */
public abstract class AbstractFilter<REQ> extends AbstractServlet<REQ, GeneralResponse> implements Filter {
    private static final long serialVersionUID = 1L;

    /**
     * Renvoi la requete rattachee au flux json en entree
     * 
     * @param data
     *            le flux json
     * @return la requete
     */
    @Override
    protected abstract REQ getRequest(final String data);

    /**
     * filtre avec un formalisme epuré
     * 
     * @param request
     *            requete
     * @return reponse
     */
    protected abstract GeneralResponse doFilter(final REQ request, final FilterChain chain)
            throws ServletException, IOException;

    @Override
    public void doFilter(final ServletRequest request, final ServletResponse response, final FilterChain chain)
            throws IOException, ServletException {
        final HttpServletRequest req = (HttpServletRequest) request;
        final REQ requete = mapRequest(req);
        final HttpServletResponse res = (HttpServletResponse) response;
        final GeneralResponse jsonResponse = doFilter(requete, chain);

        if (jsonResponse.getCodeRetour() == 0) {
            chain.doFilter(request, response);
        } else {
            setResponse(res, jsonResponse);
        }
    }

    @Override
    protected GeneralResponse doGet(final Object request) throws ServletException, IOException {
        return null;
    }

    @Override
    protected GeneralResponse doPost(final Object request) throws ServletException, IOException {
        return null;
    }
}
