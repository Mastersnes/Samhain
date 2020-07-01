'use strict';
define([
    "app/data/textes/stories/tuto/debut-textes",
    "app/data/textes/stories/tuto/nid-textes",
    "app/data/textes/stories/tuto/ferme-textes",
    "app/data/textes/stories/tuto/village-textes",
    "app/data/textes/stories/tuto/echoppe-textes",
    "app/data/textes/stories/tuto/crypte-textes",
], function(Debut, Nid, Ferme, Village, Echoppe, Crypte){
	var data = {
	};
	
	return {
        name : function() {
            return "Tuto.js";
        },
        children : function() {
            return [Debut, Nid, Ferme, Village, Echoppe, Crypte];
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