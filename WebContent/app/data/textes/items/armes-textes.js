'use strict';
define([], function(){
	var data = {
	        /**
	        * Armes
	        **/
	        "piocher" : {
                fr : "Piocher",
                en : "Draw"
            },
            "poing" : {
                fr : "Poing",
                en : "Fist"
            },
            "poing-action" : {
                fr : "Coup de Poing",
                en : "Punch",
                eo : "Pugnobato"
            },
            "poing-texte" : {
                fr : "C'est simplement votre poing... Depuis votre naissance il ne vous a pas quitté.",
                en : "It's just your fist... Since your birth he hasn't left you."
            },
            "baton" : {
                fr : "Bâton",
                en : "Stick"
            },
            "baton-action" : {
                fr : "Coup de Bâton",
                en : "Stick Stroke"
            },
            "baton-texte" : {
                fr : "Un gros bâton qui peut faire très mal...",
                en : "A big stick that can hurt a lot..."
            },
            "dague" : {
                fr : "Dague",
                en : "Dagger"
            },
            "dague-action" : {
                fr : "Coup de Dague",
                en : "Dagger Stroke"
            },
            "dague-texte" : {
                fr : "Une belle dague toute brillante. Sa lame semble tranchante comme un rasoir.",
                en : "A beautiful and brilliant dagger. Its blade looks sharp as a razor-sharp."
            },
            "epee" : {
                fr : "Épée",
                en : "Sword"
            },
            "epee-action" : {
                fr : "Coup d'Epée",
                en : "Sword Strike"
            },
            "epee-texte" : {
                fr : "Une grosse épée à une main. Elle est aussi lourde que tranchante !",
                en : "A big sword with one hand. It's as heavy as it is sharp!"
            },
            "crocRoi" : {
                fr : "Croc du roi",
                en : "King's fang"
            },
            "crocRoi-action" : {
                fr : "Coup de Croc",
                en : "Fang Strike"
            },
            "crocRoi-texte" : {
                fr : "Le croc de votre ancien ami... Il dégage une odeur putride... Parfait pour une petite balade !",
                en : "Your old friend's fang... It emits a putrid smell... Perfect for a short walk!"
            }
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});