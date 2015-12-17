"use strict";
let requireHelper = require('./require_helper');
let testModel = requireHelper('testModel');
let should = require('should');
let testConfig = "testConfig";

describe('sync Model Test', function() {
    let syncModel;
	describe('#create Model', function() {
        it('should create Error', function(done) {
        	try {
                syncModel = testModel.createSyncModel();
            } catch (e) {
                should.exist(e);
                done();
            }
        	
        });
        it('should create Model and get Config', function(done) {
        	syncModel = testModel.createSyncModel(testConfig);
            should.exist(syncModel);
            testConfig.should.equal(syncModel.cfg);
            done();
        });
    });

    describe('#get sync config', function() {
        it('should get config', function(done) {
            testConfig.should.equal(syncModel.syncGetConfig());
            done();
        });
    });

});