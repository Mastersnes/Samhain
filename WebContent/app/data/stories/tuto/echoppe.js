'use strict';
define([], function() {
    var data = {
        /**
         * La petit echoppe
         */
        "echoppe" : {
            "textes" : ["echoppe-texte-1", "echoppe-texte-2"],
            "actions" : [
                {
                    "name" : "faire-achat", "action" : [
                        {"key" : "boutique", "params" : [[
                            "pomme", "fromage", "potionSante", "baton", "dague", "venin"
                        ], "echoppe-oui-fin", "echoppe-non-fin"]}
                    ]
                },
                {
                    "name" : "sen-aller", "action" : [
                        {"key" : "go", "params" : ["echoppe-non-fin"]}
                    ]
                }
            ]
        },
        "echoppe-oui-fin" : {
            "textes" : ["echoppe-oui-fin-texte-1"],
            "actions" : [
                {
                    "name" : "continuerButton", "action" : [
                        {"key" : "hasItem", "params" : [["helpRoi2"], "maraisRoi", "marais"]}
                    ]
                }
            ]
        },
        "echoppe-non-fin" : {
            "textes" : ["echoppe-non-fin-texte-1"],
            "actions" : [
             {
                 "name" : "continuerButton", "action" : [
                     {"key" : "hasItem", "params" : [["helpRoi2"], "maraisRoi", "marais"]}
                 ]
             }
            ]
        }
    };

    return {
        get : function(key) {
            return data[key];
        }
    };
});