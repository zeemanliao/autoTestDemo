"use strict";

let TestModel = module.exports = {};
let SyncModel = require('./syncModel');
let AsyncModel = require('./asyncModel');

/**
 * 建立只含有同步作業的模組
 *
 */
TestModel.createSyncModel = function(cfg) {
	return new SyncModel(cfg);
};

/**
 * 建立含有非同步作業的模組
 *
 */
TestModel.createAsyncModel = function(cfg) {
	return new AsyncModel(cfg);
};
