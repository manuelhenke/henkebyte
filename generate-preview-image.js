/* eslint-disable no-console */
const playwright = require('playwright')

;(async () => {
  let port = process.argv[2]
  if (!port) port = '3000'

  const browser = await playwright.chromium.launch()
  const context = await browser.newContext({
    viewport: {
      width: 1200,
      height: 630,
    },
  })

  try {
    const page = await context.newPage()
    await page.goto(`http://localhost:${port}`)
    await page.screenshot({ path: 'static/preview.png' })
  } catch (error) {
    console.error(
      'Your Website should be running locally. You can specify the port as an argument "node generate-preview-image.js 8080"'
    )
  } finally {
    await browser.close()
  }

  // force exit as Nuxt server is still listening...
  process.exit(0)
})()
