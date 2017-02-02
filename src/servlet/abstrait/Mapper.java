package servlet.abstrait;

/**
 * Mapper de base
 * 
 * @author Snes
 * 
 * @param <REQ>
 * @param <RESP>
 */
public abstract class Mapper<REQ, RESP> {
	/**
	 * Construit la reponse à partir de la requete
	 * 
	 * @param request
	 * @return
	 */
	public abstract RESP map(final REQ request);
}
