'use strict';
define(["jquery", "kongregate"], function($){
	return function(Textes){
		this.init = function(Textes) {
			this.Textes = Textes;
			this.isLoad = false;
		};
		
		this.load = function(callback) {
			var that = this;
            kongregateAPI.loadAPI(function(){
			    that.isLoad = true;
            	that.kongregate = kongregateAPI.getAPI();
			    callback.call();
			});
		};
		
		this.render = function() {
			if (!this.isLoad) return;
			
			var isGuest = this.kongregate.services.isGuest();
			var username = this.kongregate.services.getUsername();
			if (isGuest) username = this.Textes.get("guest");
			
			$(".username").html(this.Textes.get("bienvenue") + " " + username);
			
			$(".username").removeClass("hidden");
			if (isGuest) $("#login").removeClass("hidden");
			else $("#login").addClass("hidden");
		};
		
		this.score = function(key, value) {
			console.log("score", key, value);
			if (!this.isLoad) return;
			
			this.kongregate.stats.submit(key, value);
		};
		
		this.init(Textes);
	};
});