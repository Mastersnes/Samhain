'use strict';
define([
    "app/data/textes/stories/buttons-textes",
    "app/data/textes/stories/tuto-textes",
    "app/data/textes/stories/gameOver-textes"
], function(Buttons, Tuto, GameOver){
	var data = {
	    /**
	    * Textes generiques
	    **/
        "gagne-texte-1" : {
            fr : "Félicitation, vous avez terminé le jeu !",
            en : "Congratulations, you have finished the game!"
        },
        "retry" : {
            fr : "Vous pouvez aussi retenter votre chance en lancant une nouvelle partie.",
            en : "You can also try your luck again by starting a new game."
        }
	};
	
	return {
        get : function(key) {
            var text = data[key];
            if (!text) text = Buttons.get(key);
            if (!text) text = Tuto.get(key);
            if (!text) text = GameOver.get(key);
            return text;
        }
    };
});