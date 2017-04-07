'use strict';
define(["jquery"], function($){
	return {
		showError : function(message) {
			$("#menu-error-msg").html(message);
			$("#menu-error-msg").show();
		},
		hideError : function() {
			$("#menu-error-msg").hide();
		}
	};
});