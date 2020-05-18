'use strict';
define(["jquery", "app/utils/utils"], function($, Utils){
	var data = {
	    "quete1" : {
	        "name" : "quete1",
	        "description" : ["quete1-description-1", "quete1-description-2", "quete1-description-3"],
	        "price" : 100,
	        "steps" : 5,
            "level" : 2,
            "difficulty" : "difficulte-debutant",
            "start" : "quete1-debut"
	    },
	};
	
	return {
		get : function(key) {
		    return Utils.clone(data[key]);
		},

        /**
        * Liste pour l'affichage
        **/
		list : function(player) {
		    var resultats = [];

            var level = player.get("level");
            var quetesComplete = player.get("quetesComplete");
            for (var id in data) {
                var quete = this.get(id);
                if (quete.level > level) continue;
                if (quetesComplete.indexOf(id) > -1) continue;
                resultats.push(quete)
            }
		    return resultats;
		}
	};
});