'use strict';
define([],
function() {
    /**
    * Debut du didactitiel
    **/
    var data = {
        "didacticiel-start" : {
            "music" : "story1.ogg",
            "before" : function(histoire) {
                $("carnet").addClass("hide");
                $("loupe").addClass("hide");
            },
            "textes" : ["didacticiel-start-texte-1", "didacticiel-start-texte-2", "didacticiel-start-texte-3"
                , "didacticiel-start-texte-4"],
            "actions" : [
                {
                    "name" : "suivant",
                    "action" : [
                        {"key" : "go", "params" : [ "didacticiel-start2"]}
                    ]
                }
            ]
        },
        "didacticiel-start2" : {
            "before" : function(histoire) {
                $("carnet").addClass("hide");
                $("loupe").addClass("hide");
            },
            "textes" : ["didacticiel-start2-texte-1", "didacticiel-start2-texte-2", "didacticiel-start2-texte-3"
                , "didacticiel-start2-texte-4"],
            "actions" : [
                {
                    "name" : "quietesvous",
                    "action" : [
                        {"key" : "go", "params" : [ "didacticiel-presentation"]}
                    ]
                }
            ]
        },
        "didacticiel-presentation" : {
            "before" : function(histoire) {
                $("carnet").addClass("hide");
                $("loupe").addClass("hide");
            },
            "textes" : ["didacticiel-presentation-texte-1", "didacticiel-presentation-texte-2",
                "didacticiel-presentation-texte-3", "didacticiel-presentation-texte-4",
                "didacticiel-presentation-texte-5"],
            "actions" : [
                {
                    "name" : "left",
                    "action" : [
                        {"key" : "go", "params" : [ "didacticiel-gauche"]}
                    ]
                },
                {
                    "name" : "right",
                    "action" : [
                        {"key" : "go", "params" : [ "didacticiel-droite"]}
                    ]
                }
            ]
        }
    };
    return {
        get : function(key) {
            var result = data[key];
            return result;
        },
        list : function() {
            var keys = [];
            for (var i in data) {keys.push(i);}
            return keys;
        },
    };
});