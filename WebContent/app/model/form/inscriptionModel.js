/*global define */
define(["app/utils/utils"], 
function(Utils) {
	'use strict';

	return function() {
		this.data = {
				"login" : "login",
				"mail" : "mail",
				"verifMail" : "verifMail",
				"mdp" : "mdp",
				"verifMdp" : "mdp"
		};
		
		this.validate = function() {
			var mdp = $("#mdp").val();
			
			var errorMessage = "";
			
			// Contient une majuscule
			if (!/^(?=.*[A-Z]).*$/.test(mdp)) {
				errorMessage += "Votre mot de passe doit contenir au moins une majuscule.<br/>";
			}
			// Contient une minuscule
			if (!/^(?=.*[a-z]).*$/.test(mdp)) {
				errorMessage += "Votre mot de passe doit contenir au moins une minuscule.<br/>";
			}
			// Contient un chiffre
			if (!/^(?=.*\d).*$/.test(mdp)) {
				errorMessage += "Votre mot de passe doit contenir au moins un chiffre.<br/>";
			}
			// Fait minimum 10 caracteres
			if (mdp.length < 10) {
				errorMessage += "Votre mot de passe doit faire au minimum 10 caracteres.";
			}
			
			return errorMessage;
		};
		
		this.send = function(successFunc) {
			this.data.login = $("#login").val();
			this.data.mail = $("#mail").val();
			this.data.verifMail = $("#verifMail").val();
			this.data.mdp = $("#mdp").val();
			this.data.verifMdp = $("#verifMdp").val();
			Utils.load("../Bebel/subscribe", this.data, successFunc);
		};
	};
});