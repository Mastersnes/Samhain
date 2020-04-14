'use strict';
define(["jquery", "underscore",
        "app/utils/utils",
        "app/utils/viewUtils",
        "text!app/template/menu/popup/credit.html"
        ], function($, _, Utils, ViewUtils, page){
    return function(parent){
        this.init = function(parent) {
        	this.el = $(".credit-popup");

            this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;

            // Manager
            this.saveManager = parent.saveManager;

            this.render();
            this.el.hide();
        };

        this.render = function() {
            _.templateSettings.variable = "data";
            var template = _.template(page);
            var templateData = {
                    text : this.Textes
            };
            this.el.html(template(templateData));

            this.makeEvents();
        };

        /**
        * Montre les options
        **/
        this.show = function() {
            this.restartText();
            this.el.fadeIn();
        };

        this.restartText = function() {
            this.stopText();
            this.el.find("textes").css("top", "98%");
            this.resumeText();
        };
        this.pauseText = function() {
            this.el.find("textes").stop(true, false);
        };
        this.stopText = function() {
            this.remaining = 80*1000;
            this.el.find("textes").finish();
        };
        this.resumeText = function() {
            var that = this;
            this.el.find("textes").stop(true, false).animate({"top" : "-348%"},
            {
                duration : that.remaining,
                easing : "linear",
                progress: function(animation, progress, msRemaining) {
                    that.remaining = msRemaining;
                },
                complete: function() {
                    that.stopText();
                    that.restartText();
                }
            });
        };

        this.makeEvents = function() {
            var that = this;
            this.el.find(".canClose").click(function(e) {
                var target = $(e.target);
                if (target.hasClass("canClose")) {
                    that.el.fadeOut();
                    that.stopText();
                }
            });

            this.el.find("textes").hover(function(e) {
                that.pauseText();
            }, function(e) {
                that.resumeText();
            });

            this.el.find("reseau#twitter").click(function(e) {
                window.open("https://twitter.com/lesjeuxdebebel", "_blank");
            });
            this.el.find("reseau#kofi").click(function(e) {
                window.open("https://ko-fi.com/lesjeuxdebebel", "_blank");
            });
            this.el.find("reseau#instagram").click(function(e) {
                window.open("https://www.instagram.com/lesjeuxdebebel/", "_blank");
            });

            this.el.find("text#studio").click(function(e) {
                window.open("https://twitter.com/lesjeuxdebebel", "_blank");
            });
            this.el.find("text#directeurArtistique, text#graphisme, text#animation").click(function(e) {
                window.open("https://twitter.com/AVNesztler", "_blank");
            });
            this.el.find("text#conceptArt").click(function(e) {
                window.open("https://www.artstation.com/avnesztler", "_blank");
            });
            this.el.find("text#compositeur").click(function(e) {
                window.open("https://lesjeuxdebebel.bandcamp.com/releases", "_blank");
            });
        };

        this.init(parent);
    };
});