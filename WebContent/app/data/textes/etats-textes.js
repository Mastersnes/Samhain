'use strict';
define([], function(){
	var data = {
	        /**
	        * Etats
	        **/
	        "poison" : {
                fr : "Un Peu Pâle",
                en : "A Bit Pale"
            },
	        "poison-texte" : {
                fr : "Un petit empoisonnement, rien de bien méchant&nbsp;! Attention tout de même, si une légère toux s'installe, c'est que la tombe n'est pas bien loin&hellip;",
                en : "A little poisoning, nothing too bad! Be careful though, if a slight cough sets in, it means that the grave is not far away&hellip;"
            },
	        "poison-2" : {
                fr : "Malade",
                en : "Malade"
            },
	        "poison-2-texte" : {
                fr : "Dans un premier temps, les doigts commencent à piquer légèrement. Ensuite, la démangeaison se propage doucement dans le reste du corps jusqu'à la nuque. La fin n'est pas très belle à voir si vous voulez mon avis&hellip;",
                en : "At first, the fingers start to sting, slightly. Then the itch spreads gently through the rest of the body to the neck. The end is not very beautiful to see if you want my opinion&hellip;"
            },
	        "satiete" : {
                fr : "Encas",
                en : "Snack"
            },
	        "satiete-texte" : {
                fr : "Un bon encas pour bien commencer la journée&nbsp;! On est quand même loin des 5 fruits et légumes par jour.",
                en : "A good snack to start the day off right! We are still far from the 5 fruits and vegetables a day."
            },
	        "satiete-2" : {
                fr : "Bon Repas",
                en : "Good Meal"
            },
	        "satiete-2-texte" : {
                fr : "De quoi être repu pour un petit moment&nbsp;! Bon appétit&nbsp;!",
                en : "Enough to be satisfied for a little while! Bon appétit!"
            },
	        "brulure" : {
                fr : "Brûlure Légère",
                en : "Slight Burns"
            },
	        "brulure-texte" : {
                fr : "Une petite rougeur, rien de bien méchant&hellip; Un peu d'eau froide et on en parle plus&hellip;",
                en : "A little redness, nothing too bad&hellip; A little cold water and you can forget it&hellip;"
            },
	        "brulure-2" : {
                fr : "Brûlure Profonde",
                en : "Deep Burn"
            },
	        "brulure-2-texte" : {
                fr : "Hurk , c'est pas très beau à voir&nbsp;! Au moins, vous avez du charbon pour le feu maintenant&hellip;",
                en : "Hurk, it's not very beautiful to see! At least you have coal for the fire now&hellip;"
            },
	        "saignement" : {
                fr : "Égratignure",
                en : "Scratch"
            },
	        "saignement-texte" : {
                fr : "Une petite éraflure&hellip; Vous n'allez quand même pas pleurer&hellip; Si&nbsp;?",
                en : "A little scratch&hellip; You're not going to cry&hellip; are you?"
            },
	        "saignement-2" : {
                fr : "Coupure",
                en : "Cut"
            },
            "saignement-2-texte" : {
                 fr : "Ok, là ça saigne pas mal quand même. Vous devriez consulter.",
                 en : "Okay, now it's bleeding pretty bad. You should consult."
             }
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});