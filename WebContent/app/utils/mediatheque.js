'use strict';
define(["jquery", "app/utils/utils"], function($, Utils){
	return function(){
		this.sounds = [];
		this.soundsTicker = [];
		
		this.loadAll = function() {
			var list = [];
			for (var index in list) {
				var key = list[index];
				this.load(key);
			}
			
			this.isMuteMusic = window.localStorage.getItem(Utils.name + "Music");
			if (!this.isMuteMusic || this.isMuteMusic == "false") this.isMuteMusic = false;

			this.isMuteSound = window.localStorage.getItem(Utils.name + "Sound");
			if (!this.isMuteSound || this.isMuteSound == "false") this.isMuteSound = false;
		};
		
		/**
		* Permet de charger les sons
		**/
		this.load = function(key, id, callback) {
			if (!id) id = "";
			var sound;
			if (window.Audio)
				sound = new Audio("app/"+key);
			else
				sound = new HTMLAudioElement("app/"+key);
			sound.volume=1;
			if (key.indexOf("music") > -1) {
				sound.addEventListener('ended', function() {
					this.currentTime = 0;
					if (callback) callback();
					else this.play();
				}, false);
			}
			
			sound.load();
			this.sounds[key + id] = sound;
		};
		
		/**
		 * Joue le son et le creer s'il n'existe pas
		 */
		this.play = function(key, id, callback) {
			if (!key) return;
			if (!id) id = "";
			if (!this.sounds[key + id]) {
				this.load(key, id, callback);
			}
			try {
				if (key.indexOf("music") > -1) {
					this.currentMusic = key;
					if (this.isMuteMusic) {
						return;
					}
					this.stopAllMusic();
				}
				
				// Si c'est une music est qu'elle est deja en cours, on ne la relance pas
				if (key.indexOf("music") > -1 && 
						this.sounds[key].duration > 0 && 
						!this.sounds[key].paused) 
					return;
				this.sounds[key + id].play();
			}catch (e) {
				this.load(key, id);
			}
		};

		/**
		 * Joue le son et le creer s'il n'existe pas
		 */
		this.playSound = function(key) {
			if (!key) return;
			if (this.isMuteSound) return;
			if (this.soundsTicker[key] == undefined) this.soundsTicker[key] = 0;
			this.play("sounds/"+key, this.soundsTicker[key]++);
			if (this.soundsTicker[key] > 3) this.soundsTicker[key] = 0;
		};
		
		this.stopSound = function(key) {
			if (!key) return;
			this.stop("sounds/"+key);
		};
		
		this.stop = function(key) {
			if (!key) return;
			try {
				this.sounds[key].pause();
				this.sounds[key].currentTime = 0;
			}catch (e) {
				//this.load(key);
			}
		};
		
		this.stopAllMusic = function() {
			for (var index in this.sounds) {
				if (index.indexOf("music") > -1) {
					this.stop(index);
				}
			}
		};
		
		this.mute = function(type) {
			var musicOldState = this.isMuteMusic;
			switch(type) {
				case "all" :
					var allMute = this.isMuteMusic && this.isMuteSound;
					this.isMuteMusic = !allMute;
					this.isMuteSound = !allMute;
					break;
				case "music" :
					this.isMuteMusic = !this.isMuteMusic;
					break;
				case "sound" :
					this.isMuteSound = !this.isMuteSound;
					break;
				default:
					break;
			}
			
			window.localStorage.setItem(Utils.name + "Music", this.isMuteMusic);
			window.localStorage.setItem(Utils.name + "Sound", this.isMuteSound);
			
			if (musicOldState != this.isMuteMusic) {
				if (this.isMuteMusic) this.stopAllMusic();
				else this.play(this.currentMusic);
			}
		};

		this.isMute = function(type) {
            switch(type) {
                case "all" :
                    return this.isMuteMusic && this.isMuteSound;
                case "music" :
                    return this.isMuteMusic;
                case "sound" :
                    return this.isMuteSound;
                default:
                    break;
            }
        };
		
		this.loadAll();
	};
});