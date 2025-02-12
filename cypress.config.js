module.exports = {
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  e2e: {
    baseUrl: 'https://www.automationexercise.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },

    env: {
      URL: 'https://www.automationexercise.com/'
    }
  },
};
