'use strict';
define(["app/data/stories/quetes/quete1"],
		function(Quete1) {
			var data = {};
			return {
				get : function(key) {
					var result = data[key];
                    if (!result) result = Quete1.get(key);
					return result;
				}
			};
		});