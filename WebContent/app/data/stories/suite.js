'use strict';
define(["app/data/stories/suite/ville",
    "app/data/stories/suite/bandits"
],
		function(Ville, Bandits) {
			var data = {};
			return {
				get : function(key) {
					var result = data[key];
                    if (!result) result = Ville.get(key);
                    if (!result) result = Bandits.get(key);
					return result;
				}
			};
		});