'use strict';
define([
    "app/utils/utils",
    "app/data/textes/menu-textes",
    "app/data/textes/options-textes",
    "app/data/textes/credits-textes",
    "app/data/textes/traductions-textes",
    "app/data/textes/ui-textes",
    "app/data/textes/jeuGarde-textes",
    "app/data/textes/boutique-textes",
    "app/data/textes/glossaire-textes",
    "app/data/textes/inventaire-textes",
    "app/data/textes/etats-textes",
    "app/data/textes/monstres-textes",
    "app/data/textes/suffixes-textes",
    "app/data/textes/items-textes",
    "app/data/textes/stories-textes"
], function(Utils, Menu, Options, Credits, Traductions, UI, JeuGarde, Boutique, Glossaire, Inventaire, Etats, Monstres, Suffixes, Items, Stories){
	var data = {
	};
	
	return {
        local : null,
        saveManager : null,

        loadLocal : function() {
            if (!this.local) {
                this.local = navigator.language || navigator.userLanguage;
                if (this.local) {
                    this.local = this.local.toLowerCase();
                    if (this.local.indexOf("fr") > -1) this.local = "fr";
                    else if (this.local.indexOf("en") > -1) this.local = "en";
                    else if (this.local.indexOf("eo") > -1) this.local = "eo";
                }else {
                    this.local = "en";
                }
            }
            return this.local;
        },

        name : function() {
            return "Textes.js";
        },
        children : function() {
            return [Menu, Options, Credits, Traductions, UI, JeuGarde, Boutique, Glossaire, Inventaire, Etats, Monstres, Suffixes, Items, Stories];
        },

        get : function(key, forceLang, notMyTrad) {
            this.loadLocal();

            var local = forceLang;
            if (!local) local = this.local;

            if (this.saveManager && !notMyTrad) {
                var trad = this.saveManager.myTrad(key, local);
                if (trad) return trad;
            }

            var text = data[key];
            var children = this.children();
            for (var i in children) {
                if (!text) text = children[i].get(key);
                else continue;
            }
            if (!text) return key;

            if (text[local]) return text[local];
            else if (text.en) return text.en;
            else return key;
        },

        list : function() {
            var keys = [];
            for (var i in data) {keys.push(i);}
            return keys;
        },

        setSaveManager : function(manager) {
            this.saveManager = manager;
        },

        /**
        * Permet de charger le language en session
        **/
        loadLanguage : function() {
            var sessionLanguage = window.localStorage.getItem("bebelLanguage");
            if (sessionLanguage) this.local = sessionLanguage;
        },

        /**
        * Permet de modifier le language en session
        **/
        setLanguage : function(newLanguage) {
            window.localStorage.setItem("bebelLanguage", newLanguage);
            this.local = newLanguage;
        }
    };
});