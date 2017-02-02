'use strict';
define(["jquery", "app/utils/utils"], function($, Utils){
	return function(){
		this.sounds = [];
		
		this.loadAll = function() {
			var listeSound;
			listeSound = ["acide", "baton", "block", "bouleFeu", "croc", "dagguer", 
			                  "door", "drink", "eat", "erreur", "ironblock", "punch", 
			                  "soin", "sword", "woodblock"];
			for (var index in listeSound) {
				var key = listeSound[index];
				if (!this.sounds[key]) {
					this.load(listeSound[index]);
				}
			}
		};
		
		/**
		* Permet de charger les sons
		**/
		this.load = function(key) {
			var sound = document.createElement('audio');
			sound.type= 'audio/wav';
			sound.src = "app/sound/"+key+".wav";
			this.sounds[key] = sound;
		};
		
		/**
		 * Joue le son et le creer s'il n'esiste pas
		 */
		this.play = function(key) {
			if (!key) return;
			if (!this.sounds[key]) {
				console.log("Never pass!");
				this.load(key);
			}
			this.sounds[key].play();
		};
		
		this.loadAll();
	};
});