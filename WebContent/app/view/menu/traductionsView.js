'use strict';
define(["jquery", "underscore",
        "app/utils/utils",
        "app/utils/viewUtils",
        "text!app/template/menu/popup/traductions.html"
        ], function($, _, Utils, ViewUtils, page){
    return function(parent){
        this.init = function(parent) {
        	this.el = $(".traductions-popup");

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

        this.show = function() {
            this.refreshTrads();
            this.el.fadeIn();
        };

        this.refreshTextes = function() {
            this.el.find("langages span.source").html(this.Textes.get("traduction-source"));
            this.el.find("langages span.cible").html(this.Textes.get("traduction-cible"));
            this.el.find("langages option[name='fr']").html(this.Textes.get("french"));
            this.el.find("langages option[name='en']").html(this.Textes.get("english"));
            this.el.find("langages option[name='eo']").html(this.Textes.get("esperanto"));
            this.el.find("boutons #send").html(this.Textes.get("traduction-submit"));
        };

        this.refreshTrads = function() {
            var textes = this.Textes.listAll();
            var sourceLang = this.el.find("select#sources option:selected").attr("name");
            var cibleLang = this.el.find("select#cibles option:selected").attr("name");

            this.el.find("textes").empty();
            for (var i in textes) {
                var key = textes[i];

                var groupDom = $("<text><span></span>&nbsp;:&nbsp;<input type='text'/></text>");
                this.el.find("textes").append(groupDom);

                groupDom.attr("name", key);

                var source = this.Textes.get(key, sourceLang, sourceLang != cibleLang);
                source = Utils.decodeHtml(source);
                var sourceDom = groupDom.find("span").html("'" + source + "'");

                var cible = this.saveManager.myTrad(key, cibleLang);
                if (cible) groupDom.addClass("verify");
                else cible = this.Textes.get(key, cibleLang);
                var cibleTxt = Utils.decodeHtml(cible);
                var cibleDom = groupDom.find("input").attr("value", cibleTxt);

                if (sourceDom.text().length > 40 || cibleTxt.length > 40) {
                    groupDom.addClass("large");
                }
            }

            this.makeTextEvent();
        };

        this.makeTextEvent = function() {
            var that = this;
            this.el.find("textes text input").keypress(function() {
                $(this).parent().addClass("verify");
            });
            this.el.find("textes text input").change(function() {
                var cibleLang = that.el.find("select#cibles option:selected").attr("name");
                var key = $(this).parent().attr("name");
                that.saveManager.addTrad(key, cibleLang, $(this).val());
            });
        };

        this.makeEvents = function() {
            var that = this;
            this.el.find(".canClose").click(function(e) {
                var target = $(e.target);
                if (target.hasClass("canClose")) {
                    that.el.fadeOut();
                    that.parent.refreshTextes();
                }
            });
            this.el.find("select").change(function(e) {
                that.refreshTrads();
            });
            this.el.find("bouton#send").click(function(e) {
                that.saveManager.sendTrad();
            });
        };

        this.init(parent);
    };
});