/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "text!app/template/form/connexion.html",
        "app/model/menu/connexionModel"], 
function($, _, Utils, page, Model) {
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
			$("#connexion").click(function() {
				var errorMessage = that.model.validate();
				if (errorMessage) {
					that.showMsg(errorMessage);
				}else {
					that.hideMsg();
					that.model.send(function(data) {
						if (data.codeRetour != 0) {
							that.showMsg(data.message);
						}else {
							console.log("success");
						}
					});
				}
			});
			$("#inscription").click(function() {
				
			});
		};
		
		this.showMsg = function(message) {
			$("#menu-error-msg").text(message);
			$("#menu-error-msg").show();
		};
		this.hideMsg = function() {
			$("#menu-error-msg").hide();
		};
		
		this.show = function() {
			Utils.load("track", {"where" : "Menu de connexion"}, function(data) {}, "POST");
			this.render();
		};
		
		this.init(parent);
	};
});