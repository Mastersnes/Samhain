'use strict';
define(["app/utils/utils",
        "app/data/stories/didacticiel",
        "app/data/stories/tuto",
        "app/data/stories/suite",
        "app/data/stories/quetes",
        "app/data/stories/gameOver"],
		function(Utils, Didacticiel, Tuto, Suite, Quetes, GameOver) {
			var data = {
                /**
                 * Gagne
                 */
				"gagne" : {
					"textes" : ["gagne-texte-1", "followUs", "followUs2", "followUs3", "retry"],
					"actions" : [
                        {
                            "name" : "restart-action", "action" : [
                                {"key" : "restart", "params" : null}
                            ]
                        }
					]
				}
			};

			return {
				/**
				 * Permet dappeler un WS
				 */
				get : function(key) {
				    var result = data[key];
				    if (!result) result = Didacticiel.get(key);
				    if (!result) result = Tuto.get(key);
				    if (!result) result = Suite.get(key);
				    if (!result) result = Quetes.get(key);
				    if (!result) result = GameOver.get(key);

					if (!result) console.log("Erreur, Impossible de trouver l'histoire", key);
					return Utils.clone(result);
				}
			};
		});