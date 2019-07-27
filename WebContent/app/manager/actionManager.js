/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "app/data/items",
        ],
function($, _, Utils, Items) {
	'use strict';

	return function(parent, name) {
		this.init = function(parent, name) {
			this.el = "";
			this.parent = parent;
			this.Textes = parent.Textes;

			this.saveManager = parent.saveManager;
			this.mediatheque = parent.mediatheque;

			this.name = name;
			// On ne prend ici en compte que les state pending et used
			this.state = null;
			this.data = Items.get(name);
		};

        /**
        * Si l'action n'a aucun degat, on l'utilise directement sur l'utilisateur
        * Si l'action est une multicible, on l'utilise sur tout les monstres
        * S'il n'y a plus qu'un monstre on l'utilise sur le monstre
        * Sinon, on la place en pending et on attend que l'utilisateur selectionne le monstre
        **/
		this.click = function() {
		    switch (this.data.type) {
		        case "arme": // On attaque 1 ou plusieurs monstres
		        case "magie":
		            this.attaqueCase();
		            break;
		        case "bouclier": // Tout le monde nous attaque mais on defend
		            this.bouclierCase();
		            break;
		        case "conso": // On se soigne ou on fait des degats
                    var degats = this.data.degats[0] + this.data.degats[1];
		            if (degats) this.attaqueCase();
		            else this.useOn(this.parent.player);
		            break;
		    }
        };

        /**
        * Methode generique dans le cas d'un action offensif
        **/
        this.attaqueCase = function() {
            var aliveMonsters = this.parent.aliveMonsters();
            var player = this.parent.player;

            if (this.data.multicible) this.useOn(aliveMonsters);
//            else if (aliveMonsters.length == 1) this.useOn(aliveMonsters[0]);
            else this.parent.setPending(this);
        };

        /**
        * Methode specifique de gestion du bouclier
        **/
        this.bouclierCase = function() {
            var sound = this.data.sound;
            this.mediatheque.playSound(sound + ".wav");

            this.parent.closePending();
            this.state = "used";

            var aliveMonsters = this.parent.aliveMonsters();
            var player = this.parent.player;
            for (var i in aliveMonsters) {
                var monster = aliveMonsters[i];
                monster.attaque(player, true);
            }
            this.parent.pioche();
        };

        this.useOn = function(cibles) {
            if (!Array.isArray(cibles)) cibles = [cibles];
            this.parent.closePending();
            this.state = "used";

            var player = this.parent.player;
            var actionDone = false;
            switch (this.data.type) {
                case "arme" :
                    actionDone = player.attaque(cibles, true);
                    break;
                case "magie" :
                    actionDone = player.spell(this.data.name, cibles);
                    break;
                case "conso" :
                    actionDone = player.use(this.data.name, cibles);
                    break;
                default :
                    console.log("Erreur - l'action est inconnue", this.data, cibles);
                    break;
            }

            if (actionDone) {
                var sound = this.data.sound;
                this.mediatheque.playSound(sound + ".wav");
                this.parent.playAnim(cibles, this.data.anim);
            }
        };

		this.init(parent, name);
	};
});