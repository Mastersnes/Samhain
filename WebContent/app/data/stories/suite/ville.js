'use strict';
define(["app/data/stories/suite/ville/porte",
    "app/data/stories/suite/ville/entree",
    "app/data/stories/suite/ville/garde",
    "app/data/stories/suite/ville/ruelle",
    "app/data/stories/suite/ville/castagne"
],
		function(Porte, Entree, Garde, Ruelle, Castagne) {
			var data = {};
			return {
				get : function(key) {
					var result = data[key];
                    if (!result) result = Porte.get(key);
                    if (!result) result = Entree.get(key);
                    if (!result) result = Garde.get(key);
                    if (!result) result = Ruelle.get(key);
                    if (!result) result = Castagne.get(key);
					return result;
				}
			};
		});