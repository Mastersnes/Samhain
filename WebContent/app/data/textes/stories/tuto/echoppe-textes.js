'use strict';
define([], function(){
	var data = {
        "echoppe-texte-1" : {
        	fr : "Alors que vous quittez le village, une drôle d'échoppe attire votre attention.",
        	en : "As you leave the village, a strange shop draws your attention.",
        	eo : "Kvankam vi forlasas la vilaĝon, stranga budo altiras vian atenton."
        },
        "echoppe-texte-2" : {
        	fr : "Après tout, pourquoi ne pas faire quelques achats&nbsp;?",
        	en : "After all, why not make some purchases?",
        	eo : "Nu, kial ne fari kelkajn aĉetadojn?"
        },
        "echoppe-oui-fin-texte-1" : {
        	fr : "Satisfait (ou non) de vos emplettes, vous pouvez désormais continuer votre aventure.",
        	en : "Satisfied (or not) with your shopping, you can now continue your adventure.",
        	eo : "Kontenta (aŭ ne) pri via aĉetaĵoj, vi nun povas daŭrigi vian aventuron."
        },
        "echoppe-non-fin-texte-1" : {
        	fr : "Vous continuez votre aventure les poches vides. C'est la crise pour tout le monde après tout&hellip;",
        	en : "You continue your adventure with empty pockets. It's the crisis for everyone after all&hellip;",
        	eo : "Vi daŭrigas vian aventuron la malplenajn poŝojn. Fifine, tio estas la krizo por ĉiuj&hellip;"
        }
	};
	
	return {
        name : function() {
            return "Echoppe.js";
        },
        children : function() {
            return [];
        },
        get : function(key) {
            return data[key];
        },
        list : function() {
            var keys = [];
            for (var i in data) {keys.push(i);}
            return keys;
        },
    };
});