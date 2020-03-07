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
                    "lieu" : "quete1-start"
			    },
                "success" : {
                    "successComplete" : [],

                    "TutoComplete" : false,
                    "GameStart" : false,
                    "MaxGoldEarn" : 0,
                    "HelpSpider" : false,
                    "HelpTown" : false,
                    "KillSpider" : false,
                    "Leak" : false,
                    "LearnHeal" : false,
                    "LearnCure" : false,
                    "MaxLevelEarn" : 1,
                    "NoChance" : false,
                    "SaveChild" : false,
                    "Traitor" : false,
                    "TraitorSpider" : false,
                    "Treasure" : false
                }
            };

            this.gameOptions = window.localStorage.getItem(Utils.name + "Options");
            if (!this.gameOptions) {
                this.gameOptions = {
                    "selectAuto" : true
                };
            }else this.gameOptions = JSON.parse(this.gameOptions);
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

                //On rejout les succes à ce moment
                var success = this.load("success");
                this.kongregateUtils.score("Gold", success["MaxGoldEarn"]);
                this.kongregateUtils.score("Level", success["MaxLevelEarn"]);

                if (success["TutoComplete"]) this.kongregateUtils.score("TutoComplete", 1);
                if (success["GameStart"]) this.kongregateUtils.score("GameStart", 1);
                if (success["HelpSpider"]) this.kongregateUtils.score("HelpSpider", 1);
                if (success["HelpTown"]) this.kongregateUtils.score("HelpTown", 1);
                if (success["KillSpider"]) this.kongregateUtils.score("KillSpider", 1);
                if (success["Leak"]) this.kongregateUtils.score("Leak", 1);
                if (success["LearnHeal"]) this.kongregateUtils.score("LearnHeal", 1);
                if (success["LearnCure"]) this.kongregateUtils.score("LearnCure", 1);
                if (success["NoChance"]) this.kongregateUtils.score("NoChance", 1);
                if (success["SaveChild"]) this.kongregateUtils.score("SaveChild", 1);
                if (success["Traitor"]) this.kongregateUtils.score("Traitor", 1);
                if (success["TraitorSpider"]) this.kongregateUtils.score("TraitorSpider", 1);
                if (success["Treasure"]) this.kongregateUtils.score("Treasure", 1);
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