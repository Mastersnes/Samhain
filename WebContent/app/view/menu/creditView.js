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

        this.refreshTextes = function() {
            this.el.find("#studio .title").html(this.Textes.get("studio-credits"));
            this.el.find("#creation .title").html(this.Textes.get("creation-credits"));
            this.el.find("#directeurArtistique .title").html(this.Textes.get("DA-credits"));
            this.el.find("#conceptArt .title").html(this.Textes.get("CA-credits"));
            this.el.find("#graphisme .title").html(this.Textes.get("graphist-credits"));
            this.el.find("#animation .title").html(this.Textes.get("animation-credits"));
            this.el.find("#gameDesign .title").html(this.Textes.get("gameDesign-credits"));
            this.el.find("#programming .title").html(this.Textes.get("programming-credits"));
            this.el.find("#levelDesign .title").html(this.Textes.get("levelDesign-credits"));
            this.el.find("#compositeur .title").html(this.Textes.get("musiques-credits"));
            this.el.find("#soundDesigner .title").html(this.Textes.get("sound-credits"));
            this.el.find("#texte .title").html(this.Textes.get("texte-credits"));
            this.el.find("#correction .title").html(this.Textes.get("correction-credits"));
            this.el.find("#traduction .title").html(this.Textes.get("traduction-credits"));
            this.el.find("#traductionEo .title").html(this.Textes.get("traduction-eo-credits"));
            this.el.find("#community .title").html(this.Textes.get("community-credits"));
            this.el.find("#beta .title").html(this.Textes.get("beta-credits"));
            this.el.find("#merci .title").html(this.Textes.get("merci-credits"));
            this.el.find("#merci .suiveurs").html(this.Textes.get("suiveurs-thx-credits"));
            this.el.find("#merci .betas").html(this.Textes.get("beta-thx-credits"));
            this.el.find("#merci .animalux").html(this.Textes.get("animalux-thx-credits"));
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
                    that.mediatheque.playSound("ui/fermerPopup.wav");
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