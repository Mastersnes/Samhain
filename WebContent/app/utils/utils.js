'use strict';
define(["jquery", "sha"], function($, sha){
	return {
		name : "bebelSamhainV2",
		MAX_GOLD : 9999,
		
		/**
		* Permet d'appeler un WS
		**/
		load : function(url, params, successC, type, asyncMode, errorFunc) {
			if (!type) type = "POST";
			if (!asyncMode) asyncMode = false;
			if (!errorFunc) {
			    errorFunc = function (request, status, errorThrown) {
                    console.log("Erreur lors de l'appel à : ", url);
                    console.log("Erreur sur : ", request, "avec le status", status, "erreur retournée :", errorThrown);
                };
			}

			console.log("Appel de l'url", url, "avec les parametres", params, "en mode", type, "en async", asyncMode);

			$.ajax({
	            type: type,
	            url: url,
	            async : asyncMode,
	            data: JSON.stringify(params),
	            contentType: "application/json; charset=utf-8",
	            dataType: "json",
	            success: successC,
	            error: errorFunc
	        });
		},

		// Max non inclus
		rand : function(pMin, pMax, maxInclude) {
		  if (maxInclude) pMax++;
		  var min = Math.ceil(pMin);
		  var max = Math.floor(pMax);
		  return Math.floor(Math.random() * (max - min)) + min;
		},

		then : function(callback, timeout) {
		    if (!timeout) timeout = 1000;
		    setTimeout(function() {
		        if (callback && callback.call) callback.call();
		    }, timeout);
		},

		encode : function(data) {
			return btoa(data);
		},
		
		decode : function(str) {
			return atob(str);
		},

		decodeHtml : function(str) {
			var fake = $("<textarea>");
			fake.html(str);
			var txt = fake.text();

			txt = txt.replace(/<\/(text)>$/g, "");
			txt = txt.replace(/<\/(text)>/g, " ");
			txt = txt.replace(/<\/(br)>/g, " ");
			txt = txt.replace(/<\/?[^>]+(>|$)/g, "");
			return txt;
		},

		replaceAll : function(str, str1, str2) {
		    var result = str;
		    while (result.indexOf(str1) > -1) {
		        result = result.replace(str1, str2);
		    }
		    return result;
		},
		hash : function(str) {
			str = "JHGKJHGjhkgkhjgxcvkjgKHJGJH4455456s4dfsdfkhgHJKGJHGdckldsjvkljklLHKH54654" + str + "sdfqsHJGKJGHG5465564HJGHJFJHGJHG23465dfgdfg34654GHFHGF";
			return sha.sha256(str);
		},
		percent : function(value, percentage, base) {
			if (!base) base = 100;
			return (value * percentage)/base;
		},
        toPercent : function(value, base) {
        	return (value * 100)/base;
        },
		clone : function(value) {
		    if (value == undefined) return value;
			return $.extend(true, {}, value);
		},
		normalize : function(texte) {
		    var newText = texte.toLowerCase();
		    newText = newText.replace(/[áàâäåãæ]/g, "a");
		    newText = newText.replace(/[çĉ]/g, "c");
		    newText = newText.replace(/[éèêë]/g, "e");
		    newText = newText.replace(/[ĝ]/g, "g");
		    newText = newText.replace(/[ĥ]/g, "h");
		    newText = newText.replace(/[íìîï]/g, "i");
		    newText = newText.replace(/[ĵ]/g, "j");
		    newText = newText.replace(/[ñ]/g, "n");
		    newText = newText.replace(/[óòôöøœ]/g, "o");
		    newText = newText.replace(/[ŝšß]/g, "s");
		    newText = newText.replace(/[ŭùûü]/g, "u");
		    newText = newText.replace(/[ýÿ]/g, "y");
		    newText = newText.replace(/[ž]/g, "z");

		    newText = newText.replace(/[\u0300-\u036f]/g, "");
		    return newText;
		},
		pow : function(multiple, base, puissance) {
        	return Math.round(multiple * Math.pow(base, puissance));
        },
        contains : function(tab, key) {
            return tab.indexOf(key) > -1;
        },
        count : function(tab, key) {
            var nb = 0;
            for (var i in tab) {
                if (tab[i] == key) nb++;
            }
            return nb;
        },
        fullscreen : function() {
            try {
	        	var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
	                (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
	                (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
	                (document.msFullscreenElement && document.msFullscreenElement !== null);
	
	            var docElm = document.documentElement;
	            if (!isInFullScreen) {
	                if (docElm.requestFullscreen) {
	                    docElm.requestFullscreen();
	                } else if (docElm.mozRequestFullScreen) {
	                    docElm.mozRequestFullScreen();
	                } else if (docElm.webkitRequestFullScreen) {
	                    docElm.webkitRequestFullScreen();
	                } else if (docElm.msRequestFullscreen) {
	                    docElm.msRequestFullscreen();
	                }
	            } else {
	                if (document.exitFullscreen) {
	                    document.exitFullscreen();
	                } else if (document.webkitExitFullscreen) {
	                    document.webkitExitFullscreen();
	                } else if (document.mozCancelFullScreen) {
	                    document.mozCancelFullScreen();
	                } else if (document.msExitFullscreen) {
	                    document.msExitFullscreen();
	                }
	            }
	            
	            return isInFullScreen;
            }catch(e) {
            	console.log("Erreur lors du toggle fullscreen");
            }
        }
	};
});