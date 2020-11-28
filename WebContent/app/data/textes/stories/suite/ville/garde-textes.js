'use strict';
define([], function(){
	var data = {
	    /**
        * Poste de garde classique
        **/
        "ville-garde-texte-1" : {
        	fr : "Confiant, et toujours à la recherche d'or et de gloire,",
        	en : "Confident, and always looking for gold and glory,",
        	eo : ""
        },
        "ville-garde-texte-2" : {
        	fr : "vous vous dirigez vers le poste de garde.",
        	en : "you head for the guard post.",
        	eo : ""
        },
        "ville-garde-simple-texte-1" : {
        	fr : "Les forces de l'ordre, surprises par votre arrivée, viennent à votre rencontre&nbsp;:",
        	en : "The forces of order, suprised by your arrival, come towards you:",
        	eo : ""
        },
        "ville-garde-simple-texte-2" : {
        	fr : "&laquo;&nbsp;Halte, jeune homme&nbsp;! Que viens-tu faire ici&nbsp;? C'est interdit au public&nbsp;!&nbsp;&raquo;",
        	en : "&laquo;&nbsp;Halt, young man! What are you doing here? It’s forbidden to the visitors!&nbsp;&raquo;",
        	eo : ""
        },

        "ville-garde-simple-2-texte-1" : {
        	fr : "&laquo;&nbsp;Ah, excuse notre accueil&nbsp;!",
        	en : "&laquo;&nbsp;Ah, excuse our welcome!",
        	eo : ""
        },
        "ville-garde-simple-2-texte-2" : {
        	fr : "Bienvenue héros, que pouvons-nous faire pour toi&nbsp;?&nbsp;&raquo;",
        	en : "Welcome hero, what can we do for you?&nbsp;&raquo;",
        	eo : ""
        },

        "ville-garde-simple-3-texte-1" : {
        	fr : "Le garde vous regarde perplexe, n'ayant pas l'air de comprendre.",
        	en : "The guard looks at you, perpexled, not seeming to understand.",
        	eo : ""
        },
        "ville-garde-simple-3-texte-2" : {
        	fr : "&laquo;&nbsp;Eh bien vois-tu, en ce moment, c'est plutôt calme&hellip;",
        	en : "&laquo;&nbsp;Well, you see, at this time, it’s pretty calm&hellip;",
        	eo : ""
        },
        "ville-garde-simple-3-texte-3" : {
        	fr : "Rapport à ce que t'aies fait leur fête aux bandits tu vois&hellip;&nbsp;&raquo;",
        	en : "In relation to how you kicked their ass to the bandits, you know&hellip;",
        	eo : ""
        },
        "ville-garde-simple-3-texte-4" : {
        	fr : "Il a l'air d'hésiter puis ajoute&nbsp;:",
        	en : "He seems to hesitate and then adds:",
        	eo : ""
        },
        "ville-garde-simple-3-texte-5" : {
        	fr : "&laquo;&nbsp;Mais bon, si tu sais tenir ta langue, on a bien du 'travail' à te proposer&hellip; Tu connais le PokGard&nbsp;?",
        	en : "But, well, if you know to hold your tongue, we have some ‘work’ to offer you&hellip; You know the PokGard?",
        	eo : ""
        },
        "ville-garde-simple-3-texte-6" : {
        	fr : "Tu verras, c'est facile&hellip; Te faut juste 100po pour commencer. T'es partant&nbsp;?&nbsp;&raquo;",
        	en : "You’ll see, it’s easy&hellip; You just need 100gold to start. Are you in?&nbsp;&raquo;",
        	eo : ""
        },

        "ville-garde-simple-combat-texte-1" : {
        	fr : "&laquo;&nbsp;Désolé bonhomme, ça se passera pas si facilement&nbsp;!&nbsp;&raquo;",
        	en : "&laquo;&nbsp;Sorry guy, it won’t be so easy!&nbsp;&raquo;",
        	eo : ""
        },
        "ville-garde-simple-combat-texte-2" : {
        	fr : "Les soldats s'approchent, bien décidés à vous rosser&hellip;",
        	en : "The soldier approaches, determined to beat you up&hellip;",
        	eo : ""
        },

        "ville-garde-simple-retour-texte-1" : {
        	fr : "Vous vous excusez et repartez tranquillement.",
        	en : "You apologize and leave quietly.",
        	eo : ""
        },
        "ville-garde-simple-retour-texte-2" : {
        	fr : "Les gardes, eux, retournent à leurs occupations.",
        	en : "The guards, they, get back to their occupations.",
        	eo : ""
        },

        /**
        * Poste de garde - Reussite du jeu
        **/
        "ville-garde-jeu-victoire-texte-1" : {
        	fr : "Les soldats vous regardent, ahuris.",
        	en : "The soldiers look at you, stupefied.",
        	eo : ""
        },
        "ville-garde-jeu-victoire-texte-2" : {
        	fr : "&laquo;&nbsp;Eh bah&nbsp;! Tu m'épates mon gars&nbsp;! Tu nous as complètement plumés&hellip; On n’a plus rien à parier&hellip;",
        	en : "&laquo;&nbsp;Well! You amaze me, boy! You’ve completely get us fleeced&hellip; We’ve nothing to bet anymore&hellip;",
        	eo : ""
        },
        "ville-garde-jeu-victoire-texte-3" : {
        	fr : "Tiens, on va faire un deal. Si tu gagnes cette dernière partie, on t'apprend notre botte secrète&nbsp;! Qu'est ce que t'en dis&nbsp;?",
        	en : "Hey, we’re going to make a deal. If you win this last game, we’ll teach you our secret move! What do you say?",
        	eo : ""
        },
        "ville-garde-jeu-victoire-texte-4" : {
        	fr : "Par contre, si tu perd ou que tu abandonne, on reprend tout au début.",
        	en : "However, if you lose or give up, we restart from the beginning.",
        	eo : ""
        },
        "ville-garde-jeu-victoire-texte-5" : {
        	fr : "La mise est de 1500 cette fois. Tu suis&nbsp;?",
        	en : "The bet is 1500 this time. You’re in?",
        	eo : ""
        },

        /**
        * Victoire ultime du deal
        **/
        "ville-garde-jeu-victoire-2-texte-1" : {
        	fr : "Les gardes sont abasourdis. Vous les avez vraiment bluffés là.",
        	en : "The guards are stupefied. You really bluffed them there.",
        	eo : ""
        },
        "ville-garde-jeu-victoire-2-texte-2" : {
        	fr : "Impressionnés par votre science précise du jeu, ils vous apprennent leur art&nbsp;:",
        	en : "Impressed by your accurate science of the game, they teach you their art:",
        	eo : ""
        },
        "ville-garde-jeu-victoire-2-texte-3" : {
        	fr : "&laquo;&nbsp;L’opération est simple tu vois. Il suffit de tailler fort et ferme&nbsp;!&nbsp;&raquo;",
        	en : "The operation is simple, you see. You just have to slash hard and firm!",
        	eo : ""
        },

        "ville-garde-jeu-victoire-3-texte-1" : {
        	fr : "Effectivement, c'était plutôt simple.",
        	en : "Indeed, it was pretty simple.",
        	eo : ""
        },
        "ville-garde-jeu-victoire-3-texte-2" : {
        	fr : "En l'espace de quelques heures, vous maîtrisez déjà l'attaque&nbsp;!",
        	en : "In the space of a few hours, you already master the attack!",
        	eo : ""
        },
        "ville-garde-jeu-victoire-3-texte-3" : {
        	fr : "&laquo;&nbsp;Bravo, mon gars&nbsp;! T'es loin d'être aussi expert qu'un garde, mais avec ça, tu peux être sûr de casser des têtes&nbsp;!",
        	en : "&laquo;&nbsp;Well done guy! You’re not as expert as a guard but, with this, you can be sure to break some heads!",
        	eo : ""
        },
        "ville-garde-jeu-victoire-3-texte-4" : {
        	fr : "N’hésite pas à revenir travailler avec nous un de ces quatre&nbsp;!&nbsp;&raquo;",
        	en : "Don’t hesitate to come back to work with us one of these days!&nbsp;&raquo;",
        	eo : ""
        },

        /**
        * Refus du deal
        **/
        "ville-garde-jeu-victoire-refus-texte-1" : {
        	fr : "Le garde vous répond, déçu.",
        	en : "The guard answers you, disappointed.",
        	eo : ""
        },
        "ville-garde-jeu-victoire-refus-texte-2" : {
        	fr : "&laquo;&nbsp;Arf, vraiment dommage&hellip; Faut qu'on retourne bosser du coup.",
        	en : "Arf, really too bad&hellip; We have to go back to work so.",
        	eo : ""
        },
        "ville-garde-jeu-victoire-refus-texte-3" : {
        	fr : "À la revoyure, camarade&nbsp;!&nbsp;&raquo;",
        	en : "See ya, comrade!&nbsp;&raquo;",
        	eo : ""
        },

        /**
        * Poste de garde amis
        **/
        "ville-garde-ami-texte-1" : {
        	fr : "Les soldats vous accueillent, prêts à jou&hellip; hum, travailler avec vous&hellip;",
        	en : "The soldier welcomes you, ready to pla&hellip; hum, work with you&hellip;",
        	eo : ""
        },

        "ville-garde-jeu-retour-texte-1" : {
        	fr : "&laquo;&nbsp;Oh aller&nbsp;! Tu vas pas abandonner la partie maintenant&nbsp;!? On vient à peine de commencer&nbsp;!&nbsp;&raquo;",
        	en : "&laquo;&nbsp;Oh come on! You’re not going to give up now!? We’ve only just started!&nbsp;&raquo;",
        	eo : ""
        },

        "ville-garde-jeu-echec-texte-1" : {
        	fr : "&laquo;&nbsp;Aha, perdu mon grand&nbsp;! Dommage pour toi&nbsp;!",
        	en : "&laquo;&nbsp;Aha, lost my boy! Too bad for you!",
        	eo : ""
        },
        "ville-garde-jeu-echec-texte-2" : {
        	fr : "Reviens donc te faire plum&hellip; Hum hum, travailler quand tu veux&nbsp;!&nbsp;&raquo;",
        	en : "Come back to get fleec&hellip; Hum hum, work with us whenever you want!&nbsp;&raquo;",
        	eo : ""
        },

        "ville-garde-jeu-pauvre-texte-1" : {
        	fr : "&laquo;&nbsp;Ah désolé mon gars, mais t'as pas assez de pièces.",
        	en : "&laquo;&nbsp;Well, sorry guy, you don’t have enough gold pieces.",
        	eo : ""
        },
        "ville-garde-jeu-pauvre-texte-2" : {
        	fr : "On peut pas te faire crédit, tu comprends, ce serait pas réglo&hellip;",
        	en : "We can’t give you credits, you understand, it wouldn’t be fair&hellip;",
        	eo : ""
        },
        "ville-garde-jeu-pauvre-texte-3" : {
        	fr : "Reviens donc nous voir quand t'auras suffisamment d'or sur toi.&nbsp;&raquo;",
        	en : "So, come back to see us when you’ll have enough gold on you.&nbsp;&raquo;",
        	eo : ""
        },
        "ville-garde-jeu-pauvre-texte-4" : {
        	fr : "Vous repartez vers le centre de la ville, résolument pauvre&hellip;",
        	en : "You going back to the center of the city, firmly poor&hellip;",
        	eo : ""
        },

        /**
        * Poste de garde - Hors la loi
        **/
        "ville-garde-combat-texte-2" : {
        	fr : "&laquo;&nbsp;Eh bien dis-moi, tu as du culot pour te pointer ici après ce que tu as fait&nbsp;!&nbsp;&raquo;",
        	en : "&laquo;&nbsp;Well, tell me, you really have a lot of nerve to show up here after what you’ve done!&nbsp;&raquo;",
        	eo : ""
        },
        "ville-garde-combat-texte-3" : {
        	fr : "Pas de doute, ils vous en veulent d'avoir tué leurs copains&hellip;",
        	en : "No doubt, they resent you for killing their friend&hellip;",
        	eo : ""
        },

        "ville-garde-combat-2-texte-1" : {
        	fr : "Bien&nbsp;! Ainsi, ils ne devraient plus vous déranger.",
        	en : "Well! Like this, they shouldn’t bother you anymore.",
        	eo : ""
        },
        "ville-garde-combat-2-texte-2" : {
        	fr : "En fouillant dans la réserve, vous découvrez des ressources bien précieuses.",
        	en : "By searching in the reserve, you find some very precious resources.",
        	eo : ""
        },
        "ville-garde-combat-2-texte-3" : {
        	fr : "Tout cela pourra toujours vous servir&nbsp;!",
        	en : "All of this can always be useful to you!",
        	eo : ""
        },

        /**
        * Poste de garde tues
        **/
        "ville-garde-tues-texte-1" : {
        	fr : "Vous avez fait le ménage. Il n'y a plus rien à voir ici&hellip;",
        	en : "You’ve cleaned up the place. There is nothing more to see here&hellip;",
        	eo : ""
        }
	};

	return {
        name : function() {
            return "Suite Ville Garde.js";
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