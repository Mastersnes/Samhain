package webservices.bebel;

import servlet.abstrait.GeneralException;
import webservices.abstrait.AbstractWS;

public class BebelWS extends AbstractWS {
    public BebelConnexionWSResponse callConnexion(final BebelConnexionWSRequest request) throws GeneralException {
        return call("/connexion", request, BebelConnexionWSResponse.class);
    }

    @Override
    public String getUrl() {
        return "http://localhost:8080/Bebel";
    }
}
