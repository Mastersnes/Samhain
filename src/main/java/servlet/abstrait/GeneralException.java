package servlet.abstrait;

/**
 * Exception type
 * 
 * @author snesztler
 *
 */
public class GeneralException extends Exception {
    private static final long serialVersionUID = 4012237132221830786L;
    private int codeRetour;
    private String errorMessage;

    public GeneralException(final int codeRetour, final String message) {
        this.codeRetour = codeRetour;
        this.errorMessage = message;
    }

    /**
     * @return the codeRetour
     */
    public int getCodeRetour() {
        return codeRetour;
    }

    /**
     * @param codeRetour
     *            the codeRetour to set
     */
    public void setCodeRetour(final int codeRetour) {
        this.codeRetour = codeRetour;
    }

    /**
     * @return the errorMessage
     */
    public String getErrorMessage() {
        return errorMessage;
    }

    /**
     * @param errorMessage
     *            the errorMessage to set
     */
    public void setErrorMessage(final String errorMessage) {
        this.errorMessage = errorMessage;
    }
}
