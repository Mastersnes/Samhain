'use strict';
define([], function(){
	var data = {
	    /**
        * Main gauche
        **/
        "didacticiel-gauche-texte-1" : {
        	fr : "Vous choisissez la main de gauche, bien qu'elle soit invisible.",
        	en : "You choose the left hand, although it’s invisible.",
        	eo : "Vi elektas la maldekstran manon, kvankam ĝi estu nevidebla."
        },
        "didacticiel-gauche-texte-2" : {
        	fr : "&laquo;&nbsp;Grâce à ton choix fabuleux, tu as obtenu la loupe&nbsp;!",
        	en : "&laquo;&nbsp;Thanks to your fabulous choice, you receive the magnifying glass!",
        	eo : "&laquo;&nbsp;Danke al via fabela elekto, vi akiris la lupeon!"
        },
        "didacticiel-gauche-texte-3" : {
        	fr : "Elle te permettra d’accéder au glossaire afin de découvrir tous les trésors de ce monde. N’hésite pas à cliquer dessus pour en savoir plus.",
        	en : "It will allow you to access the glossary in order to discover all the treasure of this world. Don’t hesitate to click on it to know more about it.",
        	eo : "Ĝi ebligos al vi aliri a la glosaron por malkovri ĉiujn la trezorojn de ĉi tiun mondon. Ne hezitu kliki sur ĝi por scii pli."
        },
        "didacticiel-gauche-texte-4" : {
        	fr : "Puisque tu es sage et attentif, je t'autorise exceptionnellement à ouvrir mon autre main. Vas-y, c'est gratuit&nbsp;!&nbsp;&raquo;",
        	en : "As you’re wise and attentive, I exceptionally allow you to open my other hand. Come on, it’s free!&nbsp;&raquo;",
        	eo : "Ĉar vi estas saĝa kaj atenta, mi escepte permesas al vi malfermi mia alia mano. Ek, tio estas senpaga!&nbsp;&raquo;"
        },

        /**
        * Puis main droite
        **/
        "didacticiel-gauchedroite-texte-1" : {
        	fr : "La main invisible s'ouvre devant vos yeux ébahis.",
        	en : "The invisible hand opens before your astounded eyes.",
        	eo : "La nevidebla mano malfermiĝas antaŭ viaj miregigitaj okuloj."
        },
        "didacticiel-gauchedroite-texte-2" : {
        	fr : "&laquo;&nbsp;Voici maintenant le carnet&nbsp;!",
        	en : "&laquo;&nbsp;Now, here is the notebook!",
        	eo : "&laquo;&nbsp;Nun, jen la notlibreto!"
        },

        /**
        * Main droite
        **/
        "didacticiel-droite-texte-1" : {
        	fr : "Bien qu'elle soit invisible, vous choisissez la main de droite.",
        	en : "Although it is invisible, you choose the right hand.",
        	eo : "Kvankam ĝi estu nevidebla, vi elektas la dekstran manon."
        },
        "didacticiel-droite-texte-2" : {
        	fr : "&laquo;&nbsp;Grâce à ton flair infaillible, tu as obtenu le carnet&nbsp;!",
        	en : "&laquo;&nbsp;Thanks to your infallible intuition, you obtain the notebook!",
        	eo : "&laquo;&nbsp;Danke al via neeraripova sagaceso, vi akiris la notlibreton!"
        },
        "didacticiel-droite-texte-3" : {
        	fr : "Il te permettra d’accéder à l'inventaire afin de modifier ton équipement et utiliser tes objets.",
        	en : "It will allow you to access to inventory in order to modify your equipment and use your items.",
        	eo : "Ĝi ebligos al vi aliri a la inventaro por modifi via ekipaĵo kaj uzi viaj objektoj."
        },
        "didacticiel-droite-texte-4" : {
        	fr : "N’hésite pas à cliquer dessus de temps à autre pour mettre au point ta stratégie.",
        	en : "Don’t hesitate to click on it from time to time to develop your strategy.",
        	eo : "Ne hezitu kliki sur ĝi de tempo al tempo por perfektigi via strategio."
        },
        //didacticiel-gauche-texte-4

        /**
        * Puis main gauche
        **/
        "didacticiel-droitegauche-texte-1" : {
        	fr : "La main invisible s'ouvre devant vos yeux ébahis.",
        	en : "The invisible hand opens before your astounded eyes.",
        	eo : "La nevidebla mano malfermas antaŭ viaj miregigitaj okuloj."
        },
        "didacticiel-droitegauche-texte-2" : {
        	fr : "&laquo;&nbsp;Voici maintenant la loupe&nbsp;!",
        	en : "&laquo;&nbsp;Now, here is the magnifying glass!",
        	eo : "&laquo;&nbsp;Nun, jen la lupeo!"
        },
        "didacticiel-droitegauche-texte-4" : {
        	fr : "Une fois que tu auras terminé, nous pourrons continuer.&nbsp;&raquo;",
        	en : "Once you’re done, we will be able to continue.&nbsp;&raquo;",
        	eo : "Foje kiam vi estas finota, ni povos daŭrigi.&nbsp;&raquo;"
        }
	};
	
	return {
        name : function() {
            return "Didacticiel Main.js";
        },
        children : function() {
            return [];
        },
        get : function(key) {
            return data[key];
        },
        list : function() {
            var keys = [];
            for (var i in data) {keys.push(i);}
            return keys;
        }
    };
});