module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            'app/app.js',
            'test/*Spec.coffee'
        ],
        preprocessors: {
            'test/*Spec.coffee': ['coffee']
        },
        coffeePreprocessor: {
            options: {
                sourceMap: true
            }
        },
        browsers: ['Chrome'],
        logLevel: config.LOG_DEBUG
    })
}