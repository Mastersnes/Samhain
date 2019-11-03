/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "app/manager/levelManager",
        "app/manager/etatsManager",
        "app/data/items",
        "app/data/etats"
        ],
function($, _, Utils, LevelManager, EtatsManager, Items, Etats) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
			this.el = "";
			this.parent = parent;
			this.Textes = parent.Textes;

			this.saveManager = parent.saveManager;
			this.recompenseManager = parent.recompenseManager;
			this.data = this.saveManager.load("player");
			this.options = this.saveManager.load("gameOptions");

			this.mediatheque = parent.mediatheque;
			this.levelManager = new LevelManager(this);
			this.etatsManager = new EtatsManager(this);
			this.amountBuffer = [];
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

		/**
		* Gestion de l'equipement
		**/
		this.bouclier = function() {
		    var boucliers = this.data.equipment.bouclier;
		    var currentBouclier = this.data.equipment.currentBouclier;

		    if (!Utils.contains(boucliers, currentBouclier)) {
		        console.log("Erreur bouclier - bouclier non possédé", currentBouclier, boucliers);
		        this.data.equipment.currentBouclier = "bras";
            }

		    return Items.get("bouclier", currentBouclier);
		};
		this.arme = function() {
		    var armes = this.data.equipment.arme;
            var currentArme = this.data.equipment.currentArme;

            if (!Utils.contains(armes, currentArme)) {
                console.log("Erreur arme - arme non possédée", currentArme, armes);
                this.data.equipment.currentArme = "poing";
            }

            return Items.get("arme", currentArme);
		};
		this.currentArme = function() {
		    this.arme();
		    return this.data.equipment.currentArme;
		};
		this.currentBouclier = function() {
		    this.bouclier();
		    return this.data.equipment.currentBouclier;
		};
		this.addEquipment = function(param1, param2) {
		    var type, name;
		    if (param2) {
		        type = param1;
		        name = param2;
		    } else {
		        name = param1;
		        var item = Items.get(name);
		        if (item.type) type = item.type;
		        else type = "ifObj";
		    }

            if (type != "ifObj") this.addAmountChange("+"+this.Textes.get(name), "equipment");
		    this.data.equipment[type].push(name);

		    // Si c'est une arme ou un bouclier et qu'il est meilleur, on le selectionne automatiquement
		    if (this.options.selectAuto) {
                if (type == "arme") this.selectBetterArme(name);
                else if (type == "bouclier") this.selectBetterBouclier(name);
            }
		};
		this.removeEquipment = function(param1, param2) {
		    var type, name;
		    if (param2) {
		        type = param1;
		        name = param2;
		    }else {
		        name = param1;
                var item = Items.get(name);
                if (item.type) type = item.type;
                else type = "ifObj";
		    }

            // On ne supprime pas le poing ou le bras
		    if (name == "poing" || name == "bras") return;

		    var itemIndex = this.data.equipment[type].indexOf(name);
		    if (itemIndex > -1) {
		        if (type != "ifObj") this.addAmountChange("<s>"+this.Textes.get(name)+"</s>", "equipment");
		        this.data.equipment[type].splice(itemIndex, 1);
		        this.arme();
		        this.bouclier();
		    } else console.log("Erreur suppression - item non possédé", type, name);
		};
		this.selectArme = function(name) {
		    var armes = this.data.equipment.arme;
		    if (Utils.contains(armes, name)) {
		        this.data.equipment.currentArme = name;
		    } else console.log("Erreur selection - arme non possédée", name);
		};
		this.selectBetterArme = function(name) {
            var arme = Items.get("arme", name);
            if (!arme) {
                console.log("Erreur - Impossible de trouver l'arme", name);
                return;
            }
            var currentArme = this.arme();

            var moyenneArme = (arme.degats[0] + arme.degats[1]) / 2;
            if (arme.lifeSteal) moyenneArme += (arme.lifeSteal[0] + arme.lifeSteal[1]) / 2;
            var moyenneCurrent = (currentArme.degats[0] + currentArme.degats[1]) / 2;
            if (currentArme.lifeSteal) moyenneCurrent += (currentArme.lifeSteal[0] + currentArme.lifeSteal[1]) / 2;

            if (moyenneArme > moyenneCurrent) this.selectArme(name);
        };
		this.selectBouclier = function(name) {
		    var boucliers = this.data.equipment.bouclier;
            if (Utils.contains(boucliers, name)) {
                this.data.equipment.currentBouclier = name;
            } else console.log("Erreur selection - bouclier non possédé", name);
		};
		this.selectBetterBouclier = function(name) {
            var bouclier = Items.get("bouclier", name);
            if (!bouclier) return;
            var currentBouclier = this.bouclier();

            var moyenneBouclier = (bouclier.defense[0] + bouclier.defense[1]) / 2;
            var moyenneCurrent = (currentBouclier.defense[0] + currentBouclier.defense[1]) / 2;

            if (moyenneBouclier > moyenneCurrent) this.selectBouclier(name);
        };
		this.has = function(itemId) {
		    if (Utils.contains(this.data.equipment.arme, itemId)) return "arme";
		    if (Utils.contains(this.data.equipment.bouclier, itemId)) return "bouclier";
		    if (Utils.contains(this.data.equipment.magie, itemId)) return "magie";
		    if (Utils.contains(this.data.equipment.conso, itemId)) return "conso";
		    if (Utils.contains(this.data.equipment.clef, itemId)) return "clef";
		    if (Utils.contains(this.data.equipment.ifObj, itemId)) return "ifObj";
		    return null;
		};
		this.usableMagie = function() {
		    if (!this.get("unlockMana")) return [];

		    var usable = [];
		    var currentMana = this.data.mana.current;
		    for (var i in this.data.equipment.magie) {
		        var magieId = this.data.equipment.magie[i];
		        var magie = Items.get("magie", magieId);
		        if (currentMana >= magie.manaCost) usable.push(magieId);
		    }
		    return usable;
		};
		/**
		* Renvoi un des objet de soin
		**/
		this.getRandSoin = function() {
		    var soinItem = [];
		    for (var i in this.data.equipment.conso) {
		        var consoId = this.data.equipment.conso[i];
		        var conso = Items.get("conso", consoId);
		        if (conso && conso.vie[1] > 0) soinItem.push(consoId);
		        else if (!conso) console.log("Erreur - le conso n'existe pas", consoId) ;
		    }

		    var randNumber = Utils.rand(0, soinItem.length);
		    return soinItem[randNumber];
		};

		// Vrai si le joueur possede tout les objets
		// Faux si le joueur ne possede pas au moins un des objets
		this.hasAll = function(items) {
		    var found = true;
            for (var i in items) {
                var item = items[i];
                found = found && this.has(item);
            }
            return found;
		};

		// Vrai si le joueur ne possede aucun des objets
		// Faux si le joueur possede au moins un des objets
        this.hasNoOne = function(items) {
            for (var i in items) {
                var item = items[i];
                if (this.has(item))  {
                    return false;
                }
            }
            return true;
        };

		this.use = function(itemId, cibles) {
		    if (!cibles) cibles = this;
		    if (!Array.isArray(cibles)) cibles = [cibles];

		    var consos = this.data.equipment.conso;
		    if (Utils.contains(consos, itemId)) {
		        var item = Items.get("conso", itemId);
                for (var i in cibles) {
                    var cible = cibles[i];

                    if (item.degats) {
                        var degats = Utils.rand(item.degats[0], item.degats[1], true);
                        if (degats > 0) cible.hurt(degats, true);
                    }
                    if (item.vie) {
                        var vie = Utils.rand(item.vie[0], item.vie[1], true);
                        if (vie > 0) cible.addLife(vie);
                    }

                    if (item.mana) {
                        var mana = Utils.rand(item.mana[0], item.mana[1], true);
                        if (mana > 0) cible.addMana(mana);
                    }

                    if (item.effet) {
                        for (var i in item.effet) {
                            var effetId = item.effet[i];
                            this.etatsManager.check(effetId, cible);
                        }
                    }

                    // Action particuliere
                    if (item.action) item.action(this, cible, this.fightView);
                    if (item.offensif) cible.showDegats(item.anim);
		        }

                // On joue le son de l'attaque apres la boucle pour ne pas tuer les oreilles du joueur
                this.mediatheque.playSound(item.sound + ".wav");
		        this.removeEquipment("conso", itemId);
		        return true;
		    }else {
		        console.log("Erreur use - objet non possédé", itemId, cibles);
		        return false;
		    }
		};
		this.spell = function(itemId, cibles) {
            if (!this.get("unlockMana")) return false;
            if (!cibles) cibles = this;
            if (!Array.isArray(cibles)) cibles = [cibles];

            var magies = this.data.equipment.magie;
            if (Utils.contains(magies, itemId)) {
                var magie = Items.get("magie", itemId);
                if (magie.manaCost <= this.get("mana.current")) {
                    this.addMana(-magie.manaCost);
                    var level = this.data.level;
                    for (var i in cibles) {
                        var cible = cibles[i];

                        if (magie.vie) {
                            var vie = Utils.rand(magie.vie[0], magie.vie[1], true);
                            if (vie > 0) cible.addLife(vie + level);
                        }

                        if (magie.degats) {
                            var degats = Utils.rand(magie.degats[0], magie.degats[1], true);
                            if (degats > 0) cible.hurt(degats + level, true, magie.element);
                        }

                        if (magie.lifeSteal) {
                            var lifeSteal = Utils.rand(magie.lifeSteal[0], magie.lifeSteal[1], true);
                            if (lifeSteal > 0) this.steal("life", cible, lifeSteal + level)
                        }

                        if (magie.manaSteal) {
                            var manaSteal = Utils.rand(magie.manaSteal[0], magie.manaSteal[1], true);
                            if (manaSteal > 0) this.steal("mana", cible, manaSteal + level)
                        }

                        // Action particuliere
                        if (magie.action) magie.action(this, cible, this.fightView);

                        if (magie.effet) {
                            for (var i in magie.effet) {
                                var effetId = magie.effet[i];
                                this.etatsManager.check(effetId, cible);
                            }
                        }

                        if (magie.offensif) cible.showDegats(magie.anim);
                    }
                    // On joue le son de l'attaque apres la boucle pour ne pas tuer les oreilles du joueur
                    this.mediatheque.playSound(magie.sound + ".wav");
                } else console.log("Erreur spell - pas assez de mana", magie, cibles);
            }else console.log("Erreur spell - sort non possédé", itemId, cibles);
        };

        /**
        * Modifications sur la vie
        **/
        this.attaque = function(cibles, withDef) {
            if (!Array.isArray(cibles)) cibles = [cibles];

            if (withDef == undefined) withDef = true;

            var baseAttaque = this.data.attaque;
            var arme = this.arme();

            var degatsMin = baseAttaque + arme.degats[0];
            var degatsMax = baseAttaque + arme.degats[1];

            var level = this.get("level");
            for (var i in cibles) {
                var cible = cibles[i];

                if (arme.lifeSteal) {
                    var lifeSteal = Utils.rand(arme.lifeSteal[0], arme.lifeSteal[1], true);
                    if (lifeSteal > 0) this.steal("life", cible, lifeSteal + level)
                }
                if (arme.manaSteal) {
                    var manaSteal = Utils.rand(arme.manaSteal[0], arme.manaSteal[1], true);
                    if (manaSteal > 0) this.steal("mana", cible, manaSteal + level)
                }

                var degats = Utils.rand(degatsMin, degatsMax, true);
                if (degats < 0) degats = 0;
                cible.hurt(degats, withDef);
                cible.showDegats(arme.anim);
            }
            // On joue le son de l'attaque apres la boucle pour ne pas tuer les oreilles du joueur
            arme.offensif = true;
            this.mediatheque.playSound(arme.sound + ".wav");
        };
		this.hurt = function(amount, withDef, element) {
		    var degats = amount;

		    if (withDef) {
                var baseDefense = this.data.defense;
                var bouclier = this.bouclier();

                var defenseMin = baseDefense + bouclier.defense[0];
                var defenseMax = baseDefense + bouclier.defense[1];

                degats -= Utils.rand(defenseMin, defenseMax, true);
		    }

		    if (degats < 0) degats = 0;
            this.addLife(-degats, element);
            return degats;
		};

		/**
		* Ajoute ou retire de la vie
		* element est le type de degats recus
		**/
		this.addLife = function(amount, element) {
		    this.addAmountChange(amount, "life", element);
            this.data.life.current += amount;
            if (this.data.life.current < 0) this.data.life.current = 0;
            if (this.data.life.current > this.data.life.max)
                this.data.life.current = this.data.life.max;
		};


		/**
		* Modifications sur le mana
		**/
		this.addMana = function(amount) {
		    if (!this.data.unlockMana) return;
		    if (amount > 0) this.addAmountChange(amount, "mana");
		    this.data.mana.current += amount;
		    if (this.data.mana.current < 0) this.data.mana.current = 0;
		    if (this.data.mana.current > this.data.mana.max)
		        this.data.mana.current = this.data.mana.max;
		};
		this.unlockMana = function(amount) {
		    this.data.unlockMana = true;
		    if (amount < 0) amount = 0;
		    this.data.mana.max += amount;
		    this.addMana(this.data.mana.max);
		};

        /**
        * Modifications sur l'xp
        **/
		this.addXp = function(amount) {
		    if (amount > 0) this.addAmountChange(amount, "xp");
		    this.levelManager.add(amount);
		};
		this.levelUp = function() {
		    this.data.attaque++;
		    this.data.defense++;
		    this.data.life.max += 50;
		    if (this.data.unlockMana) this.data.mana.max++;

		    this.addLife(this.data.life.max);
		    this.addMana(this.data.mana.max);
		};

		/**
		* Modification sur l'or
		**/
		this.addGold = function(amount) {
		    if (amount > 0) this.addAmountChange(amount, "gold");
            this.data.gold += amount;
            if (this.data.gold < 0) this.data.gold = 0;
            if (this.data.gold > Utils.MAX_GOLD) {
                this.data.gold = Utils.MAX_GOLD;
                this.recompenseManager.addSuccess("MaxGoldEarn", true);
            }
        };
        this.achete = function(itemId) {
            var item = Items.get(itemId);
            if (item && item.price) {
                if(this.data.gold >= item.price) {
                    this.addGold(-item.price);
                    this.addEquipment(item.type, item.name);
                }else console.log("Erreur achete - l'item est trop chere", itemId, item.price);
            }else console.log("Erreur achete - l'item n'existe pas ou n'a pas de prix", itemId);
        };
        this.vend = function(itemId) {
            if (this.data.gold >= Utils.MAX_GOLD) return false;

            var item = Items.get(itemId);
            if (item && item.price) {
                this.addGold(Math.round(item.price * 0.5));
                this.removeEquipment(item.type, item.name);
                return true;
            }else {
                console.log("Erreur vend - l'item n'existe pas ou n'a pas de prix", itemId);
                return false;
            }
        };

        this.steal = function(attr, cible, value, valueMin) {
            switch(attr) {
                case "life":
                    var steal = cible.get("life.current");
                    cible.addLife(-value);
                    steal -= cible.get("life.current");
                    if (valueMin != undefined) this.addLife(Utils.rand(valueMin, steal, true));
                    else this.addLife(steal);
                    break;
                case "mana":
                    var steal = cible.get("mana.current");
                    cible.addMana(-value);
                    steal -= cible.get("mana.current");
                    if (valueMin != undefined) this.addMana(Utils.rand(valueMin, steal, true));
                    else this.addMana(steal);
                    break;
                case "gold":
                    var steal = cible.get("gold");
                    cible.addGold(-value);
                    if (valueMin != undefined) this.addGold(Utils.rand(valueMin, steal, true));
                    else this.addGold(steal);
                    break;
            }
        };

        /**
        * Ajoute un montant a perdre ou gagner au buffer d'affichage
        **/
        this.addAmountChange = function(amount, type, element) {
            if (!element) element = "normal";
            this.amountBuffer.push({
                "amount" : amount,
                "type" : type,
                "element" : element
            });
        };

        /**
        * Affiche le prochain montant perdu ou gagné
        **/
        this.showNextAmount = function() {
            if (this.amountBuffer.length <= 0) return;
            var infos = this.amountBuffer[0];
            this.showAmountChange(infos.amount, infos.type, infos.element);
            this.amountBuffer.splice(0, 1);
        };

        /**
        * Animation representant la perte ou le gain d'un montant
        **/
        this.showAmountChange= function(amount, type, element) {
            var left = 0;
            switch (type) {
                case "abilitie":
                    break;
                case "life":
                    left = Utils.rand(10, 30, true);
                    if (amount < 0) {
                        this.showHurtScreen(element);
                        amount = amount + "pv";
                    } else if (amount == 0) {
                        element = "miss";
                        amount = this.Textes.get("rate");
                        left = 0;
                    } else amount = "+" + amount + "pv";
                break;
                case "mana":
                    if (amount > 0) amount = "+" + amount;
                    amount += "pm";
                    left = Utils.rand(35, 45, true);
                break;
                case "xp":
                    if (amount > 0) amount = "+" + amount;
                    amount += "xp";
                    left = Utils.rand(55, 65, true);
                break;
                case "gold":
                    if (amount > 0) amount = "+" + amount;
                    amount += "po";
                    left = Utils.rand(75, 85, true);
                break;
            }

            var degatsDom = $(".game hurts amountchanger:hidden:first");
            if (degatsDom.length > 0) {
                degatsDom.removeAttr("style");
                degatsDom.removeAttr("class");
                degatsDom.removeAttr("element");
            }else {
                degatsDom = $("<amountchanger><amount></amount></amountchanger>");
                $(".game hurts").append(degatsDom);
            }
            degatsDom.find("amount").html(amount);
            degatsDom.attr("class", type);
            degatsDom.attr("element", element);

            degatsDom.css({"margin-left" : left + "%"});
            degatsDom.show();
            degatsDom.animate({
                "top" : "-50%",
                "opacity" : "0"
            }, 4000, function() {
                degatsDom.hide();
            });
        };

        // Non uilisé
        this.showDegats = function() {
        };

        /**
        * Affiche le masque de prise de degats
        **/
        this.showHurtScreen = function(element) {
            var hurtDom = $(".game hurts").find("hurt." + element);
            if (hurtDom.length == 0) hurtDom = $(".game hurts hurt.normal");
            hurtDom.fadeIn(100, function() {
                hurtDom.fadeOut(200);
            });
        }

		this.init(parent);
	};
});