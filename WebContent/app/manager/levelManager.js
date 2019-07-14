/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils"
        ],
function($, _, Utils) {
	'use strict';

	return function(parent) {
	    this.paliers = [
	        0, 5, 11, 18, 26, 36,
	        48, 62, 78, 96, 118,
	        144, 174, 208, 246, 290,
	        340, 396, 458, 526, 602,
	        686, 778, 878, 986, 1104,
	        1232, 1370, 1518, 1676, 1846,
	        2028, 2222, 2428, 2646, 2878,
	        3124, 3384, 3658, 3946, 4250,
	        4570, 4906, 5258, 5626, 6012,
	        6416, 6838, 7278, 7736, 8214,
	        8712, 9230, 9768, 10326, 10906,
	        11508, 12132, 12778, 13446, 14138,
	        14854, 15594, 16358, 17146, 17960,
	        18800, 19666, 20558, 21476, 22422,
	        23396, 24398, 25428, 26486, 27574,
	        28692, 29840, 31018, 32226, 33466,
	        34738, 36042, 37378, 38746, 40148,
	        41584, 43054, 44558, 46096, 47670,
	        49280, 50926, 52608, 54326, 56082,
	        57876, 59708, 61578, 63486, 65434
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