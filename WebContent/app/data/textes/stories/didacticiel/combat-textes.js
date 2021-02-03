'use strict';
define([], function(){
	var data = {
	    /**
        * Fin choix
        **/
        "didacticiel-finchoix-texte-1" : {
        	fr : "&laquo;&nbsp;Bien, tu maîtrises à présent les subtilités du choix&nbsp;!",
        	en : "&laquo;&nbsp;Well! Now, you master the choice subtleties!",
            eo : "&laquo;&nbsp;Bone! Nun, vi majstras la subtilaĵojn de la elekto!"
        },
        "didacticiel-finchoix-texte-2" : {
        	fr : "Cet apprentissage te sera bien utile pour faire face aux périples qui t'attendent&nbsp;!",
        	en : "This learning will be useful to face the journeys awaiting you!",
            eo : "Ĉi tiu lernado estos utila por alfronti la periplojn, kiuj atendas vin!"
        },
        "didacticiel-finchoix-texte-3" : {
        	fr : "Mais&hellip; seras-tu capable de garder tout ton sang froid lorsque l'action apparaîtra devant toi&nbsp;?&nbsp;&raquo;",
        	en : "But&hellip; Would you be able to keep calm when the action will appear ahead?&nbsp;&raquo;",
            eo : "Sed&hellip; Ĉu vi estos kapabla gardi memregadon, kiam la ago aperos antaŭ vin?&nbsp;&raquo;"
        },
        /**
        * Arrivé bandit
        **/
        "didacticiel-bandit-texte-1" : {
        	fr : "&laquo;&nbsp;Hum&hellip; Permets-moi d'en douter&hellip;&nbsp;&raquo;",
        	en : "&laquo;&nbsp;Well&hellip; Let me doubt it&hellip;&nbsp;&raquo;",
            eo : "&laquo;&nbsp;Hm&hellip; Permesu al mi pridubi tion&hellip;&nbsp;&raquo;"
        },
        "didacticiel-bandit-texte-2" : {
        	fr : "Un homme à l'allure minable s'approche au loin, il semble vous en vouloir&hellip; Pourtant, vous ne lui avez rien fait&hellip;",
        	en : "Far away, a shabby man approaches you. He seems to resent you&hellip; However, you didn’t do anything to him&hellip;",
            eo : "Fore, mizera viro proksimiĝas. Li ŝajnas rankori vin&hellip;Tamen, vi faris nenion malbonan al li&hellip;"
        },
        "didacticiel-bandit-texte-3" : {
        	fr : "&laquo;&nbsp;Tu vois ce bandit là-bas&nbsp;? Une vraie tête à claques, hein&nbsp;? Abats-le sauvagement et tu auras toute ma reconnaissance&nbsp;!&nbsp;&raquo;",
        	en : "&laquo;&nbsp;Do you see the bandit over there? A real pain, no? Slay him brutally and you will have all my gratitude!&nbsp;&raquo;",
        	eo : "&laquo;&nbsp;Ĉu vi vidas la banditon tie? Vera tedulaĉo, ĉu ne? Buĉu lin brutale kaj mi estos al vi tute dankema!&nbsp;&raquo;"
        },

        /**
        * Combat contre le bandit
        **/
        "didacticiel-combat-texte-1" : {
        	fr : "&laquo;&nbsp;Bien, voici un bandit. Il sent mauvais, mais il n'est pas bien méchant.",
        	en : "&laquo;&nbsp;Well, here is a bandit. He smells bad but he’s not really bad.",
        	eo : "&laquo;&nbsp;Bone. Jen bandito. Li malodoras sed li ne estas tre malbona."
        },
        "didacticiel-combat-texte-2" : {
        	fr : "Utilise les papiers en bas de l'écran pour l'attaquer.&nbsp;&raquo;",
        	en : "Use the papers at the bottom of the screen to attack him.&nbsp;&raquo;",
        	eo : "Uzu la paperojn malsupre de la ekrano por ataki lin.&nbsp;&raquo;"
        },
        "didacticiel-combat-texte-3" : {
        	fr : "&laquo;&nbsp;Attention&nbsp;! Si tu te défends, ce sera la fin de ton tour et le bandit t'attaquera&nbsp;!",
        	en : "&laquo;&nbsp;Be careful! If you protect yourself, your turn will end and the bandit will attack you!",
        	eo : "&laquo;&nbsp;Atenton! Se vi defendas vin, via vico finiĝos kaj la bandito atakos vin."
        },
        "didacticiel-combat-texte-4" : {
        	fr : "À toi de jouer maintenant&nbsp;! Bonne chance, jeune padawan&nbsp;!&nbsp;&raquo;",
        	en : "It’s your turn now! Good luck young padawan!&nbsp;&raquo;",
        	eo : "Nun, jen via vico! Bonan ŝancon, juna padavano!&nbsp;&raquo;"
        },

        /**
        * Combat gagné
        **/
        "didacticiel-win-texte-1" : {
        	fr : "Le bandit s'écroule et disparaît dans un souffle de poussière.",
        	en : "The bandit collapses and disappears in a blast of dust.",
        	eo : "La bandito falas kaj forflugas en polvoblovo."
        },
        "didacticiel-win-texte-2" : {
        	fr : "&laquo;&nbsp;Félicitations&nbsp;! Je suis fier de toi&nbsp;!",
        	en : "&laquo;&nbsp;Congratulations! I’m proud of you!",
        	eo : "&laquo;&nbsp;Gratulon! Mi estas fiera pri vi!"
        },
        "didacticiel-win-texte-3" : {
        	fr : "Tu as bien retenu tous mes enseignements et tu es maintenant prêt pour la grande aventure&nbsp;!",
        	en : "You remembered all my instructions and now you’re ready for the great adventure!",
        	eo : "Vi estas bone memorinta ĉiujn miajn instruadojn kaj nun, vi estas preta por la granda aventuro!"
        },
        "didacticiel-win-texte-4" : {
        	fr : "Ce ne sera pas tous les jours facile, mais n'aie crainte, tu peux le faire&nbsp;!",
        	en : "It won’t be easy every day but don’t worry, you can do that!",
        	eo : "Ne estos facila ĉiutage sed, ne timu, vi sukcesos!"
        },
        "didacticiel-win-texte-5" : {
        	fr : "Bon courage et à bientôt dans ‘Samhain’&nbsp;!&nbsp;&raquo;",
        	en : "Good luck and see you soon in ‘Samhain’!&nbsp;&raquo;",
        	eo : "Bonan kuraĝon kaj ĝis baldaŭ en ‘Samhain’!&nbsp;&raquo;"
        },

        /**
        * Combat perdu
        **/
        "didacticiel-lose-texte-1" : {
        	fr : "Le bandit vous porte le coup de grâce, et vous vous écroulez au sol.",
        	en : "The bandit gives you the final blow, and you collapse to the ground.",
        	eo : "La bandito donas al vi la fatalan baton, kaj vi falas sur la grundo."
        },
        "didacticiel-lose-texte-2" : {
        	fr : "Votre vue faiblit peu à peu, mais vous semblez encore entendre quelques murmures dans votre oreille&nbsp;:",
        	en : "Your eyesight decline little by little but you still heard some whispers in your ears:",
        	eo : "Via vidkapablo malpliiĝas iom post iom sed vi ŝajnas ankoraŭ aŭdi iom flustradojn en via orelo:"
        },
        "didacticiel-lose-texte-3" : {
        	fr : "&laquo;&nbsp;Eh bien&nbsp;! Tu as réussi à mourir à l'entraînement&nbsp;! Félicitations, ce n'était pas facile&hellip;",
        	en : "&laquo;&nbsp;Well! You succeeded in dying at training! Well done, it wasn’t easy&hellip;",
        	eo : "&laquo;&nbsp;Nu! Vi sukcesis morti dum la trejnado! Gratulon, tio ne estis facila&hellip;"
        },
        "didacticiel-lose-texte-4" : {
        	fr : "Soit tu possèdes une grande patience, soit tu n'as vraiment rien compris au jeu. Espérons qu'il s'agisse de la première affirmation.",
        	en : "Either you have great patience or you really didn’t understand anything about the game. Well, let’s hope that it should be the first assertion.",
        	eo : "Aŭ vi posedas grandan paciencon, aŭ vi vere komprenas nenion pri la ludo. Ni esperu, ke ĝustas la unua aserto."
        },
        "didacticiel-lose-texte-5" : {
        	fr : "Dans le cas contraire, reviens donc me voir. Tu n'es pas prêt à affronter le monde de Samhain&nbsp;!&nbsp;&raquo;",
        	en : "Otherwise, come back to see me. You’re not ready to face the world of ‘Samhain’!&nbsp;&raquo;",
        	eo : "Se ne, revenu vidi min. Vi ne estas preta alfronti la mondon de ‘Samhain’!&nbsp;&raquo;"
        }
	};
	
	return {
        name : function() {
            return "Didacticiel Combat.js";
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