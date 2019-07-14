'use strict';
define(["jquery",
        'underscore',
        "app/utils/utils",
        "text!app/template/game/end.html",
        "app/manager/sceneManager"],
function($, _, Utils, page, SceneManager) {
	return function(parent) {
		this.init = function(parent) {
		    this.el = "#app";
		    this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;
		};

		this.render = function(gagne) {
			_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {
					text : this.Textes,
					gagne : gagne
			};
			$(this.el).html(template(templateData));

			this.scene = new SceneManager(this);
			this.makeEvents();
		};

		this.makeEvents = function() {
			var that = this;
			$(this.el).find("#reload").click(function(e) {
				e.preventDefault();
				that.parent.resetGame();
			});
		};
		
		this.init(parent);
	};
});