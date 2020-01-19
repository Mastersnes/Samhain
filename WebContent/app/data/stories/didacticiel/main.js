'use strict';
define([],
		function() {
		    /**
		    * Didactitiel - Mains
		    **/
			var data = {
			    /**
			    * Gauche
			    **/
			    "didacticiel-gauche" : {
			        "before" : function(histoire) {
			            $("carnet").addClass("hide");
			        },
                    "textes" : ["didacticiel-gauche-texte-1", "didacticiel-gauche-texte-2", "didacticiel-gauche-texte-3",
                        "didacticiel-gauche-texte-4"],
                    "actions" : [
                        {
                            "name" : "ouvrir",
                            "action" : [
                                {"key" : "go", "params" : [ "didacticiel-gauchedroite"]}
                            ]
                        }
                    ]
                },
                "didacticiel-gauchedroite" : {
                    "textes" : ["didacticiel-gauchedroite-texte-1", "didacticiel-gauchedroite-texte-2",
                        "didacticiel-droite-texte-3", "didacticiel-droite-texte-4", "didacticiel-droitegauche-texte-4"],
                    "actions" : [
                        {
                            "name" : "continue",
                            "action" : [
                                {"key" : "go", "params" : [ "didacticiel-finchoix"]}
                            ]
                        }
                    ]
                },

                /**
                * Droite
                **/
                "didacticiel-droite" : {
                    "before" : function(histoire) {
                        $("loupe").addClass("hide");
                    },
                    "textes" : ["didacticiel-droite-texte-1", "didacticiel-droite-texte-2",
                        "didacticiel-droite-texte-3", "didacticiel-droite-texte-4", "didacticiel-gauche-texte-4"],
                    "actions" : [
                        {
                            "name" : "ouvrir",
                            "action" : [
                                {"key" : "go", "params" : [ "didacticiel-droitegauche"]}
                            ]
                        }
                    ]
                },
                "didacticiel-droitegauche" : {
                    "textes" : ["didacticiel-droitegauche-texte-1", "didacticiel-droitegauche-texte-2",
                        "didacticiel-gauche-texte-3", "didacticiel-droitegauche-texte-4"],
                    "actions" : [
                        {
                            "name" : "continue",
                            "action" : [
                                {"key" : "go", "params" : [ "didacticiel-finchoix"]}
                            ]
                        }
                    ]
                }
			};
			return {
				get : function(key) {
					var result = data[key];
					return result;
				}
			};
		});