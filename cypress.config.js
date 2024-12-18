const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },

 //baseUrl: 'https://dream-frontend-stage.onrender.com/',
    //baseUrl:"https://valkyrie-frontend-test.onrender.com/",
    //baseUrl: "https://dream.vivacitytech.com/",
 baseUrl:"https://dream-frontend-qa.onrender.com/",
    specPattern: 'cypress/integration/*.feature',
    supportFile: 'cypress/support/index.js',
    chromeWebSecurity: false,
    failOnStatusCode: false,
    experimentalOriginDependencies: true,
    numTestsKeptInMemory:0,
    experimentalMemoryManagement:true,
    env: {
      USERNAME: 'demo_adminSuper@vivacitytech.com',
      PASSWORD: 'VIVA!dreamdemo'
     },
    "reporter": "cypress-mochawesome-reporter",
    "video": false,
    "reporterOptions": {
      "reportDir": "cypress/report",
      "saveHtml": true,
      "reportPageTitle": "Legrande Cypress",
      "reportFilename": "Report",
      "embeddedScreenshots": true,
      "inlineAssets": true,
      "overwrite": true
    }
  },
});
