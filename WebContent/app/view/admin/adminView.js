/*global define */
define(["jquery",
        'underscore', 
        "app/utils/utils", 
        "text!app/template/admin/adminMain.html",
        "app/model/admin/adminModel",
        "app/view/admin/checkTrackView"], 
function($, _, Utils, page, AdminModel, CheckTrackView) {
	'use strict';

	return function() {
		this.init = function() {
			this.el = $("#app");
			this.model = new AdminModel();
			this.render();
		};

		this.render = function() {
			_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {};
			this.el.html(template(templateData));
			
			this.gereMenu();
		};
		
		this.chargeCheck = function() {
			if (!this.check) {
				this.check = new CheckTrackView();
			}
			this.check.show(this.model.data);
		};
		
		this.gereMenu = function() {
			var that = this;
			$("#checkTrack").click(function() {
				that.model.setMdp($("#mdp").val());
				that.chargeCheck();
			});
			$("#clearTrack").click(function() {
				that.model.setMdp($("#mdp").val());
				Utils.load("admin/clear", that.model.data, function(data) {
					$("#message").text(data.message);
					console.log(data.codeRetour);
					if (data.codeRetour != 0) {
						$("#message").attr("class", "error");
					}else {
						$("#message").attr("class", "info");
					}
				}, "POST");
			});
			$("#refresh").click(function() {
				that.model.setMdp($("#mdp").val());
				Utils.load("admin/refresh", that.model.data, function(data) {
					$("#message").text(data.message);
					console.log(data.codeRetour);
					if (data.codeRetour != 0) {
						$("#message").attr("class", "error");
					}else {
						$("#message").attr("class", "info");
					}
				}, "POST");
			});
		};
		
		this.init();
	};
});