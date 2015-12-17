"use strict";
let requireHelper = require('./require_helper');
let testModel = requireHelper('testModel');
let should = require('should');
let testConfig = "testConfig";

describe('async Model Test', function() {
    let asyncModel;
	describe('#create Model', function() {
        it('should create Error', function(done) {
        	try {
                asyncModel = testModel.createAsyncModel();
            } catch (e) {
                should.exist(e);
                done();
            }
        	
        });
        it('should create Model and get Config', function(done) {
        	asyncModel = testModel.createAsyncModel(testConfig);
            should.exist(asyncModel);
            testConfig.should.equal(asyncModel.cfg);
            done();
        });
    });

    describe('#get async config', function() {
        it('should events get config', function(done) {
            asyncModel.on('get config', function(cfg) {
                testConfig.should.equal(cfg);
                done();
            });
            asyncModel.asyncGetConfig();
        });
        
        it('should callback get config', function(done) {
            asyncModel.callbackGetConfig(function(cfg) {
                testConfig.should.equal(cfg);
                done();
            });
        });
    });

});