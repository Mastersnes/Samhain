'use strict';
define([], function() {
    var data = {
        "debut-ville-start" : {
            "textes" : ["debut-ville-start-texte-1"],
            "actions" : [
                {
                    "name" : "suivant",
                    "action" : [
                        {"key" : "go", "params" : [ "???"]}
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