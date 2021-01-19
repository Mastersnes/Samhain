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

        this.showFiles = function() {
            this.currentFile = null;
            this.el.find("content#textes").hide();

            this.el.find("content#fichiers files").empty();
            this.files = [];
            this.addFile(this.Textes);

            this.el.find("content#fichiers").fadeIn();
            this.el.fadeIn();
            this.makeFileEvents();
        };

        this.addFile = function(file) {
            if (file.list().length) {
                this.files[file.name()] = file;
                var fileDom = $("<file></file>");
                fileDom.html(file.name());
                this.el.find("content#fichiers files").append(fileDom);
            }
            var children = file.children();
            for (var i in children) {
                this.addFile(children[i]);
            }
        };

        this.showFile = function(file) {
            this.currentFile = file;
            this.el.find("content#fichiers").hide();

            if (!this.source) this.source = this.Textes.loadLocal();
            if (!this.cible) {
                if (this.source == "fr") this.cible = "en";
                else this.cible = "eo";
            }
            this.refreshTrads();

            this.el.find("content#textes").fadeIn();
            this.el.fadeIn();
        };

        this.refreshTrads = function() {
            if (!this.currentFile) return;
            var textes = this.currentFile.list();
            var sourceLang = this.source;
            var cibleLang = this.cible;

            this.el.find("#textes langage#source").attr("name", sourceLang);
            this.el.find("#textes langage#cible").attr("name", cibleLang);

            this.el.find("textes").empty();
            for (var i in textes) {
                var key = textes[i];

                var groupDom = $("<text></text>");
                this.el.find("textes").append(groupDom);
                groupDom.attr("name", key);

                var checkContainer = $("<div class='checkContainer'></span>");
                checkContainer.append($("<span class='verify'></span>"));
                checkContainer.append($("<span class='delete'></span>"));
                groupDom.append(checkContainer);

                var source = this.Textes.get(key, sourceLang, sourceLang != cibleLang);
                source = Utils.decodeHtml(source);
                var sourceDom = $("<span class='source'></span>");
                sourceDom.html(source);
                groupDom.append(sourceDom);

                var cible = this.saveManager.myTrad(key, cibleLang);
                if (cible) groupDom.addClass("check");
                else cible = this.Textes.get(key, cibleLang);
                var cibleTxt = Utils.decodeHtml(cible);

                var cibleDom;
                if (sourceDom.text().length > 35 || cibleTxt.length > 35) {
                    cibleDom = $("<textarea></textarea>");
                    cibleDom.html(cibleTxt);
                    groupDom.addClass("large");
                }else {
                    groupDom.append("&nbsp;->&nbsp;");
                    cibleDom = $("<input type='text'/>");
                    cibleDom.attr("value", cibleTxt);
                }
                groupDom.append(cibleDom);
            }

            var that = this;
            Utils.then(function() {that.onResize();}, 20);

            this.makeTextEvents();
        };

        this.onResize = function() {
            this.el.find("textes textarea").each(function(index, element) {
                $(this).css("height", 0);
                $(this).css("height", this.scrollHeight+5);
            });
        };

        this.makeTextEvents = function() {
            var that = this;
            this.el.find("textes text input, textes text textarea").keypress(function() {
                $(this).parent().addClass("check");
                var cibleLang = that.el.find("langage#cible.selected").attr("name");
                var key = $(this).parent().attr("name");
                that.saveManager.addTrad(key, cibleLang, $(this).val(), true);
            });
            this.el.find("textes text input, textes text textarea").change(function() {
                var cibleLang = that.el.find("langage#cible.selected").attr("name");
                var key = $(this).parent().attr("name");
                that.saveManager.addTrad(key, cibleLang, $(this).val());
            });
            this.el.find("textes text span.delete").click(function() {
                var cibleLang = that.el.find("langage#cible.selected").attr("name");
                var parent = $(this).parent().parent();
                var key = parent.attr("name");
                that.saveManager.deleteTrad(key, cibleLang);
                that.refreshTrads();
            });
        };

        this.makeFileEvents = function() {
            var that = this;
            this.el.find("file").click(function() {
                var key = $(this).html();
                that.showFile(that.files[key]);
            });
        };

        this.makeEvents = function() {
            var that = this;
            this.el.find("content#fichiers .canClose").click(function(e) {
                var target = $(e.target);
                if (target.hasClass("canClose")) {
                    that.mediatheque.playSound("ui/fermerPopup.ogg");
                    that.el.fadeOut();
                    that.parent.refreshTextes();
                }
            });
            this.el.find("content#textes .canClose").click(function(e) {
                var target = $(e.target);
                if (target.hasClass("canClose")) {
                    that.mediatheque.playSound("ui/fermerPopup.ogg");
                    that.parent.refreshTextes();
                    that.showFiles();
                }
            });
            this.el.find("langage.selected").click(function(e) {
                var el = that.el.find("content#textes");
                var me = $(this);
                that.langageInChange = me.attr("id");

                if (el.find("langages").is(":visible")) el.find("langages").hide();
                else {
                    var left = me.position().left;
                    el.find("langages").css({
                        "left" : Utils.toPercent(left, el.width()) + "%"
                    });
                    el.find("langages").show();
                }
            });
            this.el.find("#textes langages langage").off("click");
            this.el.find("#textes langages langage").click(function(e) {
                that.el.find("#textes langages").hide();
                that.current = $(this).attr("name");

                if (that.langageInChange == "source")
                    that.source = that.current;
                else that.cible = that.current;

                that.mediatheque.playSound("ui/fermerPopup.ogg");

                that.refreshTrads();
            });
            this.el.find("bouton#send").click(function(e) {
                that.saveManager.sendTrad(that);
            });
        };

        this.refreshTextes = function() {
            this.el.find("langages span.source").html(this.Textes.get("traduction-source"));
            this.el.find("langages span.cible").html(this.Textes.get("traduction-cible"));
            this.el.find("langages option[name='fr']").html(this.Textes.get("french"));
            this.el.find("langages option[name='en']").html(this.Textes.get("english"));
            this.el.find("langages option[name='eo']").html(this.Textes.get("esperanto"));
            this.el.find("boutons #send").html(this.Textes.get("traduction-submit"));
        };

        this.init(parent);
    };
});