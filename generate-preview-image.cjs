/* eslint-disable unicorn/no-array-method-this-argument */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const async = require('async');
const { replace, toLower } = require('lodash');
const playwright = require('playwright');
const { routes: routeObject } = require('./util/routes.cjs');

const routes = Object.values(routeObject);

// TODO: add full page device
const devices = [
  {
    name: 'desktop',
    viewport: {
      width: 1200,
      height: 630,
    },
  },
  {
    name: 'tablet',
    viewport: {
      width: 820,
      height: 1180,
    },
  },
  {
    name: 'mobile',
    viewport: {
      width: 390,
      height: 844,
    },
  },
];

const themeModes = ['light', 'dark', 'sepia'];

/**
 * @param {playwright.BrowserContext} context
 * @param {string} url
 */
async function goToPage(context, url) {
  const page = await context.newPage();
  const waitForPromises = [
    page.goto(url, {
      waitUntil: 'networkidle',
      timeout: 30_000,
    }),
    page.waitForLoadState('load'),
    page.waitForLoadState('domcontentloaded'),
    page.waitForSelector('img'),
    page.waitForTimeout(1000), // TODO: replace with better selector
  ];
  if (url.includes('resources-overview')) {
    // waitForPromises.push(page.waitForEvent('layoutComplete'));
    waitForPromises.push(page.waitForSelector('article.card'));
  }
  await Promise.all(waitForPromises);
  return page;
}

/**
 * @param {playwright.BrowserContext} context
 * @param {string} url
 * @param {string} path
 */
async function screenshotPage(context, url, path) {
  const page = await goToPage(context, url);
  await page.screenshot({
    path,
  });
  await page.close();
}

async function generate() {
  let port = process.argv[2];
  if (!port) port = '3000';

  const browser = await playwright.chromium.launch({});
  const baseURL = `http://localhost:${port}`;

  try {
    const previewContext = await browser.newContext({
      baseURL,
      viewport: {
        width: 1200,
        height: 630,
      },
    });
    await screenshotPage(previewContext, '/', `static/preview.png`);
    await previewContext.close();

    await async.forEach(devices, async (device) => {
      await async.forEach(themeModes, async (themeMode) => {
        const context = await browser.newContext({
          baseURL,
          viewport: device.viewport,
        });
        const selectThemeModePage = await goToPage(context, '/');
        await selectThemeModePage.click(`#${themeMode}-mode-trigger`);
        await selectThemeModePage.close();

        await async.forEach(routes, async (route) => {
          await screenshotPage(
            context,
            route.to,
            `static/images/website-story/${device.name}/${themeMode}/${replace(
              toLower(route.name),
              ' ',
              '-'
            )}.png`
          );
        });
        await context.close();
      });
    });
  } catch (error) {
    console.error(error);
    console.error(
      'Your Website should be running locally. You can specify the port as an argument "node generate-preview-image.js 8080"'
    );
  } finally {
    await browser.close();
  }
}

// eslint-disable-next-line unicorn/prefer-top-level-await
generate().then(() => {
  // force exit as Nuxt server is still listening...
  // eslint-disable-next-line unicorn/no-process-exit
  process.exit(0);
});
