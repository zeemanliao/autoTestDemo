"use strict";

let EventEmitter = require('events').EventEmitter;
let util = require('util');

function SyncModel(cfg) {
	EventEmitter.call(this);
	this.cfg = initConfig(cfg);
}

util.inherits(SyncModel, EventEmitter);

SyncModel.prototype.asyncGetConfig = function() {
	this.emit('get config', this.cfg);
};

SyncModel.prototype.callbackGetConfig = function(callback) {
	callback(this.cfg);
};

function initConfig(cfg) {
	if (util.isNullOrUndefined(cfg)){
		throw new Error('cfg not defined!');
	}

	return cfg;
}

module.exports = SyncModel;