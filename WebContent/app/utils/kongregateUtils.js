'use strict';
define(["jquery", "app/utils/utils", "app/data/kongregateStats", "kongregate"], function($, Utils, Stats){
	return function(Textes){
		this.init = function(Textes) {
			this.Textes = Textes;
			this.isLoad = false;
			this.username = null;
			this.isGuest = true;
		};
		
		this.load = function(callback) {
			var that = this;
            kongregateAPI.loadAPI(function(){
			    that.isLoad = true;
			    console.log("Sur Kongregate");
            	that.kongregate = kongregateAPI.getAPI();
            	that.makeEvents();
			    callback.call();
			});
		};
		
		this.render = function() {
			if (!this.isLoad) return;
		};
		
		this.score = function(key, value) {
		    console.log("Tentative d'ajout de score");
			if (!this.isLoad) return;
			
			value = this.redresseInt(value);

			console.log("Ajout du score", key, value);
			this.kongregate.stats.submit(key, value);
		};
		
		this.redresseInt = function(val) {
			if (!val) return 0;
			if (val > Math.pow(10, 15)) return Math.pow(10, 15);
			return val;
		};
		
		this.getScore = function(key) {
			var that = this;
			var statId = Stats.get(key);
			if (!(this.isLoad && this.username && statId)) return null;
			
			Utils.load("https://api.kongregate.com/api/high_scores/lifetime/"+statId+".json", null, function(data) {
				if (!data) return null;
				for (var index in data.lifetime_scores) {
					var scoreData = data.lifetime_scores[index];
					if (scoreData.username == that.username) {
						return scoreData.score;
					}
				}
				return null;
			});
		};
		
		this.makeEvents = function() {
			var that = this;
			this.kongregate.services.addEventListener('login', function(){
				that.resolve();
            	that.render();
            });
            this.resolve();
            this.render();
		};
		
		this.resolve = function() {
			this.username = this.kongregate.services.getUsername();
        	this.isGuest = this.kongregate.services.isGuest();
        	if (this.isGuest == null || this.isGuest == undefined) this.isGuest = true;
        	console.log('Kongregate username changed to: ' + this.username);
		};
		
		this.login = function() {
			if (!this.isLoad) return;
			if (!this.isGuest) return;
			
			this.kongregate.services.showRegistrationBox();
		};
		
		this.init(Textes);
	};
});