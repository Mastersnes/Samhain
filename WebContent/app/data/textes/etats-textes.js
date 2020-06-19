'use strict';
define([], function(){
	var data = {
	        /**
	        * Etats
	        **/
	        "poison" : {
            	fr : "Un Peu Pâle",
            	en : "A Little Pale",
            	eo : "Iom Pala"
            },
            "poison-texte" : {
            	fr : "Un petit empoisonnement, rien de bien méchant&nbsp;! Attention tout de même, si une légère toux s'installe, c'est que la tombe n'est pas bien loin&hellip;",
            	en : "A little poisoning, nothing too bad! However be careful, if a slight cough begins, the grave is not far away&hellip;",
            	eo : "Eta toksado, nenio malgrava! Atenton tamen, se tuseta komencas, la tombo ne estas tre for&hellip;"
            },
            "poison-2" : {
            	fr : "Malade",
            	en : "Sick",
            	eo : "Malsana"
            },
            "poison-2-texte" : {
            	fr : "Dans un premier temps, les doigts commencent à piquer légèrement. Ensuite, la démangeaison se propage doucement dans le reste du corps jusqu'à la nuque. La fin n'est pas très belle à voir si vous voulez mon avis&hellip;",
            	en : "At first, fingers start to sting slightly. Then itches spreads gently through the rest of the body to the neck. The end is not very pretty to see if you want my opinion&hellip;",
            	eo : "Unue, la fingroj iomete ekpiki. Poste, la juko dolĉe propagiĝas en la resto de la korpo ĝis la nuko. La fino ne estas tre bela ĉu vi volas mian opinion&hellip;"
            },
            "satiete" : {
            	fr : "Encas",
            	en : "Snack",
            	eo : "Manĝeto"
            },
            "satiete-texte" : {
            	fr : "Un bon encas pour bien commencer la journée&nbsp;! On est quand même loin des 5 fruits et légumes par jour.",
            	en : "A good snack for a good day! We’re really far from the 5 fruits and vegetables per day.",
            	eo : "Bona manĝeto por bona tago! Ĝi estas tre for de la ĉiutaga 5 fruktoj kaj legumoj."
            },
            "satiete-2" : {
            	fr : "Bon Repas",
            	en : "Good Meal",
            	eo : "Bona Manĝo"
            },
            "satiete-2-texte" : {
            	fr : "De quoi être repu pour un petit moment&nbsp;! Bon appétit&nbsp;!",
            	en : "Enough to be full for a little while! Bon appétit!",
            	eo : "Sufiĉe por esti sata dum eta momento! Bonan apetiton!"
            },
            "brulure" : {
            	fr : "Brûlure Légère",
            	en : "Slight Burn",
            	eo : "Malgrava Brulvundo"
            },
            "brulure-texte" : {
            	fr : "Une petite rougeur, rien de bien méchant&hellip; Un peu d'eau froide et on n’en parle plus&hellip;",
            	en : "A little inflammation, nothing too bad&hellip; A bit of cold water and it’s over&hellip;",
            	eo : "Eta inflamo, nenio malgrava&hellip; Iom malvarma akvo kaj tio estas finiĝita&hellip;"
            },
            "brulure-2" : {
            	fr : "Brûlure Profonde",
            	en : "Deep Burn",
            	eo : "Grava Brulvundo"
            },
            "brulure-2-texte" : {
            	fr : "Hurk, c'est pas très beau à voir&nbsp;! Mais vous avez du charbon pour le feu maintenant&hellip;",
            	en : "Ugh, that looks really bad! But now, you have coal for the fire&hellip;",
            	eo : "Aĉ, tio estas ne tre bela! Sed nun, vi havas karbon per la fajron&hellip;"
            },
            "saignement" : {
            	fr : "Égratignure",
            	en : "Scratch",
            	eo : "Gratvundo"
            },
            "saignement-texte" : {
            	fr : "Une petite éraflure&hellip; Vous n'allez quand même pas pleurer&hellip; Si&nbsp;?",
            	en : "A little scratch&hellip; You're not really going to cry&hellip; Are you?",
            	eo : "Eta gratvundo&hellip; Vi ne estas ploriĝonta&hellip; Se?"
            },
            "saignement-2" : {
            	fr : "Coupure",
            	en : "Cut",
            	eo : "Tranĉvundo"
            },
            "saignement-2-texte" : {
            	 fr : "Ok, là ça saigne pas mal quand même. Vous devriez consulter&hellip;",
            	 en : "Okay, now it's bleeding very much. You should consult a doctor&hellip;",
            	eo : "Okej, nun ĝi estas tre sangadanta. Vi devus konsulti&hellip;"
             }
	};
	
	return {
        get : function(key) {
            return data[key];
        },
        listAll : function() {
            var keys = [];
            for (var i in data) {keys.push(i);}
            return keys;
        },
    };
});