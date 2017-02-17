/*global define */
define([], 
function() {
	'use strict';

	return function() {
		this.data = {
				"mdp" : "mdp"
		};
		
		this.setMdp = function(mdp) {
			this.data.mdp = mdp;
		};
	};
});