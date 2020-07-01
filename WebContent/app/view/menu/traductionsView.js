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

            this.refreshTrads();

            this.el.find("content#textes").fadeIn();
            this.el.fadeIn();
        };

        this.refreshTrads = function() {
            if (!this.currentFile) return;
            var textes = this.currentFile.list();
            var sourceLang = this.el.find("select#sources option:selected").attr("name");
            var cibleLang = this.el.find("select#cibles option:selected").attr("name");

            this.el.find("textes").empty();
            for (var i in textes) {
                var key = textes[i];

                var groupDom = $("<text><span></span></text>");
                this.el.find("textes").append(groupDom);

                groupDom.attr("name", key);

                var source = this.Textes.get(key, sourceLang, sourceLang != cibleLang);
                source = Utils.decodeHtml(source);
                var sourceDom = groupDom.find("span").html(source);

                var cible = this.saveManager.myTrad(key, cibleLang);
                if (cible) groupDom.addClass("verify");
                else cible = this.Textes.get(key, cibleLang);
                var cibleTxt = Utils.decodeHtml(cible);

                var cibleDom;
                if (sourceDom.text().length > 40 || cibleTxt.length > 40) {
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
            Utils.then(function() {that.onResize();}, 10);

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
            this.el.find("textes text input").keypress(function() {
                $(this).parent().addClass("verify");
            });
            this.el.find("textes text input").change(function() {
                var cibleLang = that.el.find("select#cibles option:selected").attr("name");
                var key = $(this).parent().attr("name");
                that.saveManager.addTrad(key, cibleLang, $(this).val());
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
                    that.el.fadeOut();
                    that.parent.refreshTextes();
                }
            });
            this.el.find("content#textes .canClose").click(function(e) {
                var target = $(e.target);
                if (target.hasClass("canClose")) {
                    that.parent.refreshTextes();
                    that.showFiles();
                }
            });
            this.el.find("select").change(function(e) {
                that.refreshTrads();
            });
            this.el.find("bouton#send").click(function(e) {
                that.saveManager.sendTrad();
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