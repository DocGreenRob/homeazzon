import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:8100',
    projectId: '9wvv8s'
  },
});

// npx cypress run --record --key 22280890-6bea-4dd1-a69b-26afe9ee90ba
