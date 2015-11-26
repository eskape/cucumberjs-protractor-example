exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'custom',
  frameworkPath: 'node_modules/protractor-cucumber-framework',
  specs: [
    'features/*.feature'
  ],
  cucumberOpts: {
    require: [
        'features/steps/*_steps.js',
        'features/support/*.js'
    ],
    format: 'pretty'
  }
}
