'use strict';
define(["jquery",
        "app/utils/utils",
        "text!app/template/game/histoire.html"
        ], function($, Utils, page){
    return function(parent){
        this.init = function(parent) {
        	this.el = $(".histoire");

            this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;

            // Manager
            this.kongregateUtils = parent.kongregateUtils;
            this.saveManager = parent.saveManager;
            this.player = parent.playerManager;
        };

        this.render = function() {
        	_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {
					text : this.Textes
			};
			this.el.html(template(templateData));
        };

        this.makeEvents = function() {
        };

        this.init(parent);
    };
});