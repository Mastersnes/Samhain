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
        * Si un effet du meme type existe deja additionne les durees
        **/
        this.addEtat = function(newEtat) {
            if (!newEtat) return;

            var dureeMin = newEtat.duree[0];
            var dureeMax = newEtat.duree[1];
            newEtat.duree = Utils.rand(dureeMin, dureeMax, true) + newEtat.level;
            newEtat.current = newEtat.duree;

            if (newEtat.offensif) {
                var oldEtat = this.data.debuff;
                if (oldEtat && oldEtat.type == newEtat.type) newEtat.duree += oldEtat.current;
                this.data.debuff = newEtat;
            }else {
                var oldEtat = this.data.buff;
                if (oldEtat && oldEtat.type == newEtat.type) newEtat.duree += oldEtat.current;
                this.data.buff = newEtat;
            }
        };

        /**
        * Inflige les etats et lance le callback
        **/
		this.infligeEtats = function(endFunction) {
            var that = this;
            this.infligeEtat("debuff", function() {
                that.infligeEtat("buff", endFunction);
            });
        };

        this.infligeEtat = function(etatName, then) {
            var etat = this.data[etatName];
            if (!etat) return then?then():null;
            etat.current--;

            var degats = Utils.rand(etat.degats[0], etat.degats[1], true);
            if (degats) this.parent.hurt(degats + etat.level, false, etat.element);

            var vie = Utils.rand(etat.vie[0], etat.vie[1], true);
            if (vie) this.parent.addLife(vie + etat.level);

            if (etat.current <= 0) this.data[etatName] = null;
            if (then) then();
        };

		this.init(parent);
	};
});