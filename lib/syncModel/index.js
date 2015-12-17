"use strict";

let util = require('util');

function syncModel(cfg) {
	this.cfg = initConfig(cfg);
}

syncModel.prototype.syncGetConfig = function() {
	return this.cfg;
};

function initConfig(cfg) {

	if (util.isNullOrUndefined(cfg)){
		throw new Error('cfg not defined!');
	}

	return cfg;
}

module.exports = syncModel;