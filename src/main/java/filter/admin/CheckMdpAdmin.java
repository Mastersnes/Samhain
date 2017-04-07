package filter.admin;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;

import servlet.abstrait.GeneralResponse;
import utils.CommunConstantes;
import filter.abstrait.AbstractFilter;

public class CheckMdpAdmin extends AbstractFilter<AdminFilterRequest> {
    private static final long serialVersionUID = 1L;

    @Override
    public void init(final FilterConfig filterConfig) throws ServletException {
    }

    @Override
    public void destroy() {
    }

    @Override
    protected GeneralResponse doFilter(final AdminFilterRequest request, final FilterChain chain)
            throws ServletException, IOException {
        final GeneralResponse response = new GeneralResponse();
        if ("Meuh".equals(request.getMdp())) {
            response.setCodeRetour(0);
        } else {
            response.setCodeRetour(-1);
            response.setMessage("Mot de passe incorrect !");
        }
        return response;
    }

    @Override
    protected AdminFilterRequest getRequest(final String data) {
        return CommunConstantes.GSON.fromJson(data, AdminFilterRequest.class);
    }

}
