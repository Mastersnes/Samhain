'use strict';
define(["app/data/stories/suite/bandits/porte",
    "app/data/stories/suite/bandits/village",
    "app/data/stories/suite/bandits/arene"],
		function(Porte, Village, Arene) {
			var data = {};
			return {
				get : function(key) {
					var result = data[key];
                    if (!result) result = Porte.get(key);
                    if (!result) result = Village.get(key);
                    if (!result) result = Arene.get(key);
					return result;
				}
			};
		});