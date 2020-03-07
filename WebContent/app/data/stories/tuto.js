'use strict';
define(["app/data/stories/tuto/debut",
    "app/data/stories/tuto/nid",
    "app/data/stories/tuto/ferme",
    "app/data/stories/tuto/village",
    "app/data/stories/tuto/echoppe",
    "app/data/stories/tuto/crypte"
],
		function(Debut, Nid, Ferme, Village, Echoppe, Crypte) {
			var data = {};
			return {
				get : function(key) {
					var result = data[key];
                    if (!result) result = Debut.get(key);
                    if (!result) result = Nid.get(key);
                    if (!result) result = Ferme.get(key);
                    if (!result) result = Village.get(key);
                    if (!result) result = Echoppe.get(key);
                    if (!result) result = Crypte.get(key);
					return result;
				}
			};
		});