'use strict';
define(["app/data/stories/tuto/crypte/marais",
    "app/data/stories/tuto/crypte/salle1",
    "app/data/stories/tuto/crypte/salle2",
    "app/data/stories/tuto/crypte/salle3",
    "app/data/stories/tuto/crypte/grandeSalle",
    "app/data/stories/tuto/crypte/couloir",
    "app/data/stories/tuto/crypte/boss",
],
		function(Marais, Salle1, Salle2, Salle3, GrandeSalle, Couloir, Boss) {
			var data = {};
			return {
				get : function(key) {
					var result = data[key];
                    if (!result) result = Marais.get(key);
                    if (!result) result = Salle1.get(key);
                    if (!result) result = Salle2.get(key);
                    if (!result) result = Salle3.get(key);
                    if (!result) result = GrandeSalle.get(key);
                    if (!result) result = Couloir.get(key);
                    if (!result) result = Boss.get(key);
					return result;
				}
			};
		});