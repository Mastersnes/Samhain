/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils"
        ],
function($, _, Utils) {
	'use strict';

	return function(kongregateUtils) {
	    this.init = function(kongregateUtils) {
			this.el = "";
			this.kongregateUtils = kongregateUtils;

			this.initSaveData();
		};

		/**
		 * Initialise les données de sauvegarde pour une premiere partie
		 */
		this.initSaveData = function() {
			this.loaded = false;
			this.saveData = {
			    "player" : {
			        "life" : {
			            "current" : 150,
			            "max" : 150
			        },
			        "mana" : {
			            "current" : 0,
			            "max" : 0
			        },
                    "unlockMana" : false,

			        "buff" : null,
			        "debuff" : null,
			        "xp" : 0,
			        "level" : 0,
			        "gold" : 0,

			        "attaque" : 1,
			        "defense" : 0,

			        "equipment" : {
			            "arme" : ["poing"],
			            "currentArme" : "poing",
			            "bouclier" : ["bras"],
			            "currentBouclier" : "bras",
			            "magie" : [],
			            "conso" : [],
			            "clef" : [],
			            "ifObj" : []
			        },
                    "lieu" : "tuto-start",
                    "savesData" : {},

                    "currentQuest" : {
                        "name" : null,
                        "step" : 0
                    },
                    "quetesComplete" : []
			    },
                "success" : {
                    "successComplete" : []
                }
            };

            this.gameOptions = window.localStorage.getItem(Utils.name + "Options");
            if (!this.gameOptions) {
                this.gameOptions = {
                    "selectAuto" : true,
                    "cibleUnique" : false
                };
            }else this.gameOptions = JSON.parse(this.gameOptions);

            this.traductions = window.localStorage.getItem(Utils.name + "Traductions");
            if (!this.traductions) {
                this.traductions = {
                    "modified" : {},
                    "toSend" : {}
                };
            }else this.traductions = JSON.parse(this.traductions);
		};

		this.setOption = function(key, value) {
		    this.gameOptions[key] = value;
		    window.localStorage.setItem(Utils.name + "Options", JSON.stringify(this.gameOptions));
		};
		this.getOption = function(key) {
		    return this.gameOptions[key];
		};
		this.options = function() {
		    return this.gameOptions;
		};

		this.deleteTrad = function(key, lang) {
		    if (this.traductions.modified[key] && this.traductions.modified[key][lang]) {
		        delete this.traductions.modified[key][lang];
		    }
		    if (this.traductions.toSend[key] && this.traductions.toSend[key][lang]) {
		        delete this.traductions.toSend[key][lang];
		    }

		    this.nettoyage(this.traductions.modified);
		    this.nettoyage(this.traductions.toSend);
		    window.localStorage.setItem(Utils.name + "Traductions", JSON.stringify(this.traductions));
		};

		this.nettoyage = function(trad) {
		    for (var i in trad) {
		        if (!trad[i]["fr"] && !trad[i]["en"] && !trad[i]["eo"])
		            delete trad[i];
		    }
		}

		this.addTrad = function(key, lang, text, notSend) {
		    if (!this.traductions.modified[key]) this.traductions.modified[key] = {};
		    this.traductions.modified[key][lang] = text;

            if (!notSend) {
                if (!this.traductions.toSend[key]) this.traductions.toSend[key] = {};
                this.traductions.toSend[key][lang] = text;
		    }

		    window.localStorage.setItem(Utils.name + "Traductions", JSON.stringify(this.traductions));
		};
		this.myTrad = function(key, lang) {
		    var trads = this.traductions.modified;
		    if (trads[key]) return trads[key][lang];
		    else return null;
		};
		this.sendTrad = function() {
		    var newTrad = Utils.encode(JSON.stringify(this.traductions.toSend));
		    var request = {
                "username" : "",
                "secretPass" : Utils.hash("Samhain4842"),
                "newTrad" : newTrad
            };
            Utils.load("https://bebel-server.herokuapp.com/samhain/sendTrad", request, function(data, status) {
                console.log("Succes de l'envoi de la nouvelle traduction avec le status", status);
                that.traductions.toSend = {};
                window.localStorage.setItem(Utils.name + "Traductions", JSON.stringify(that.traductions));
            }, "POST", false, function() {
                // Ajouter le cas d'erreur
            });
		};

		/**
		 * Renvoi la sauvegarde
		 */
		this.getSave = function() {
	        if (!this.loaded) return null;
			return this.saveData;
		};

		/**
		 * Permet de savoir si il existe une partie a charger
		 */
		this.checkSave = function() {
			this.saveSession = window.localStorage.getItem(Utils.name);
			if (!this.saveSession) {
			    var username = this.kongregateUtils.username;
			    if (this.kongregateUtils.isLoad && username) {
                    var that = this;
                    var request = {
                        "username" : username,
                        "secretPass" : Utils.hash("Samhain4842" + username)
                    };
                    Utils.load("https://bebel-server.herokuapp.com/samhain/getSave", request, function(data, status) {
                        console.log("Succes de la recuperation de la sauvegarde", data, "avec le status", status);
                        that.saveSession = data.data;
                    });
			    }
			}
			return this.saveSession != null;
		};

		/**
		 * Permet de charger la sauvegarde en memoire
		 */
		this.loadSave = function() {
	        if (this.saveSession) {
	            this.loaded = true;
	        	this.saveData = JSON.parse(Utils.decode(this.saveSession));
                //Les succes sont rejoué dans le recompense manager
	        }
		};

		/**
		 * Permet de sauvegarder en memoire
		 */
		this.saveInSession = function() {
			var saveJeton = Utils.encode(JSON.stringify(this.saveData));
		    window.localStorage.setItem(Utils.name, saveJeton);
		};
		this.saveInCloud = function() {
			var saveJeton = Utils.encode(JSON.stringify(this.saveData));
		    var username = this.kongregateUtils.username;
            if (this.kongregateUtils.isLoad && username) {
                var that = this;
                var request = {
                    "username" : username,
                    "secretPass" : Utils.hash("Samhain4842" + username),
                    "data" : saveJeton
                };
                //loadAsync
                Utils.load("https://bebel-server.herokuapp.com/samhain/save", request, null, "POST", true);
            }
		};

		/**
		 * Supprime la partie sauvegardée
		 */
		this.eraseSave = function() {
			this.initSaveData();
		    window.localStorage.removeItem(Utils.name);
		};

		/**
		 * Permet de sauvegarder un attribut
		 */
		this.save = function(key, value) {
			this.saveData[key] = value;
		};

		/**
		 * Permet de charger un attribut
		 */
		this.load = function(key) {
			return this.saveData[key];
		};

		this.init(kongregateUtils);
	};
});