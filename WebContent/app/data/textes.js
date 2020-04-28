'use strict';
define([
    "app/data/textes/menu-textes",
    "app/data/textes/options-textes",
    "app/data/textes/credits-textes",
    "app/data/textes/ui-textes",
    "app/data/textes/jeuGarde-textes",
    "app/data/textes/glossaire-textes",
    "app/data/textes/inventaire-textes",
    "app/data/textes/etats-textes",
    "app/data/textes/monstres-textes",
    "app/data/textes/suffixes-textes",
    "app/data/textes/items-textes",
    "app/data/textes/stories-textes"
], function(Menu, Options, Credits, UI, JeuGarde, Glossaire, Inventaire, Etats, Monstres, Suffixes, Items, Stories){
	var data = {
	};
	
	return {
        local : null,

        get : function(key) {
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

            var text = data[key];
            if (!text) text = Menu.get(key);
            if (!text) text = Options.get(key);
            if (!text) text = Credits.get(key);
            if (!text) text = UI.get(key);
            if (!text) text = JeuGarde.get(key);
            if (!text) text = Glossaire.get(key);
            if (!text) text = Inventaire.get(key);
            if (!text) text = Etats.get(key);
            if (!text) text = Monstres.get(key);
            if (!text) text = Suffixes.get(key);
            if (!text) text = Items.get(key);
            if (!text) text = Stories.get(key);
            if (!text) return key;

            if (text[this.local]) return text[this.local];
            else if (text.en) return text.en;
            else return key;
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
        }
    };
});