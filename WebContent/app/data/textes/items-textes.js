'use strict';
define([
    "app/data/textes/items/armes-textes",
    "app/data/textes/items/armures-textes",
    "app/data/textes/items/consos-textes",
    "app/data/textes/items/magies-textes",
    "app/data/textes/items/clefs-textes",
], function(Armes, Armures, Consos, Magies, Clefs){
	var data = {
	};
	
	return {
	    name : function() {
            return "Items.js";
        },
        children : function() {
            return [Armes, Armures, Consos, Magies, Clefs];
        },
        get : function(key) {
            var text = data[key];
            var children = this.children();
            for (var i in children) {
                if (!text) text = children[i].get(key);
                else continue;
            }
            return text;
        },
        list : function() {
            var keys = [];
            for (var i in data) {keys.push(i);}
            return keys;
        }
    };
});