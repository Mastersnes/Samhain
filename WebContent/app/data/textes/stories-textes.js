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
        name : function() {
            return "Stories.js";
        },
        children : function() {
            return [Buttons, Didacticiel, Tuto, Suite, Quetes, GameOver];
        },
        get : function(key) {
            var text = data[key];
            var children = this.children();
            for (var i in children) {
                if (!text) text = children[i].get(key);
                else continue;
            }
            return text;
        },
        list : function() {
            var keys = [];
            for (var i in data) {keys.push(i);}
            return keys;
        }
    };
});