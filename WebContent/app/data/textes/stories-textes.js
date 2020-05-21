'use strict';
define([
    "app/data/textes/stories/buttons-textes",
    "app/data/textes/stories/didacticiel-textes",
    "app/data/textes/stories/tuto-textes",
    "app/data/textes/stories/suite-textes",
    "app/data/textes/stories/quetes-textes",
    "app/data/textes/stories/gameOver-textes"
], function(Buttons, Didacticiel, Tuto, Suite, Quetes, GameOver){
	var data = {
	    /**
	    * Textes generiques
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
            if (!text) text = Suite.get(key);
            if (!text) text = Quetes.get(key);
            if (!text) text = GameOver.get(key);
            return text;
        },

        listAll : function() {
            var keys = [];
            for (var i in data) {keys.push(i);}

            keys = keys.concat(Buttons.listAll());
            keys = keys.concat(Didacticiel.listAll());
            keys = keys.concat(Tuto.listAll());
            keys = keys.concat(Suite.listAll());
            keys = keys.concat(Quetes.listAll());
            keys = keys.concat(GameOver.listAll());
            return keys;
        },
    };
});