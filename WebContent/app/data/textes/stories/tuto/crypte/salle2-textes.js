'use strict';
define([], function(){
	var data = {
        "necroS2-texte-1" : {
            fr : "Vous ouvrez la porte et entrez doucement dans la pi&egrave;ce.",
            en : "You open the door and enter the room slowly."
        },
        "necroS2-texte-2" : {
            fr : "Les cris se font de plus en plus pressants et s&rsquo;arr&ecirc;tent d&rsquo;un coup.",
            en : "The screams are getting louder and louder and stop suddenly."
        },
        "necroS2-texte-3" : {
            fr : "Vous apercevez une ombre dans le fond de la pi&egrave;ce.",
            en : "You see a shadow in the background of the room."
        },
        "necroS2-texte-4" : {
            fr : "Elle vous parle d&rsquo;une voix enfantine :",
            en : "She speaks to you in a childish voice:"
        },
        "necroS2-texte-5" : {
            fr : "&laquo; Qui est l&agrave; ? J&rsquo;ai peur&hellip; J&rsquo;ai faim&hellip; &raquo;",
            en : "&laquo; Who's out there? I'm scared&hellip; I'm hungry&hellip; &raquo;"
        },

        "necroS2Retour-texte-1" : {
            fr : "L&rsquo;ombre dans le fond de la pi&egrave;ce vous regarde toujours sans bouger.",
            en : "The shadow in the background of the room always looks at you without moving."
        },
        "necroS2Retour-texte-2" : {
            fr : "Elle vous parle d&rsquo;une voix enfantine, calmement :",
            en : "She speaks to you in a childlike voice, calmly:"
        },
        "necroS2Retour-texte-3" : {
            fr : "&laquo; Te revoil&agrave; ? Tu viens jouer ? &raquo;",
            en : "&laquo; Are you back again? Are you coming to play? &raquo;"
        },

        "necroS22-texte-1" : {
            fr : "Vous vous approchez tout doucement pour ne pas l&rsquo;effrayer&hellip;",
            en : "You approach slowly so as not to frighten him&hellip;"
        },
        "necroS22-texte-2" : {
            fr : "La silhouette s&rsquo;enfonce un peu plus dans l&rsquo;obscurit&eacute;.",
            en : "The silhouette sinks a little deeper into the darkness."
        },
        "necroS22-texte-3" : {
            fr : "Vous entendez soudain une voix criarde :",
            en : "You suddenly hear a screaming voice:"
        },
        "necroS22-texte-4" : {
            fr : "&laquo; C&rsquo;est un m&eacute;chant ! Tue-le ! Tue-le, d&eacute;chet ! &raquo;",
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
            fr : "Vous essayez de rassurer l&rsquo;enfant d&rsquo;une voix douce.",
            en : "You are trying to reassure the child with a soft voice."
        },
        "necroS2Parle-texte-2" : {
            fr : "Mais, c&rsquo;est &agrave; nouveau la voix criarde qui vous r&eacute;pond :",
            en : "But it is again the screaming voice that responds to you:"
        },
        "necroS2Parle-texte-3" : {
            fr : "&laquo; Silence ! Insecte inutile ! Il ne t&rsquo;&eacute;coutera pas !",
            en : "&laquo; Quiet! Insect useless! He won't listen to you!"
        },
        "necroS2Parle-texte-4" : {
            fr : "Maintenant, tue-le o&ugrave; tu souffriras de nouveau ! &raquo;",
            en : "Now kill him or you'll suffer again! &raquo;"
        },
        "necroS2Parle-texte-5" : {
            fr : "Vous voyez dans le noir deux points brillants&hellip;",
            en : "You see in the dark two bright spots&hellip;"
        },

        "necroS2Approche-texte-1" : {
            fr : "L&rsquo;ombre vous regarde fixement et s&rsquo;avance doucement vers vous.",
            en : "The shadow stares at you and slowly advances towards you."
        },
        "necroS2Approche-texte-2" : {
            fr : "La porte derri&egrave;re vous claque violemment et vous entendez l&rsquo;enfant rire&hellip;",
            en : "The back door slams you hard and you hear the child laughing&hellip;"
        },
        "necroS2Approche-texte-3" : {
            fr : "&laquo; Tu aurais d&ucirc; t&rsquo;enfuir tant que tu le pouvais&hellip; &raquo;",
            en : "&laquo; You should have run away while you could&hellip; &raquo;"
        },
        "necroS2Approche-texte-4" : {
            fr : "&Agrave; mesure que la forme s&rsquo;approche, vous la discernez mieux&hellip;",
            en : "As the shape approaches, you can see it better&hellip;"
        },

        "necroS2Enfant-texte-1" : {
            fr : "Un enfant s&rsquo;avance lentement, blanc comme un linge.",
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
            fr : "En avan&ccedil;ant, il se met &agrave; ricaner.",
            en : "As he moves on, he starts giggling."
        },
        "necroS2Enfant-texte-5" : {
            fr : "Ses dents, pointues comme les crocs d&rsquo;un loup, brillent d&rsquo;une couleur rouge&acirc;tre.",
            en : "Its teeth, pointed like a wolf's fangs, shine red."
        },

        "necroS2Enfant2-texte-1" : {
            fr : "Mais quelle &eacute;tait cette horreur ?!",
            en : "But what was that horror?!"
        },
        "necroS2Enfant2-texte-2" : {
            fr : "Les enfants captur&eacute;s servaient &agrave; fabriquer ce monstre ?!",
            en : "The captured children were used to make this monster?!"
        },
        "necroS2Enfant2-texte-3" : {
            fr : "Vous r&eacute;alisez soudain que d&rsquo;autres enfants doivent subir le m&ecirc;me sort &agrave; l&rsquo;heure qu&rsquo;il est !",
            en : "Suddenly you realize that other children have to suffer the same fate now!"
        },
        "necroS2Enfant2-texte-4" : {
            fr : "Il n&rsquo;est peut-&ecirc;tre pas trop tard !",
            en : "It may not be too late!"
        },
        "necroS2Enfant2-texte-5" : {
            fr : "Vous reprenez vos esprits et repartez &agrave; l&rsquo;aventure.",
            en : "You come to your senses and go back to adventure."
        },

        "necroS2Fouille-texte-1" : {
            fr : "La salle se compose simplement d&rsquo;une &eacute;tag&egrave;re remplie de vieux parchemins.",
            en : "The room is simply a shelf filled with old scrolls."
        },
        "necroS2Fouille-texte-2" : {
            fr : "En en lisant quelques-uns, vous d&eacute;couvrez qu&rsquo;il est possible, avec la formule ad&eacute;quate",
            en : "By reading a few of them, you will discover that it is possible, with the appropriate formula"
        },
        "necroS2Fouille-texte-3" : {
            fr : "et un peu de concentration, de lancer une terrible <span key='bouleFeu'>boule de feu</span> !",
            en : "and a little concentration, to throw a terrible <span key='bouleFeu'>fireball</span>!"
        },
        "necroS2Fouille-texte-4" : {
            fr : "Il est temps de retourner dans la grande salle ! L&rsquo;aventure n&rsquo;attend pas !",
            en : "It's time to go back to the big room! The adventure does not wait!"
        },

        "necroS2Clean-texte-1" : {
            fr : "La salle est vide&hellip; Seul reste au sol cette <span key='experience'>exp&eacute;rience</span> rat&eacute;e.",
            en : "The room is empty&hellip; Only this failed <span key='experience'>experiment</span> remains on the ground."
        },
        "necroS2Clean-texte-2" : {
            fr : "Vous vous demandez quel &ecirc;tre immonde a pu op&eacute;rer telle transformation&hellip;",
            en : "You're wondering what a disgusting thing it is to be could have done such a transformation&hellip;"
        }
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});