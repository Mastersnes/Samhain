/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "app/data/glossaire",
        "app/data/suffixe"
        ],
function($, _, Utils, Glossaire, Suffixe) {
	'use strict';

	return function(parent, name, index) {
		this.init = function(parent, name, index) {
			this.el = "";
			this.parent = parent;
			this.Textes = parent.Textes;

			this.saveManager = parent.saveManager;
			this.mediatheque = parent.mediatheque;

			this.index = index;

			this.name = name;
			this.template = Glossaire.get(name);
			this.suffixe = Suffixe.getRandom();

			var vieMin = this.template.vie[0] * this.suffixe.vie;
			var vieMax = this.template.vie[1] * this.suffixe.vie;
			var vie = Utils.rand(vieMin, vieMax);
			if (vie < 1) vie = 1;

			var attaqueMin = this.template.attaque[0] * this.suffixe.attaque;
			var attaqueMax = this.template.attaque[1] * this.suffixe.attaque;
			if (attaqueMax < 1) attaqueMax = 1;

			var defenseMin = this.template.defense[0] * this.suffixe.defense;
			var defenseMax = this.template.defense[1] * this.suffixe.defense;

			var goldMin = this.template.argent[0] * this.suffixe.argent;
			var goldMax = this.template.argent[1] * this.suffixe.argent;

			var xpMin = this.template.xp[0] * this.suffixe.xp;
			var xpMax = this.template.xp[1] * this.suffixe.xp;

			this.data = {
			    "life" : {
			        "current": vie,
			        "max" : vie
			    },
			    "attaque" : [attaqueMin, attaqueMax],
			    "defense" : [defenseMin, defenseMax],
			    "gold" : Utils.rand(goldMin, goldMax),
			    "xp" : Utils.rand(xpMin, xpMax)
			};
		};

		this.get = function(key) {
            var keys = key.split(".");

            var data = this.data;
            for (var i in keys) {
                data = data[keys[i]];
                if (data == undefined) return null;
            }

            return data;
        };

		this.completeName = function() {
		    var suffixeName = this.suffixe.namef;
		    if (this.template.sexe == "m")
		        suffixeName = this.suffixe.namem;

            if (this.Textes.local == "fr")
		        return this.Textes.get(this.name) + "<br/>" + this.Textes.get(suffixeName);
		    else
		        return this.Textes.get(suffixeName) + "<br/>" + this.Textes.get(this.name);
		};

		this.attaque = function(cible, withDef) {
		    var attaque = this.data.attaque;
            var degats = Utils.rand(attaque[0], attaque[1], true);
            if (degats < 0) degats = 0;
            cible.hurt(degats, withDef);
        };
        this.hurt = function(amount, withDef) {
            var degats = amount;

            if (withDef) {
                var defense = this.data.defense;
                degats -= Utils.rand(defense[0], defense[1], true);
            }

            if (degats < 0) degats = 0;
            this.addLife(-degats);
        };
        this.addLife = function(amount) {
            this.data.life.current += amount;
            if (this.data.life.current < 0) this.data.life.current = 0;
            if (this.data.life.current > this.data.life.max)
                this.data.life.current = this.data.life.max;
        };
        this.addMana = function() {
        };

		this.init(parent, name, index);
	};
});