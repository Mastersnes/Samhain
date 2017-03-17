package utils;

import java.math.BigInteger;
import java.security.SecureRandom;
import java.util.List;

/**
 * Classe utilitaire permettant de generer un token unique
 * 
 * @author snesztler
 *
 */
public class TokenUtils {
    private static TokenUtils instance;
    private final SecureRandom random = new SecureRandom();

    private TokenUtils() {
    }

    public static synchronized TokenUtils getInstance() {
        if (instance == null) {
            instance = new TokenUtils();
        }
        return instance;
    }

    public String generateToken(final List<String> forbidden) {
        if (forbidden == null)
            return new BigInteger(130, random).toString(32);
        String token;
        while (forbidden.contains(token = new BigInteger(130, random).toString(32)))
            ;
        return token;
    }
}
