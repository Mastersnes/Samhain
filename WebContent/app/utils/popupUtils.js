'use strict';
define(["jquery",
        'underscore',
        "text!app/template/popups/confirm.html",
        "text!app/template/popups/alert.html"], function($, _, confirmPage, alertPage){
	return {
		/**
		* Affiche une popup de confirmation
		**/
		confirm : function(Textes, textePopup, callbackSuccess, callbackCancel, texteYes, texteNo) {
		    if (!texteYes) texteYes = Textes.get("yesButton");
		    if (!texteNo) texteNo = Textes.get("noButton");
			
			var el = $("body > #popups");
			if ($(".scene > #popups").length > 0) el = $(".scene > #popups");
			
			_.templateSettings.variable = "data";
            var template = _.template(confirmPage);
            var templateData = {
            		text : Textes,
            		textePopup : textePopup,
                    texteYes : texteYes,
                    texteNo : texteNo
            };
            el.html(template(templateData));
            el.find(".popup").fadeIn();
            
            el.find(".yes").click(function() {
            	el.find(".popup").fadeOut();
            	if (callbackSuccess) callbackSuccess();
            });
            el.find(".no").click(function() {
            	el.find(".popup").fadeOut();
            	if (callbackCancel) callbackCancel();
            });
		},
		
		/**
		* Affiche une popup d'information
		**/
		alert : function(Textes, textePopup, texteOk, callbackSuccess, noButton) {
		    if (!texteOk) texteOk = Textes.get("suivant");
		    
		    var el = $("body > #popups");
		    if ($(".scene > #popups").length > 0) el = $(".scene > #popups");
			
		    _.templateSettings.variable = "data";
            var template = _.template(alertPage);
            var templateData = {
            		text : Textes,
            		textePopup : textePopup,
                    texteOk : texteOk
            };
            el.html(template(templateData));
            el.find(".popup").fadeIn();
            
            if (noButton) {
            	el.find(".popup .buttons").hide();
            	el.find(".popup .close-button").show();
		    }else {
            	el.find(".popup .buttons").show();
            	el.find(".popup .close-button").hide();
		    }
            
            el.find(".yes, .close-button").click(function() {
            	el.find(".popup").fadeOut();
            	if (callbackSuccess) callbackSuccess();
            });
		}
	};
});