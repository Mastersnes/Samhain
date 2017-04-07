/*global define */
define(["app/utils/utils"], 
function(Utils) {
	'use strict';

	return function() {
		this.data = {
				"login" : "login",
				"mdp" : "mdp"
		};
		
		this.send = function(successFunc) {
			this.data.login = $("#login").val();
			this.data.mdp = $("#mdp").val();
			Utils.load("connexion", this.data, successFunc);
		};
	};
});