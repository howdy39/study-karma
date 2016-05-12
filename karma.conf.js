module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            'app/app.js',
            'test/*Spec.coffee'
        ],
        preprocessors: {
            'app/app.js': ['coverage'],
            'test/*Spec.coffee': ['coffee']
        },
        coffeePreprocessor: {
            options: {
                sourceMap: true
            }
        },
        browsers: ['Chrome'],
        reporters: ['mocha', 'coverage', 'junit'],
        junitReporter: {
            outputDir: 'report'
        },
        logLevel: config.LOG_DEBUG
    })
}