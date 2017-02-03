package filter.abstrait;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.logging.Level;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import servlet.abstrait.GeneralResponse;
import utils.Constantes;
import utils.Logger;

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
public abstract class AbstractFilter implements Filter {
	private static Logger LOGGER = new Logger(AbstractFilter.class.getName());

    /**
     * filtre avec un formalisme epuré
     * 
     * @param request
     *            requete
     * @return reponse
     */
    protected abstract GeneralResponse doFilter(final HttpServletRequest request, final FilterChain chain)
            throws ServletException, IOException;

    @Override
    public void doFilter(final ServletRequest request, final ServletResponse response, final FilterChain chain)
            throws IOException, ServletException {
        final HttpServletRequest req = (HttpServletRequest) request;
        final HttpServletResponse res = (HttpServletResponse) response;
        final GeneralResponse jsonResponse = doFilter(req, chain);

        if (jsonResponse.getCodeRetour() == 0) {
            chain.doFilter(request, response);
        } else {
            setResponse(res, jsonResponse);
        }
    }

	/**
	 * Ecrit la reponse au format json
	 * 
	 * @param resp
	 * @param response
	 */
    protected void setResponse(final HttpServletResponse resp, final GeneralResponse response) {
		PrintWriter writer = null;
		try {
			writer = resp.getWriter();
			writer.append(Constantes.GSON.toJson(response));
			writer.flush();
		} catch (final IOException e) {
			LOGGER.log(Level.WARNING, "Reponse invalide");
		} finally {
			if (writer != null) {
				writer.close();
			}
		}
	}
}
