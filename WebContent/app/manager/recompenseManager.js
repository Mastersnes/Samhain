/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils"
        ],
function($, _, Utils) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
			this.el = "";
			this.parent = parent;
			this.Textes = parent.Textes;

			this.saveManager = parent.saveManager;
			this.mediatheque = parent.mediatheque;

			this.complete = this.saveManager.load("success").successComplete;
		};

		this.reloadSuccess = function() {
		    for (var success in this.complete) {
		        this.addSuccess(success, this.complete[success]);
		    }
		};

		this.addSuccess = function(success, val) {
		    if (val == undefined) val = 1;
			this.parent.kongregateUtils.score(success, val);
			if (this.complete[success] != undefined) return false;

			this.complete[success] = val;
			this.saveManager.save("successComplete", this.complete);
			return true;
		};

		this.init(parent);
	};
});