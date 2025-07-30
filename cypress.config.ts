const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    screenshotsFolder: 'cypress/screenshots',
    video: false ,
    setupNodeEvents(on, config) {
    },
  },
});
