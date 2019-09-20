'use strict';
define(["app/utils/utils",
        "app/data/stories/tuto"],
		function(Utils, Tuto) {
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
				},
				/**
				 * Perdu
				 */
				"perdu" : {
					"textes" : ["perdu-texte-1", "followUs", "followUs2", "followUs3", "retry"],
                    "actions" : [
                        {
                            "name" : "retry-action", "action" : [
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
				    if (!result) result = Tuto.get(key);

					if (!result) console.log("Erreur, Impossible de trouver l'histoire", key);
					return Utils.clone(result);
				}
			};
		});