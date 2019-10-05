/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils"
        ],
function($, _, Utils) {
	'use strict';

	return function(parent) {
	    this.paliers = [
	        0, 10, 21, 33, 46, 61,
	        78, 97, 118, 141, 168,
	        199, 234, 273, 316, 365,
	        420, 481, 548, 621, 702,
	        791, 888, 993, 1106, 1229,
	        1362, 1505, 1658, 1821, 1996,
	        2183, 2382, 2593, 2816, 3053,
	        3304, 3569, 3848, 4141, 4450,
	        4775, 5116, 5473, 5846, 6237,
	        6646, 7073, 7518, 7981, 8464,
	        8967, 9490, 10033, 10596, 11181,
	        11788, 12417, 13068, 13741, 14438,
	        15159, 15904, 16673, 17466, 18285,
	        19130, 20001, 20898, 21821, 22772,
	        23751, 24758, 25793, 26856, 27949,
	        29072, 30225, 31408, 32621, 33866,
	        35143, 36452, 37793, 39166, 40573,
	        42014, 43489, 44998, 46541, 48120,
	        49735, 51386, 53073, 54796, 56557,
	        58356, 60193, 62068, 63981, 65934
	    ];


		this.init = function(parent) {
			this.el = "";
			this.parent = parent;

			this.Textes = parent.Textes;
			this.saveManager = parent.saveManager;
			this.mediatheque = parent.mediatheque;

            this.data = parent.data;
		};

		this.add = function(amount) {
		    if (amount < 0) amount = 0;
		    this.data.xp += amount;
		    this.check();
		}

		this.nextPalier = function() {
		    var nextLevel = this.data.level+1;
		    if (nextLevel >= this.paliers.length) return 0;
		    else return this.paliers[nextLevel];
		}

		this.check = function() {
		    var palier = this.nextPalier();
		    if (palier && this.data.xp >= palier) {
		        this.data.xp -= palier;

		        this.parent.addAmountChange("Lvl+1", "abilitie");
                this.data.level++;
                if (this.data.level >= this.paliers.length)
                    this.data.level = this.paliers.length-1;

		        this.parent.levelUp();
                this.check();
		    }
		};

		this.init(parent);
	};
});