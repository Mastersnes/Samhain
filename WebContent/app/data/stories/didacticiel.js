'use strict';
define([
    "app/data/stories/didacticiel/debut",
    "app/data/stories/didacticiel/main",
    "app/data/stories/didacticiel/combat",
],
		function(Debut, Main, Combat) {
		    /**
		    * Quete didactitiel
		    **/
			var data = {
			};
			return {
				get : function(key) {
					var result = data[key];
                    if (!result) result = Debut.get(key);
                    if (!result) result = Main.get(key);
                    if (!result) result = Combat.get(key);
                    return result;
				}
			};
		});