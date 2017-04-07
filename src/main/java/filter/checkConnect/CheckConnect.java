package filter.checkConnect;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;

import servlet.abstrait.GeneralResponse;
import utils.CommunConstantes;
import utils.SessionUtils;
import filter.abstrait.AbstractFilter;

public class CheckConnect extends AbstractFilter<ConnectFilterRequest> {
    private static final long serialVersionUID = 1L;

    @Override
    public void init(final FilterConfig filterConfig) throws ServletException {
    }

    @Override
    public void destroy() {
    }

    @Override
    protected GeneralResponse doFilter(final ConnectFilterRequest request, final FilterChain chain)
            throws ServletException, IOException {
        final GeneralResponse response = new GeneralResponse();

        final String sessionToken = SessionUtils.getInstance(httpRequest).getUser();
        final String requestToken = request.getToken();

        if (sessionToken == null || !sessionToken.equals(requestToken)) {
            response.setCodeRetour(-1);
            response.setMessage("La session a expiree, Veuillez vous reconnecter");
        }

        return response;
    }

    @Override
    protected ConnectFilterRequest getRequest(final String data) {
        return CommunConstantes.GSON.fromJson(data, ConnectFilterRequest.class);
    }

}
