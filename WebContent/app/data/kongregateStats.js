'use strict';
define(["jquery", "app/utils/utils"], function($, Utils){
	var data = {
	};

	return {
		get : function(key) {
			return data[key];
		},
		list : function() {
		    return data;
		}
	};
});