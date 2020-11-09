'use strict';
define([], function(){
	var data = {
	    "didacticiel-start-texte-1" : {
        	fr : "Vous ouvrez les yeux, perdu au beau milieu d'une grande plaine.",
        	en : "You open your eyes, lost in the middle of a large plain.",
        	eo : "Vi malfermas viajn okulojn, perdita meze de granda ebenaĵo."
        },
        "didacticiel-start-texte-2" : {
        	fr : "Rien à l'horizon. Seul le vent souffle dans vos cheveux et siffle dans vos oreilles.",
        	en : "All is clear. Only the wind blows in your hair and whistles in your ears.",
        	eo : "Estas nenio. Sola la vento blovas en viaj hararoj kaj fajfas en viaj oreloj."
        },
        "didacticiel-start-texte-3" : {
        	fr : "Tout semble calme lorsque, soudain, une voix vous interpelle :",
        	en : "All seems calm when, suddenly, a voice speaks to you:",
        	eo : "Ĉiu ŝajnas trankvila, kiam subite, voĉo alparolas vin:"
        },
        "didacticiel-start-texte-4" : {
        	fr : "&laquo;&nbsp;Eh toi, l'aventurier&nbsp;! Appuie sur ‘suivant’ pour continuer.&nbsp;&raquo;",
        	en : "&laquo;&nbsp;Hey you, adventurer! Click on ‘next’ to continue.&nbsp;&raquo;",
        	eo : "&laquo;&nbsp;Hej vi, la aventurulo! Kliku sur ‘sekva’ por daŭri.&nbsp;&raquo;"
        },

        "didacticiel-start2-texte-1" : {
        	fr : "Vous vous exécutez, n'ayant rien de mieux à faire de toute façon.",
        	en : "You comply, having nothing better to do anyway.",
        	eo : "Vi konformiĝas vin, havanta nenion pli bonan farendan."
        },
        "didacticiel-start2-texte-2" : {
        	fr : "La voix, elle, continue de plus belle :",
        	en : "The voice continues even more:",
        	eo : "La voĉo pli daŭriĝas: "
        },
        "didacticiel-start2-texte-3" : {
        	fr : "&laquo;&nbsp;Bien joué étranger&nbsp;! Tu as saisi le principe des actions&nbsp;!",
        	en : "&laquo;&nbsp;Well done, stranger! You’ve understood the actions’ principle!",
        	eo : "&laquo;&nbsp;Bonan ludon fremdulon! Vi komprenis la principon de agojn!"
        },
        "didacticiel-start2-texte-4" : {
        	fr : "D'un autre côté&hellip; Il faut dire que c'était plutôt simple&hellip;&nbsp;&raquo;",
        	en : "On the other hand&hellip; It has to be said that it was rather simple&hellip;&nbsp;&raquo;",
        	eo : "Aliflanke&hellip; Verdire, tio estis relative simpla&hellip;&nbsp;&raquo;"
        },

        "didacticiel-presentation-texte-1" : {
        	fr : "&laquo;&nbsp;Je suis ton humble serviteur et te voici dans le monde merveilleux de ‘Samhain’&nbsp;!!!",
        	en : "&laquo;&nbsp;I’m your humble servant and you’re in the wonderful world of ‘Samhain’!!!",
        	eo : "&laquo;&nbsp;Mi estas via humila servanto kaj vi estas ĉi tie en la mirinda mondo de ‘Samhain’!!!"
        },
        "didacticiel-presentation-texte-2" : {
        	fr : "Tu te demandes certainement de quoi je parle, non&nbsp;?",
        	en : "You’re probably wondering what I’m talking about, no?",
        	eo : "Vi demandas vin certe, pri kio mi parolas, ne?"
        },
        "didacticiel-presentation-texte-3" : {
        	fr : "’Samhain’ est un monde fantastique, fait de danger et de mystères, dans lequel chaque action a des répercussions&nbsp;!",
        	en : "’Samhain’ is a fantastic world made of dangers and mysteries in which each action has consequences!",
        	eo : "’Samhain’ estas fantazia mondo, farita el danĝeroj kaj misterojs, en kiu ĉiu ago havas konsekvencojn!"
        },
        "didacticiel-presentation-texte-4" : {
        	fr : "Comment t'expliquer, hum&hellip; Tiens, choisis une main, par exemple&nbsp;!",
        	en : "How can I explain, hum&hellip; I know, choose a hand, for example!",
        	eo : "Kiel ekspliki vin, hm&hellip; Jen, elektu manon, ekzemple!"
        },
        "didacticiel-presentation-texte-5" : {
        	fr : "Ne t'en fais pas, je ne te ferais pas le coup du choix entre la pilule rouge et bleue.&nbsp;&raquo;",
        	en : "Don’t worry, I won’t give you the choice between the red and blue pill.&nbsp;&raquo;",
        	eo : "Ne zorgu, mi ne faros elekti al vin inter la ruĝan pilulon kaj la bluan.&nbsp;&raquo;"
        }
	};
	
	return {
        name : function() {
            return "Didacticiel Debut.js";
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