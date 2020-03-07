'use strict';
define([], function(){
	var data = {
        "necroS2-texte-1" : {
            fr : "Vous ouvrez la porte et entrez doucement dans la pièce.",
            en : "You open the door and enter the room slowly."
        },
        "necroS2-texte-2" : {
            fr : "Les cris se font de plus en plus pressants puis s'arrêtent d'un coup.",
            en : "The screams are getting louder and louder and stop suddenly."
        },
        "necroS2-texte-3" : {
            fr : "Vous apercevez une ombre dans le fond de la pièce.",
            en : "You see a shadow in the background of the room."
        },
        "necroS2-texte-4" : {
            fr : "Elle vous parle d'une voix enfantine :",
            en : "She speaks to you in a childish voice:"
        },
        "necroS2-texte-5" : {
            fr : "&laquo; Qui est là&nbsp;? J'ai peur&hellip; J'ai faim&hellip; &raquo;",
            en : "&laquo; Who's out there? I'm scared&hellip; I'm hungry&hellip; &raquo;"
        },

        "necroS2Retour-texte-1" : {
            fr : "L'ombre dans le fond de la pièce vous regarde toujours sans bouger.",
            en : "The shadow in the background of the room always looks at you without moving."
        },
        "necroS2Retour-texte-2" : {
            fr : "Elle vous parle d'une voix enfantine, calmement :",
            en : "She speaks to you in a childlike voice, calmly:"
        },
        "necroS2Retour-texte-3" : {
            fr : "&laquo; Te revoilà&nbsp;? Tu viens jouer&nbsp;? &raquo;",
            en : "&laquo; Are you back again? Are you coming to play? &raquo;"
        },

        "necroS22-texte-1" : {
            fr : "Vous vous approchez tout doucement pour ne pas l'effrayer&hellip;",
            en : "You approach slowly so as not to frighten him&hellip;"
        },
        "necroS22-texte-2" : {
            fr : "La silhouette s'enfonce un peu plus dans l'obscurité.",
            en : "The silhouette sinks a little deeper into the darkness."
        },
        "necroS22-texte-3" : {
            fr : "Vous entendez soudain une voix criarde :",
            en : "You suddenly hear a screaming voice:"
        },
        "necroS22-texte-4" : {
            fr : "&laquo; C'est un méchant&nbsp;! Tue-le&nbsp;! Tue-le, déchet&nbsp;! &raquo;",
            en : "&laquo; He's a bad guy! Kill him! Kill him, you trash! &raquo;"
        },
        "necroS22-texte-5" : {
            fr : "Puis, la voix enfantine :",
            en : "Then the childish voice:"
        },
        "necroS22-texte-6" : {
            fr : "&laquo; Non&hellip; Il ne faut pas&hellip; &raquo;",
            en : "&laquo; No&hellip; You mustn' t&hellip; &raquo;"
        },

        "necroS2Parle-texte-1" : {
            fr : "Vous essayez de rassurer l'enfant d'une voix douce.",
            en : "You are trying to reassure the child with a soft voice."
        },
        "necroS2Parle-texte-2" : {
            fr : "Mais, c'est à nouveau la voix criarde qui vous répond :",
            en : "But it is again the screaming voice that responds to you:"
        },
        "necroS2Parle-texte-3" : {
            fr : "&laquo; Silence&nbsp;! Insecte inutile&nbsp;! Il ne t'écoutera pas&nbsp;!",
            en : "&laquo; Quiet! Insect useless! He won't listen to you!"
        },
        "necroS2Parle-texte-4" : {
            fr : "Maintenant, tue-le, où tu souffriras de nouveau&nbsp;! &raquo;",
            en : "Now kill him or you'll suffer again! &raquo;"
        },
        "necroS2Parle-texte-5" : {
            fr : "Vous voyez dans le noir deux points brillants&hellip;",
            en : "You see in the dark two bright spots&hellip;"
        },

        "necroS2Approche-texte-1" : {
            fr : "L'ombre vous regarde fixement et s'avance doucement vers vous.",
            en : "The shadow stares at you and slowly advances towards you."
        },
        "necroS2Approche-texte-2" : {
            fr : "La porte derrière vous claque violemment et vous entendez l'enfant rire&hellip;",
            en : "The back door slams you hard and you hear the child laughing&hellip;"
        },
        "necroS2Approche-texte-3" : {
            fr : "&laquo; Tu aurais dû t'enfuir tant que tu le pouvais&hellip; &raquo;",
            en : "&laquo; You should have run away while you could&hellip; &raquo;"
        },
        "necroS2Approche-texte-4" : {
            fr : "À mesure que la forme s'approche, vous la discernez mieux&hellip;",
            en : "As the shape approaches, you can see it better&hellip;"
        },

        "necroS2Enfant-texte-1" : {
            fr : "Un enfant s'avance lentement, blanc comme un linge.",
            en : "A child advances slowly, white as a sheet."
        },
        "necroS2Enfant-texte-2" : {
            fr : "Ses bras sont anormalement longs et couverts de coupures.",
            en : "His arms are abnormally long and covered with cuts."
        },
        "necroS2Enfant-texte-3" : {
            fr : "De ses doigts sortent de grandes tiges de fer&hellip;",
            en : "From his fingers come out large rods of iron&hellip;"
        },
        "necroS2Enfant-texte-4" : {
            fr : "En avançant, il se met à ricaner.",
            en : "As he moves on, he starts giggling."
        },
        "necroS2Enfant-texte-5" : {
            fr : "Ses dents, pointues comme les crocs d'un loup, brillent d'une couleur rouge&acirc;tre.",
            en : "Its teeth, pointed like a wolf's fangs, shine red."
        },

        "necroS2Enfant2-texte-1" : {
            fr : "Mais quelle était cette horreur&nbsp;?!",
            en : "But what was that horror?!"
        },
        "necroS2Enfant2-texte-2" : {
            fr : "Les enfants capturés servaient à fabriquer ce monstre&nbsp;?!",
            en : "The captured children were used to make this monster?!"
        },
        "necroS2Enfant2-texte-3" : {
            fr : "Vous réalisez soudain que d'autres enfants doivent subir le même sort à l'heure qu'il est&nbsp;!",
            en : "Suddenly you realize that other children have to suffer the same fate now!"
        },
        "necroS2Enfant2-texte-4" : {
            fr : "Il n'est peut-être pas trop tard&nbsp;!",
            en : "It may not be too late!"
        },
        "necroS2Enfant2-texte-5" : {
            fr : "Vous reprenez vos esprits et repartez à l'aventure.",
            en : "You come to your senses and go back to adventure."
        },

        "necroS2Fouille-texte-1" : {
            fr : "La salle se compose simplement d'une étagère remplie de vieux parchemins.",
            en : "The room is simply a shelf filled with old scrolls."
        },
        "necroS2Fouille-texte-2" : {
            fr : "En en lisant quelques-uns, vous découvrez qu'il est possible, avec la formule adéquate",
            en : "By reading a few of them, you will discover that it is possible, with the appropriate formula"
        },
        "necroS2Fouille-texte-3" : {
            fr : "et un peu de concentration, de lancer une terrible <span key='bouleFeu'>boule de feu</span>&nbsp;!",
            en : "and a little concentration, to throw a terrible <span key='bouleFeu'>fireball</span>!"
        },
        "necroS2Fouille-texte-4" : {
            fr : "Il est temps de retourner dans la grande salle&nbsp;! L'aventure n'attend pas&nbsp;!",
            en : "It's time to go back to the big room! The adventure does not wait!"
        },

        "necroS2Clean-texte-1" : {
            fr : "La salle est vide&hellip; Seule reste au sol cette <span key='experience'>expérience</span> ratée.",
            en : "The room is empty&hellip; Only this failed <span key='experience'>experiment</span> remains on the ground."
        },
        "necroS2Clean-texte-2" : {
            fr : "Vous vous demandez quel être immonde a pu opérer telle transformation&hellip;",
            en : "You're wondering what a disgusting thing it is to be could have done such a transformation&hellip;"
        }
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});