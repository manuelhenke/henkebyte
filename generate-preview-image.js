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
        timeout: 10000,
      })
      await page.screenshot({ path: `static/${filePath ?? path}.png` })
    }

    await screenshotPath('/', 'preview')

    const devices = [
      {
        name: 'desktop',
        viewportSize: {
          width: 1200,
          height: 630,
        },
      },
      {
        name: 'tablet',
        viewportSize: {
          width: 820,
          height: 1180,
        },
      },
      {
        name: 'mobile',
        viewportSize: {
          width: 390,
          height: 844,
        },
      },
    ]
    for (const device of devices) {
      await page.setViewportSize(device.viewportSize)
      for (const themeMode of ['light', 'dark', 'sepia']) {
        await page.click(`#${themeMode}-mode-trigger`)

        const imageBaseFilePath =
          'images/website-story/' + device.name + '/' + themeMode + '/'
        await screenshotPath('/', imageBaseFilePath + 'home')
        await screenshotPath('/about-me', imageBaseFilePath + 'about-me')
        await screenshotPath(
          '/resources-overview',
          imageBaseFilePath + 'resources-overview'
        )
        await screenshotPath('/minesweeper', imageBaseFilePath + 'minesweeper')
        await screenshotPath(
          '/ios-calculator',
          imageBaseFilePath + 'ios-calculator'
        )
      }
    }
    await page.close()
  } catch (error) {
    console.error(error)
    console.error(
      'Your Website should be running locally. You can specify the port as an argument "node generate-preview-image.js 8080"'
    )
  } finally {
    await browser.close()
  }

  // force exit as Nuxt server is still listening...
  process.exit(0)
})()
