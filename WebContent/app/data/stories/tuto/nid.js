'use strict';
define(["app/data/stories/tuto/nid/entree",
    "app/data/stories/tuto/nid/gauche",
    "app/data/stories/tuto/nid/droite"],
		function(Entree, Gauche, Droite) {
			var data = {};
			return {
				get : function(key) {
					var result = data[key];
                    if (!result) result = Entree.get(key);
                    if (!result) result = Gauche.get(key);
                    if (!result) result = Droite.get(key);
					return result;
				}
			};
		});