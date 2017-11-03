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
		
		this.login = function() {
			console.log("login");
			if (!this.isLoad) return;
			
			var that = this;
			this.kongregate.services.addEventListener('login', function(){
            	console.log('Kongregate username changed to: ' + that.kongregate.services.getUsername());
            	$(".username").html(that.kongregate.services.getUsername());
            	if (!that.kongregate.services.isGuest()) {
            		$("#login").addClass("hidden");
            	}
            });
			this.kongregate.services.showRegistrationBox();
		};
		
		this.init(Textes);
	};
});