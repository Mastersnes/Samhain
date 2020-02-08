'use strict';
define(["jquery"], function($){
	return function(collection){
		this.init = function(collection) {
			if (!collection) collection = [];
			this.data = new Map(collection);
		};
		
		this.put = function(key, value) {
			this.data.set(key, value);
		};
		this.push = function(key) {
			this.data.set(key, key);
		};
		
		this.length = function() {
			return this.data.size;
		};
		
		this.remove = function(key) {
			return this.data.delete(key);
		};
		this.clear = function() {
			return this.data.clear();
		};

		this.get = function(key) {
			return this.data.get(key);
		};

		this.getFirst = function() {
			return this.data.keys().next().value;
		};
		
		this.getKey = function(value) {
            var next = this.data.entries().next();
			while (!next.done) {
				var index = next.value[0];
				var item = next.value[1];
				if (item == value) return index;
			}
			return null;
		};

		this.keys = function() {
            return this.data.keys();
        };
		
		this.contains = function(value) {
			return this.getKey(value) != null;
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