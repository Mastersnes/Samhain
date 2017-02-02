'use strict';
define(["jquery"], function($){
	return {
		name : "bebelSamhain",
		
		/**
		* Permet d'appeler un WS
		**/
		load : function(url, params, successC, type) {
			if (!type) type = "POST";
			
			$.ajax({
	            type: type,
	            url: url,
	            async : false,
	            data: JSON.stringify(params),
	            contentType: "application/json; charset=utf-8",
	            dataType: "json",
	            success: successC,
	            error: function (request, status, errorThrown) {
	            	console.log("Erreur lors de l'appel à : " + url);
	            }
	        });
		},
	
		rand : function(pMin, pMax) {
		  var min = Math.ceil(pMin);
		  var max = Math.floor(pMax);
		  return Math.floor(Math.random() * (max - min)) + min;
		},
		
		resizeActionButton : function() {
			if (!$(".corps > .choix > div")) return;
			var nbr = $(".corps > .choix > div:visible").length;
			var taille = 100/nbr;
			var around = parseInt(taille*100)/100;
			$(".corps > .choix > div").css("width", around + "%");
			if (nbr >= 3) {
				$(".corps > .choix > div").css("background-size", "100% 100%");
			}else {
				$(".corps > .choix > div").css("background-size", "auto 100%");
			}
		},
		
		encode : function(data) {
			return btoa(data);
		},
		
		decode : function(str) {
			return atob(str);
		}
	};
});