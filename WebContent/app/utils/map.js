'use strict';
define(["jquery"], function($){
	return function(collection){
		this.init = function(collection) {
			if (!collection) collection = [];
			this.data = [];
			for (var i in collection) {
			    this.put(i, collection[i]);
			}
		};
		
		this.put = function(key, value) {
            this.data[key] = value;
		};
		this.push = function(key) {
			this.data[key] = key;
		};
		
		this.length = function() {
            var length = 0;
            for (var i in this.data) {
                length++;
            }
            return length;
		};
		
		this.remove = function(key) {
            var val = this.data[key];
            delete this.data[key];
            return val;
		};
		this.clear = function() {
			this.data = [];
		};

		this.get = function(key) {
            return this.data[key];
		};

		this.getFirst = function() {
			for (var i in this.data) {
			    return this.data[i];
			}
		};
		
		this.getKey = function(value) {
            for (var i in this.data) {
                if (this.data[i] == value) return i;
            }
			return null;
		};

		this.keys = function() {
            var keys = [];
            for (var i in this.data) {
                keys.push(i);
            }
            return keys;
        };
		
		this.contains = function(value) {
			for (var i in this.data) {
			    if (this.data[i] == value) return true;
			}
			return false;
		};
		
		/**
		 * Renvoi la premiere clef vide ou null
		 * Si toutes les clefs sont renseignées, renvoi la derniere clef
		 */
		this.getFirstEmptyKey = function() {
			var firstKey;
			var next = this.data.entries().next();
            while (!next.done) {
                var index = next.value[0];
                var item = next.value[1];
				if (!index) break;
				if (!firstKey) firstKey = index;
				
				if (item == null || item == "") return index;
			}
			return firstKey;
		};

		this.init(collection);
	};
});