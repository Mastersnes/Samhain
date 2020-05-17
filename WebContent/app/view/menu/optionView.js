'use strict';
define(["jquery",
        "underscore",
        "app/utils/utils",
        "app/utils/viewUtils",
        "text!app/template/menu/popup/option.html"
        ], function($, _, Utils, ViewUtils, page){
    return function(parent){
        this.init = function(parent) {
        	this.el = $(".option-popup");

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
            this.refresh();
            this.el.fadeIn();
        };

        this.refresh = function() {
            if (this.mediatheque.isMute("sound"))
                this.el.find("son#sound").addClass("mute");
            else this.el.find("son#sound").removeClass("mute");

            if (this.mediatheque.isMute("music"))
                this.el.find("son#music").addClass("mute");
            else this.el.find("son#music").removeClass("mute");

            var lang = this.Textes.local;
            this.el.find("flag").removeClass("selected");
            this.el.find("flag#"+lang).addClass("selected");

            var selectAuto = this.saveManager.getOption("selectAuto");
            if (selectAuto) this.el.find("#selectAuto case").addClass("coche");
            else this.el.find("#selectAuto case").removeClass("coche");

            var cibleUnique = this.saveManager.getOption("cibleUnique");
            if (cibleUnique) this.el.find("#cibleUnique case").addClass("coche");
            else this.el.find("#cibleUnique case").removeClass("coche");
        };

        this.makeEvents = function() {
            var that = this;
            this.el.find(".canClose").click(function(e) {
                var target = $(e.target);
                if (target.hasClass("canClose")) that.el.fadeOut();
            });
            this.el.find("flag").click(function(e) {
                if ($(this).hasClass("selected")) return;
                var lang = $(this).attr("id");
                that.Textes.setLanguage(lang);
                that.parent.render();
            });
            this.el.find("son#sound").click(function(e) {
                that.mediatheque.mute("sound");
                that.refresh();
            });
            this.el.find("son#music").click(function(e) {
                that.mediatheque.mute("music");
                that.refresh();
            });
            this.el.find("#selectAuto").click(function(e) {
                that.saveManager.setOption("selectAuto", !that.saveManager.getOption("selectAuto"));
                that.refresh();
            });
            this.el.find("#cibleUnique").click(function(e) {
                that.saveManager.setOption("cibleUnique", !that.saveManager.getOption("cibleUnique"));
                that.refresh();
            });
        };

        this.init(parent);
    };
});