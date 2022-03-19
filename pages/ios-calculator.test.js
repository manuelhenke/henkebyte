import { describe, test } from '@jest/globals'
import { createPage, setupTest } from '@nuxt/test-utils'

describe('browser', () => {
  setupTest({ browser: true })

  test('should render page', async () => {
    const page = await createPage('/ios-calculator')
    const body = await page.innerHTML('body')
    expect(body).toContain('iOS-Calculator')
  })
})
