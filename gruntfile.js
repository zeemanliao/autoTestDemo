module.exports = function(grunt) {
    //載入相關模組
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-istanbul');
    grunt.loadNpmTasks('grunt-env');
    
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
                    timeout: 3000
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
                dir: 'coverage',
                print: 'detail'
            }
        },
        clean: {
            coverage: {
                src: ['test/instrument/','coverage/']
            }
        },
        jshint: {
            all: ['lib/*'],
            options: {
                node: true,
                moz: true,
                "-W040":true
            }
        }
    });
    // Default task.
    grunt.registerTask('test', ['jshint', 'clean', 'instrument', 'env:coverage', 'mochaTest:test', 'storeCoverage', 'makeReport']);
};
