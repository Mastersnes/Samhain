'use strict';
define([],
		function() {
		    /**
		    * Didactitiel - Combat contre le bandit
		    **/
			var data = {
			    "didacticiel-finchoix" : {
                    "textes" : ["didacticiel-finchoix-texte-1", "didacticiel-finchoix-texte-2", "didacticiel-finchoix-texte-3"],
                    "actions" : [
                        {
                            "name" : "evidemment",
                            "action" : [
                                {"key" : "go", "params" : [ "didacticiel-bandit"]}
                            ]
                        }
                    ]
                },
			    "didacticiel-bandit" : {
                    "textes" : ["didacticiel-bandit-texte-1", "didacticiel-bandit-texte-2", "didacticiel-bandit-texte-3"],
                    "actions" : [
                        {
                            "name" : "alattaque",
                            "action" : [
                                {"key" : "fight", "params" : [
                                    [
                                        {"name": "bandit", "suffixe":"debile"}
                                    ], "didacticiel-combat-win", "didacticiel-combat-lose",
                                    [
                                        ["didacticiel-combat-texte-1", "didacticiel-combat-texte-2"],
                                        ["didacticiel-combat-texte-3", "didacticiel-combat-texte-4"]
                                    ]
                                ]}
                            ]
                        }
                    ]
                },

			    "didacticiel-combat-win" : {
                    "textes" : ["didacticiel-win-texte-1", "didacticiel-win-texte-2", "didacticiel-win-texte-3",
                        "didacticiel-win-texte-4", "didacticiel-win-texte-5"],
                    "actions" : [
                        {
                            "name" : "retour-menu",
                            "action" : [
                                {"key" : "score", "params" : ["DidacticielWin"]},
                                {"key" : "restart", "params" : null}
                            ]
                        }
                    ]
                },
			    "didacticiel-combat-lose" : {
                    "textes" : ["didacticiel-lose-texte-1", "didacticiel-lose-texte-2", "didacticiel-lose-texte-3",
                        "didacticiel-lose-texte-4", "didacticiel-lose-texte-5"],
                    "actions" : [
                        {
                            "name" : "retour-menu",
                            "action" : [
                                {"key" : "restart", "params" : null}
                            ]
                        }
                    ]
                },
			};
			return {
				get : function(key) {
					var result = data[key];
					return result;
				}
			};
		});