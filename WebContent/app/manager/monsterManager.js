/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "app/data/glossaire",
        "app/data/suffixe"
        ],
function($, _, Utils, Glossaire, Suffixe) {
	'use strict';

	return function(parent, name) {
		this.init = function(parent, name) {
			this.el = "";
			this.parent = parent;
			this.Textes = parent.Textes;

			this.saveManager = parent.saveManager;
			this.mediatheque = parent.mediatheque;

			this.name = name;
			this.template = Glossaire.get(name);
			this.suffixe = Suffixe.getRandom();

			var vieMin = this.template.vie[0] * this.suffixe.vie;
			var vieMax = this.template.vie[1] * this.suffixe.vie;
			var vie = Utils.rand(vieMin, vieMax);

			var attaqueMin = this.template.attaque[0] * this.suffixe.attaque;
			var attaqueMax = this.template.attaque[1] * this.suffixe.attaque;

			var defenseMin = this.template.defense[0] * this.suffixe.defense;
			var defenseMax = this.template.defense[1] * this.suffixe.defense;

			this.data = {
			    "life" : {
			        "current": vie,
			        "max" : vie
			    },
			    "attaque" : [attaqueMin, attaqueMax],
			    "defense" : [defenseMin, defenseMax]
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
		    return this.Textes.get(this.name) + " " + this.Textes.get(suffixeName);
		};

		this.attaque = function(cible) {
		    var attaque = this.data.attaque;
            var degats = Utils.rand(attaque[0], attaque[1], true);
            if (degats < 0) degats = 0;
            cible.hurt(degats, true);
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

		this.init(parent, name);
	};
});