/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "text!app/template/combat.html",
        "app/data/glossaire",
        "app/data/suffixe",
        "app/model/monstre",
        "app/model/action"], 
function($, _, Utils, page, Glossaire, Suffixe, Monstre, Action) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
			this.el = $("#corps");
			this.parent = parent;
			this.Textes = parent.Textes;
			this.mediatheque = parent.mediatheque;
		};
		
		/**
		 * Charge l'ecran de combat en fonction des informations transmises
		 */
		this.load = function(monstres, but, actionsPossible) {
			this.actionsPossible = actionsPossible;
			this.but = but;
			this.data = {
				"monstres" : new Array(),
				"actions" : new Array()
			};
			this.createMonstre(monstres);
			this.render();
			this.appair();
		};
		
		this.render = function() {
			_.templateSettings.variable = "data";
			var template = _.template(page);
			
			this.data.text = this.Textes;
			
			this.el.html(template(this.data));
			
			this.positionMonstre();
			this.pioche();
			Utils.resizeActionButton();
			this.checkEvents();
			
			this.refreshAll();
		};
		
		/**
		 * Raffraichie tout l'ecran 
		 * et verifie les conditions de victoire
		 */
		this.refreshAll = function() {
			if ($(".corps > .choix > div").not(".used").length == 1) {
				this.pioche();
			}
			
			for (var index in this.data.monstres) {
				this.refresh(index);
			}
			
			if (this.parent.save.getLife() == 0) {
				this.disappair();
				this.parent.go("perdu");
			}else if ($("div.monstre").not(".die").length==0) {
				this.gagne();
			}
		};
		
		/**
		 * Raffraichie un monstre donné
		 */
		this.refresh = function(index) {
			var that = this;
			var monstre = this.data.monstres[index];
			if (monstre.isAlive()) {
				if (monstre.getLife() <= 0) {
					monstre.die();
					$("div.monstre[key="+index+"]").addClass("die");
					$("div.monstre[key="+index+"]").hide("slow", function() {
						that.positionMonstre();
					});
				}
				var vie = monstre.getLife() + "%";
				$("div.monstre[key="+index+"] .vieRestante").animate({
					width: vie
				}, "slow");
			}
		};
		
		this.positionMonstre = function() {
			var monstres = $(".combat .monstre:visible").length;
			$(".combat").animate({width : 10*monstres + "%"}, "slow");
			$(".combat .monstre").animate({width : parseInt(100/monstres) + "%"}, "slow");
		};
		
		/**
		 * Met en place les differents evenements clickable
		 */
		this.checkEvents = function() {
			var that = this;
			
			//Choix d'une attaque
			$(".corps > .choix > div").click(function(event) {
				that.use = $(this).attr("key");
				var action = that.data.actions[that.use];
				//Si ce n'est pas une attaque, on ne reclame pas de cible
				if (action.getAttaque(that.parent) == 0) {
					$(".corps > .wait").show();
					that.useItem();
					$(".corps > .wait").hide();
					return;
				} 
				
				// S'il ny a plus qu'une cible on la prend
				var cibles = $("div.monstre").not(".die");
				if (cibles.length == 1) {
					$(".corps > .wait").show();
					that.useItem(cibles.attr("key"));
					$(".corps > .wait").hide();
					return;
				}
				
				// Sinon, on attend une cible
				$(".corps > .choix > div").removeClass("use");
				$(this).addClass("use");
			});
			
			// Choix d'une cible
			$(".corps > .combat > .monstre").click(function(event) {
				var target = $(this);
				// Si une attaque est selectionnée
				if (that.use) {
					$(".corps > .wait").show();
					var cibleIndex = target.attr("key");
					var cible = that.data.monstres[cibleIndex];
					// On lance les attaques si la cible n'est pas deja morte
					if (cible.getLife() > 0) {
						that.useItem(cibleIndex);
					}
					$(".corps > .wait").hide();
				}
			});
		};
		
		/**
		 * Lance l'utilisation d'une competence
		 */
		this.useItem = function(index) {
			var parent = this.parent;
			var action = this.data.actions[this.use];
			
			if (action.data.type == "magie") {
				var mg = parent.save.data.currentMagie;
				if (mg < -action.getMagie(parent)) {
					var jaugeMagie = $(".magieRestante").closest(".jauge");
					this.mediatheque.play("erreur");
					jaugeMagie.animate({backgroundColor:'red'}, "fast", function () {
						jaugeMagie.animate({backgroundColor:'transparent'}, 1000, function () {
							jaugeMagie.animate({backgroundColor:'red'}, "fast", function () {
								jaugeMagie.animate({backgroundColor:'transparent'}, 1000);
							});
						});
					});
					return;
				}
			}
			
			if (this.parent.save.isSound()) {
				this.mediatheque.play(action.sound);
			}
			// On blesse la cible avec l'action
			if (index) {
				var cible = this.data.monstres[index];
				var attaque = action.getAttaque(parent);
				if (attaque > 0) {
					var cibleHurt = $("div.monstre[key="+index+"] .monstreAction .hurt");
					cibleHurt.addClass(action.data.anim);
					cibleHurt.fadeIn("fast", function() {
						cibleHurt.fadeOut(1000, function() {
							cibleHurt.removeClass(action.data.anim);
						});
					});
					cible.hurt(attaque);
				}
			}
			// On blesse le heros avec tout les monstres vivant
			for (var mIndex in this.data.monstres) {
				var monstre = this.data.monstres[mIndex];
				if (monstre.getLife() > 0) {
					parent.save.hurt(monstre.getAttaque(), action.getDefense(parent));
				}
			}
			
			//On soigne le heros
			parent.save.heal(action.getVie(parent));
			parent.save.healMG(action.getMagie(parent));
			
			//Si l'action est de type conso, on la retire
			if (action.data.type == "conso") {
				parent.save.removeItem(action.data.key, "conso");
				this.actionsPossible = parent.save.getActions();
			}
			
			//On retire l'action
			$(".corps > .choix > div[key="+this.use+"]").addClass("used");
			this.use = null;
			
			if (action.data.name == "piocher") {
				this.pioche();
			}
			
			//On raffraichie les barres de vie
			parent.refresh();
			this.refreshAll();
		};
		
		this.appair = function() {
			$(".combat > div").show();
			$(".choix").animate({"margin-top" : "0%"}, "slow");
		};
		this.disappair = function() {
			$(".texte > div").hide("slow");
			$(".choix").animate({"margin-top" : "5%"}, "slow");
		};
		
		this.pioche = function() {
			this.data.actions.splice(0, this.data.actions.length);
			var actionsPossible = this.actionsPossible;
			var consoPioche = new Array();
			var magiePioche = new Array();
			var i=0;
			while (i<5) {
				var action = new Action(actionsPossible[Utils.rand(0, actionsPossible.length)]);
				
				if (action.data.type == "conso" && consoPioche.indexOf(action.data.name) != -1) continue;
				if (action.data.type == "magie" && magiePioche.indexOf(action.data.name) != -1) continue;
				
				consoPioche.push(action.data.name);
				magiePioche.push(action.data.name);
				this.data.actions.push(action);
				$(".corps > .choix > div[key="+i+"] > .texte").html(this.Textes.get(action.data.name));
				$(".corps > .choix > div[key="+i+"]").removeClass("used");
				i++;
			}
			var action = new Action(null);
			this.data.actions.push(action);
			$(".corps > .choix > div[key=5] > .texte").html(this.Textes.get(action.data.name));
			$(".corps > .choix > div[key=5]").removeClass("used");
			
			$(".corps > .choix > div").removeClass("use");
		};
		
		this.createMonstre = function(monstres) {
			for (var index in monstres) {
				var key = monstres[index];
				var monstre = new Monstre(Glossaire.get(key), this.Textes);
				monstre.buff(Suffixe.getRandom());
				this.data.monstres.push(monstre);
			};
		};
		
		this.gagne = function() {
			this.disappair();
			
			var gainXp = 0;
			var gainArgent = 0;
			for (var mIndex in this.data.monstres) {
				var monstre = this.data.monstres[mIndex];
				gainXp += monstre.getXp();
				gainArgent += monstre.getArgent();
			}
			this.parent.save.upXp(gainXp);
			this.parent.save.upArgent(gainArgent);
			this.parent.refresh();
			
			this.parent.go(this.but);
		};
		
		this.init(parent);
	};
});