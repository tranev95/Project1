import { defineConfig } from "cypress"

export default defineConfig({
  e2e: {
    supportFile: "cypress/support/e2e.ts",
    specPattern: "cypress/e2e/**/*.ts",
    viewportWidth: 1920,
    viewportHeight: 1080,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    testIsolation: false,
  },
  // other configurations
})
