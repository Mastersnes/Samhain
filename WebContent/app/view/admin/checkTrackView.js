/*global define */
define(["jquery", 
        'underscore', 
        "app/utils/utils", 
        "text!app/template/admin/checkTrack.html"], 
function($, _, Utils, page) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
			this.parent = parent;
			this.el = $(".tracks");
		};

		this.render = function(data) {
			_.templateSettings.variable = "data";
			var template = _.template(page);
			var that = this;
			console.log(data);
			var templateData = {
					"tracks" : data.connexions,
					"nbrConnexion" : data.nbrConnexion
			};
			this.el.html(template(templateData));
		};
		
		this.show = function(mdp) {
			var that = this;
			Utils.load("admin/check", mdp, function(data) {
				if (data.codeRetour != 0) {
					$("#message").text(data.message);
					$("#message").attr("class", "error");
				}else {
					$("#message").attr("class", "info");
					that.render(data);
				}
			}, "POST");
		};
		
		this.init(parent);
	};
});