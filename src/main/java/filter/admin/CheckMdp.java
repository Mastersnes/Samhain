package filter.admin;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;

import servlet.abstrait.GeneralResponse;
import filter.abstrait.AbstractFilter;

public class CheckMdp extends AbstractFilter {

    @Override
    public void init(final FilterConfig filterConfig) throws ServletException {
    }

    @Override
    public void destroy() {
    }

    @Override
    protected GeneralResponse doFilter(final HttpServletRequest httpRequest, final FilterChain chain)
            throws ServletException, IOException {
        final GeneralResponse response = new GeneralResponse();
        if ("Meuh".equals(httpRequest.getParameter("mdp"))) {
            response.setCodeRetour(0);
        } else {
            response.setCodeRetour(-1);
            response.setMessage("Mot de passe incorrect !");
        }
        return response;
    }


}
