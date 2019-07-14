'use strict';
define(["jquery"], function($){
	return {
		/**
		* Centre verticalement en javascript lorsque la page est bien chargée
		**/
		verticalCenter : function() {
			$(document).ready(function() {
				$(".js-center").each(function(index, value) {
					var me = $(value);
					var pere = $(me.parent());
					var topPosition = pere.offset().top + (pere.height()/2) - (me.height()/2);
					me.offset({top : topPosition});
				});
			});
		}
	};
});