const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {

      baseUrl: 'https://buger-eats.vercel.app/',
    chromeWebSecurity: false,
    viewportWidth : 1440, viewportHeight : 900

  }

})



