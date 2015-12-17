module.exports = function(grunt) {
    //載入相關模組
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-istanbul');
    grunt.loadNpmTasks('grunt-env');
    
    //指定測試程式
    var src = ['test/*.test.js'];
    
    grunt.initConfig({
        env: {
            coverage: {
                APP_DIR_FOR_CODE_COVERAGE: '../test/instrument/lib/'
            }
        },
        instrument: {
                files: 'lib/**/*.js',
                options: {
                    lazy: true,
                    basePath: 'test/instrument/'
                }
            },
        mochaTest: {
            
            test: {
                options: {
                    reporter: 'spec',
                    timeout: 3000   //當測試同步方法時,設定的執行完成時間上限
                },
                src: src
            }
        },
        storeCoverage: {
            options: {
                dir: 'coverage'
            }
        },
        makeReport: {
            src: 'coverage/**/*.json',
            options: {
                type: 'lcov',
                dir: 'coverage',    //報告產出位置
                print: 'detail'
            }
        },
        clean: {        //每次執行前要清除的檔案或目錄
            coverage: {
                src: ['test/instrument/','coverage/']
            }
        },
        jshint: {       //jshint測試
            all: ['lib/*'],
            options: {
                node: true,     //開啟node.js測試
                moz: true,      //開啟ES6
                "-W040":true    //忽略可能造成undefined偵測
            }
        }
    });
    // Default task.
    grunt.registerTask('test', ['jshint', 'clean', 'instrument', 'env:coverage', 'mochaTest:test', 'storeCoverage', 'makeReport']);
};
