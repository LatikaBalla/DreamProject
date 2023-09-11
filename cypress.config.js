const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://dream-frontend-stage.onrender.com/',
    specPattern: 'cypress/integration/*.feature',
    supportFile: 'cypress/support/index.js',
    chromeWebSecurity: false ,
    failOnStatusCode: false,  
    experimentalOriginDependencies: true,
    env: {
      USERNAME:'demo_adminSuper@vivacitytech.com',
      PASSWORD:'VIVA!dreamdemo'
    }
  },
});
