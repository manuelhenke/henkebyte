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

  const baseUrl = `http://localhost:${port}`
  try {
    const page = await context.newPage()

    const screenshotPath = async (path, filePath) => {
      await page.goto(`${baseUrl}${path}`, {
        waitUntil: 'networkidle',
      })
      await page.screenshot({ path: `static/${filePath ?? path}.png` })
    }

    await screenshotPath('/', 'preview')
    await screenshotPath('/', 'images/website-story/home')
    await screenshotPath('/about-me', 'images/website-story/about-me')
    await screenshotPath(
      '/resources-overview',
      'images/website-story/resources-overview'
    )
    await page.close()
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
