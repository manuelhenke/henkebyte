import { setupTest, createPage } from '@nuxt/test-utils'

describe('browser', () => {
  setupTest({
    testDir: __dirname,
    browser: true,
  })

  test('should render page', async () => {
    const page = await createPage('/ios-calculator')
    const body = await page.innerHTML('body')
    expect(body).toContain('iOS-Calculator')
  })
})
