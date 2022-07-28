const playwrightShooter = require("viteshot/shooters/playwright");
const playwright = require("playwright");
const vite = require("vite");
const path = require("path")

module.exports = {
  framework: {
    type: "svelte",
  },
  shooter: playwrightShooter(playwright.chromium, {
    contexts: {
      ipad: playwright.devices["iPad (gen 6)"],
      chrome: playwright.devices["Desktop Chrome"],
      pixel4a: playwright.devices["Pixel 4a (5G)"],
    },
  }),
  filePathPattern: "**/*.screenshot.@(js|jsx|tsx|vue|svelte)",
  vite: vite.defineConfig({
    resolve: {
      alias: {
        "$lib": path.resolve(__dirname, "./lib"),
      }
    }
  }),
};
