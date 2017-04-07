package webservices.abstrait;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.logging.Level;

import servlet.abstrait.GeneralException;
import utils.CommunConstantes;
import utils.Logger;

public abstract class AbstractWS {
    private static Logger LOGGER = new Logger(AbstractWS.class.getName());

    protected abstract String getUrl();

    protected <REQ, RES> RES call(final String path, final REQ req, final Class<RES> responseType)
            throws GeneralException {
        final String input = CommunConstantes.GSON.toJson(req);
        final StringBuilder response = new StringBuilder();
        try {
            final URL url = new URL(getUrl() + path);
            final HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setDoOutput(true);
            conn.setRequestMethod("POST");
            conn.setRequestProperty("Content-Type", "application/json");

            final OutputStream os = conn.getOutputStream();
            os.write(input.getBytes());
            os.flush();

            final BufferedReader br = new BufferedReader(new InputStreamReader((conn.getInputStream())));

            String output;
            while ((output = br.readLine()) != null) {
                response.append(output);
            }
            conn.disconnect();
        } catch (final MalformedURLException e) {
            LOGGER.log(Level.WARNING, e.getMessage());
            throw new GeneralException(1, "Le WS possede une mauvaise adresse : " + getUrl() + path);
        } catch (final IOException e) {
            throw new GeneralException(1, "Impossible de contacter le WS : " + getUrl() + path);
        }

        return CommunConstantes.GSON.fromJson(response.toString(), responseType);
    }

}
