const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://valkyrie-frontend-test.onrender.com',
    specPattern: 'cypress/integration/*.feature',
    supportFile: 'cypress/support/index.js',
    chromeWebSecurity: false ,
    failOnStatusCode: false,  
    experimentalOriginDependencies: true,

    env: {
      USERNAME:'demo@vivacitytech.com',
      PASSWORD:'VIVA2020!demo!'
    }
  },
});
