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

			this.complete = this.saveManager.load("successComplete");
			this.newList = [];
		};

		this.reloadSuccess = function() {
		};

		this.addSuccess = function(success, withoutMessage) {
			this.parent.kongregateUtils.score(success, 1);
			if (this.complete.indexOf(success) > -1) return false;

			this.complete.push(success);
			this.newList.push(success);
			this.saveManager.save("successComplete", this.complete);

			if (!withoutMessage) {
			    var gainText = this.Textes.get("gainSuccess");
        		gainText = gainText.replace("{?}", this.Textes.get(success));

        		this.mediatheque.playSound("success.ogg");
				this.parent.alertPopup(gainText, null, true);
			}
			return true;
		};

		this.init(parent);
	};
});