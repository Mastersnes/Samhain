/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "app/utils/messageUtils",
        "text!app/template/form/inscription.html",
        "app/model/form/inscriptionModel"], 
function($, _, Utils, MessageUtils, page, Model) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
			this.el = $("#form");
			this.model = new Model();
			this.parent = parent;
		};

		this.render = function() {
			_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {};
			this.el.html(template(templateData));
			
			this.checkEvents();
		};
		
		this.checkEvents = function() {
			var that = this;
			$("#retour").click(function() {
				that.parent.show();
			});
			$("#inscription").click(function() {
				MessageUtils.hideError();
				
				var errorMessage = that.model.validate();
				if (errorMessage) {
					MessageUtils.showError(errorMessage);
					return;
				}
				
				that.model.send(function(data) {
					console.log(data);
					if (data.codeRetour != 0) {
						MessageUtils.showError(data.message);
					}else {
						console.log("success");
					}
				});
			});
		};
		
		this.show = function() {
			Utils.load("track", {"where" : "Menu d'inscription"}, function(data) {}, "POST");
			this.render();
		};
		
		this.init(parent);
	};
});