'use strict';
define(["app/data/stories/suite/ville/porte",
    "app/data/stories/suite/ville/entree",
    "app/data/stories/suite/ville/coeur",
    "app/data/stories/suite/ville/ruelle"
],
		function(Porte, Entree, Coeur, Ruelle) {
			var data = {};
			return {
				get : function(key) {
					var result = data[key];
                    if (!result) result = Porte.get(key);
                    if (!result) result = Entree.get(key);
                    if (!result) result = Coeur.get(key);
                    if (!result) result = Ruelle.get(key);
					return result;
				}
			};
		});