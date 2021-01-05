'use strict';
define(["jquery", "app/utils/utils"], function($, Utils){
	var data = {
		"araignee" : {
			"name" : "araignee",
			"texte" : "araignee-texte",
            "attaque" : [1, 1],
            "defense" : [0, 0],
            "vie" : [3, 3],
            "mana" : [0, 3],
            "xp": [1, 3],
            "argent" : [10, 20],
            "sexe" : "f",
            "dieSound" : "morts/mortAraignee",
            "abilities" : ["morsure"]
		},
		"bandit" : {
			"name" : "bandit",
			"texte" : "bandit-texte",
            "attaque" : [2, 3],
            "defense" : [0, 0],
            "vie" : [10, 10],
            "mana" : [1, 3],
            "xp" : [2, 5],
            "argent" : [15, 30],
            "sexe" : "m",
            "dieSound" : "morts/mortHumain",
            "abilities" : ["voler", "doubleAttaque"]
		},
		"roiAraignee" : {
			"name" : "roiAraignee",
			"texte" : "roiAraignee-texte",
            "attaque" : [5, 12],
            "defense" : [0, 0],
            "vie" : [100, 100],
            "mana" : [5, 10],
            "xp" : [5, 20],
            "argent" : [50, 100],
            "sexe" : "m",
            "dieSound" : "morts/mortAraignee",
            "abilities" : ["araneisme", "pondreAraignee"],
            "type": "boss",
            "baseSuffixe" : "blesse"
		},
		"goule" : {
			"name" : "goule",
			"texte" : "goule-texte",
            "attaque" : [3, 5],
            "defense" : [0, 0],
            "vie" : [10, 10],
            "mana" : [2, 5],
            "xp" : [3, 6],
            "argent" : [20, 40],
            "sexe" : "f",
            "dieSound" : "morts/mortGoule",
            "abilities" : ["morsure", "cannibalisme"]
		},
		"garde": {
			"name" : "garde",
			"texte" : "garde-texte",
            "attaque" : [3, 6],
            "defense" : [0, 0],
            "vie" : [20, 20],
            "mana" : [2, 5],
            "xp" : [3, 10],
            "argent" : [20, 50],
            "sexe" : "m",
            "dieSound" : "morts/mortHumain",
            "abilities" : ["doubleAttaque", "taillade"]
		},
		"villageois": {
			"name" : "villageois",
			"texte" : "villageois-texte",
            "attaque" : [1, 2],
            "defense" : [0, 0],
            "vie" : [5, 5],
            "mana" : [1, 3],
            "xp" : [1, 5],
            "argent" : [10, 20],
            "sexe" : "m",
            "dieSound" : "morts/mortHumain",
            "abilities" : ["doubleAttaque"]
		},
		"grosseGoule": {
			"name" : "grosseGoule",
			"texte" : "grosseGoule-texte",
            "attaque" : [3, 5],
            "defense" : [0, 0],
            "vie" : [30, 30],
            "mana" : [3, 6],
            "xp" : [4, 12],
            "argent" : [30, 50],
            "sexe" : "f",
            "dieSound" : "morts/mortGoule",
            "abilities" : ["morsure", "doubleAttaque", "cannibalisme"]
		}, 
		"squelette": {
			"name" : "squelette",
			"texte" : "squelette-texte",
            "attaque" : [3, 10],
            "defense" : [0, 0],
            "vie" : [8, 8],
            "mana" : [2, 3],
            "xp" : [3, 10],
            "argent" : [15, 30],
            "sexe" : "m",
            "dieSound" : "morts/mortSquelette",
            "abilities" : ["doubleAttaque", "taillade"],
            "suffixes" : ["manchot"]
		}, 
		"experience": {
			"name" : "experience",
			"texte" : "experience-texte",
            "attaque" : [5, 10],
            "defense" : [0, 0],
            "vie" : [40, 40],
            "mana" : [3, 7],
            "xp" : [5, 15],
            "argent" : [20, 50],
            "sexe" : "f",
            "dieSound" : "morts/mortExperience",
            "abilities" : ["morsure", "doubleAttaque", "cannibalisme"]
		}, 
		"necromancien": {
			"name" : "necromancien",
			"texte" : "necromancien-texte",
            "attaque" : [5, 10],
            "defense" : [0, 0],
            "vie" : [100, 100],
            "mana" : [10, 15],
            "xp" : [5, 20],
            "argent" : [0, 0],
            "sexe" : "m",
            "dieSound" : "morts/mortNecrom",
            "abilities" : ["volDeVie", "bouleFeu", "invoqueGoule"],
            "type" : "boss",
            "baseSuffixe" : "lancien",
            "suffixes" : ["lancien"]
		}, 
		"liche": {
			"name" : "liche",
			"texte" : "liche-texte",
            "attaque" : [6, 12],
            "defense" : [0, 0],
            "vie" : [150, 150],
            "mana" : [10, 20],
            "xp" : [10, 30],
            "argent" : [100, 150],
            "sexe" : "f",
            "dieSound" : "morts/mortLiche",
            "abilities" : ["volDeVie", "volDeMana", "bouleFeu", "invoqueGrosseGoule"],
            "type" : "boss",
            "baseSuffixe" : "spectral",
            "suffixes" : ["spectral"]
		},
		"roiBandit" : {
            "name" : "roiBandit",
            "texte" : "roiBandit-texte",
            "attaque" : [5, 15],
            "defense" : [0, 1],
            "vie" : [150, 150],
            "mana" : [5, 10],
            "xp" : [5, 20],
            "argent" : [100, 150],
            "sexe" : "m",
            "dieSound" : "morts/mortHumain",
            "abilities" : ["voler", "doubleAttaque", "taillade"],
            "type" : "boss",
            "consos" : ["fromage"],
            "action" : function(monster) {
                var life = monster.get("life");
                var percentLife = Utils.toPercent(life.current, life.max);
                if (percentLife < 30) {
                    if (monster.has("fromage")) return monster.use("fromage");
                }
                return false;
            }
        },
	};
	
	return {
		get : function(key) {
			return Utils.clone(data[key]);
		},

		list : function(letters, Textes, stopAtFirst) {
            var resultats = [];
            if (Array.isArray(letters)) {
                for (var i in letters) {
                    var subResult = this.list(letters[i], Textes, stopAtFirst);
                    resultats = resultats.concat(subResult);

                    // Amelioration des perf
                    if (stopAtFirst && resultats.length > 0) return resultats;
                }
            }else {
                var letter = letters;
                for (var monster in data) {
                    var monsterName = Utils.normalize(Textes.get(monster));
                    if(monsterName.indexOf(letter, 0) === 0) resultats.push(monster);

                    // Amelioration des perf
                    if (stopAtFirst && resultats.length > 0) return resultats;
                }
            }
            return resultats;
        }
	};
});