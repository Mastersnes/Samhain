package bean;

public class ComplexUser extends SimplyUser {
	private boolean verified;
	private String verifToken;

	/**
	 * @return the verified
	 */
	public boolean isVerified() {
		return verified;
	}

	/**
	 * @param verified
	 *            the verified to set
	 */
	public void setVerified(final boolean verified) {
		this.verified = verified;
	}

	/**
	 * 
	 * @param generateToken
	 */
	public void setVerifToken(final String generateToken) {
		this.verifToken = generateToken;
	}

	/**
	 * @return the jetonInscription
	 */
	public String getVerifToken() {
		return verifToken;
	}
}
