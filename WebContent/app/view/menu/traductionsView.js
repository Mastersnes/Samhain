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
            this.refreshTextes();
            this.el.fadeIn();
        };

        this.refreshTextes = function() {
            var textes = this.Textes.listAll();
            var sourceLang = this.el.find("select#sources option:selected").attr("name");
            var cibleLang = this.el.find("select#cibles option:selected").attr("name");

            this.el.find("textes").empty();
            for (var i in textes) {
                var key = textes[i];
                var groupDom = $("<text></text>");
                var source = this.Textes.get(key, sourceLang);
                var sourceDom = $("<span></span>").html(source);
                groupDom.append(sourceDom);

                groupDom.append("&nbsp;:&nbsp;");

                var cible = this.Textes.get(key, cibleLang);
                var cibleDom = $("<input type='text'/>");
                cibleDom.attr("value", Utils.decodeHtml(cible));
                groupDom.append(cibleDom);

                this.el.find("textes").append(groupDom);
            }
        };

        this.makeEvents = function() {
            var that = this;
            this.el.find(".canClose").click(function(e) {
                var target = $(e.target);
                if (target.hasClass("canClose")) {
                    that.el.fadeOut();
                }
            });
            this.el.find("select").change(function(e) {
                that.refreshTextes();
            });
        };

        this.init(parent);
    };
});