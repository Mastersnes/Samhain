'use strict';
define([],
		function() {
			var data = {
			    "die" : {
                    "before" : function(histoire) {
                        $("carnet").addClass("hide");
                    },

                    "textes" : ["die-texte-1", "die-texte-2"],
                    "actions" : [
                        {"name" : "continue", "action" : [{"key" : "gameOver"}]},
                        {"name" : "abandonner", "action" : [{"key" : "restart"}]}
                    ]
                },
			    "gameOver1" : {
                    "textes" : ["gameOver1-texte-1", "gameOver1-texte-2"],
                    "actions" : [
                        {"name" : "continue-adventure", "action" : [{"key" : "reload"}]}
                    ]
                },
                "gameOver2" : {
                    "textes" : ["gameOver2-texte-1", "gameOver2-texte-2"],
                    "actions" : [
                        {"name" : "continue-adventure", "action" : [{"key" : "reload"}]}
                    ]
                }
			};
			return {
				get : function(key) {
					return data[key];
				},
				length : function() {
                    return Object.keys(data).length-1;
                }
			};
		});