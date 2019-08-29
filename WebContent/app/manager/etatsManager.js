/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "app/data/etats"
        ],
function($, _, Utils, Etats) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
			this.el = "";
			this.parent = parent;

			this.Textes = parent.Textes;
			this.saveManager = parent.saveManager;
			this.mediatheque = parent.mediatheque;

            this.data = parent.data;
		};

        /**
        * Calcul la cible de l'etat
        **/
		this.check = function(etatId, cible) {
		    var etat = Etats.get(etatId);
            if (!etat) {
                console.log("Erreur - l'etat n'existe pas", etatId);
                return;
            }
            etat.level = this.data.level;
            if (etat.offensif) cible.etatsManager.addEtat(etat);
            else this.addEtat(etat);
		};

		/**
        * Ajoute l'effet en question
        * Si un effet du meme type existe deja -> le reinitialise
        **/
        this.addEtat = function(newEtat) {
            if (!newEtat) return;

            var dureeMin = newEtat.duree[0];
            var dureeMax = newEtat.duree[1];
            newEtat.duree = Utils.rand(dureeMin, dureeMax, true) + newEtat.level;

            if (newEtat.offensif) this.data.debuff = newEtat;
            else this.data.buff = newEtat;
        };

        /**
        * Inflige les etats et decremente la duree
        **/
		this.infligeEtats = function() {
            if (this.data.buff) {
                this.infligeEtat(this.data.buff);
                if(this.data.buff.duree <= 0) this.data.buff = null;
            }

            if (this.data.debuff) {
                this.infligeEtat(this.data.debuff);
                if(this.data.debuff.duree <= 0) this.data.debuff = null;
            }
        };

        this.infligeEtat = function(etat) {
            etat.duree--;

            var degats = Utils.rand(etat.degats[0], etat.degats[1], true);
            if (degats) this.parent.hurt(degats + etat.level, false);

            var vie = Utils.rand(etat.vie[0], etat.vie[1], true);
            if (vie) this.parent.addLife(vie + etat.level);
        };

		this.init(parent);
	};
});