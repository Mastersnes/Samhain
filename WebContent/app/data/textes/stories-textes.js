'use strict';
define([
    "app/data/textes/stories/buttons-textes",
    "app/data/textes/stories/didacticiel-textes",
    "app/data/textes/stories/tuto-textes",
    "app/data/textes/stories/gameOver-textes"
], function(Buttons, Didacticiel, Tuto, GameOver){
	var data = {
	    /**
	    * Textes generiques
	    * Correction OK
	    **/
        "gagne-texte-1" : {
            fr : "Félicitations, vous avez terminé le jeu&nbsp;!",
            en : "Congratulations, you have finished the game!"
        },
        "retry" : {
            fr : "Vous pouvez aussi retenter votre chance en lançant une nouvelle partie.",
            en : "You can also try your luck again by starting a new game."
        }
	};
	
	return {
        get : function(key) {
            var text = data[key];
            if (!text) text = Buttons.get(key);
            if (!text) text = Didacticiel.get(key);
            if (!text) text = Tuto.get(key);
            if (!text) text = GameOver.get(key);
            return text;
        }
    };
});