/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const { replace, map, toLower } = require('lodash');
const playwright = require('playwright');
const { routes: routeObject } = require('./util/routes');

/**
 * @function
 * @template T
 * @param {T[] | null | undefined} collection
 * @param {_.ArrayIterator<T, any>} iteratee
 */
async function asyncForEach(collection, iteratee) {
  await Promise.all(map(collection, iteratee));
}

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

(async () => {
  let port = process.argv[2];
  if (!port) port = '3000';

  const browser = await playwright.chromium.launch({});
  const baseURL = `http://localhost:${port}`;
  const defaultGoToPageOptions = {
    waitUntil: 'networkidle',
  };

  try {
    const previewContext = await browser.newContext({
      baseURL,
      viewport: {
        width: 1200,
        height: 630,
      },
    });
    const previewPage = await previewContext.newPage();
    await previewPage.goto('/', defaultGoToPageOptions);
    await previewPage.screenshot({ path: `static/preview.png` });
    await previewPage.close();
    await previewContext.close();

    await asyncForEach(devices, async (device) => {
      await asyncForEach(themeModes, async (themeMode) => {
        const context = await browser.newContext({
          baseURL,
          viewport: device.viewport,
        });
        const selectThemeModePage = await context.newPage();
        await selectThemeModePage.goto('/', defaultGoToPageOptions);
        await selectThemeModePage.click(`#${themeMode}-mode-trigger`);
        await selectThemeModePage.close();

        await asyncForEach(routes, async (route) => {
          const page = await context.newPage();
          const waitForPromises = [
            page.goto(route.to, defaultGoToPageOptions),
            page.waitForLoadState('load'),
            page.waitForLoadState('domcontentloaded'),
            page.waitForSelector('img'),
            page.waitForTimeout(200), // TODO: replace with better selector
          ];
          if (route.to === 'resources-overview') {
            waitForPromises.push(page.waitForEvent('layoutComplete'));
          }
          await Promise.all(waitForPromises);
          await page.screenshot({
            path: `static/images/website-story/${device.name}/${themeMode}/${replace(
              toLower(route.name),
              ' ',
              '-'
            )}.png`,
          });
          await page.close();
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

  // force exit as Nuxt server is still listening...
  process.exit(0);
})();
