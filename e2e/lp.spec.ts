import { expect, test } from '@playwright/test'

test('renders responsively without horizontal overflow', async ({ page }, testInfo) => {
  const consoleErrors: string[] = []
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text())
  })

  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('未来をつくる。')
  await expect(page.getByRole('heading', { name: /好きから選べる/ })).toBeVisible()

  const viewport = page.viewportSize()
  if (viewport && viewport.width < 768) {
    await page.getByRole('button', { name: 'メニューを開く' }).click()
    await expect(page.getByRole('dialog')).toBeVisible()
    await page.getByRole('button', { name: 'メニューを閉じる' }).click()
    await expect(page.getByRole('dialog')).toHaveCount(0)
  }

  const faqButton = page.getByRole('button', { name: 'プログラミング未経験でも大丈夫ですか？' })
  await faqButton.click()
  await expect(faqButton).toHaveAttribute('aria-expanded', 'true')

  const hasOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1)
  expect(hasOverflow).toBe(false)
  expect(consoleErrors).toEqual([])

  const sections = page.locator('section')
  for (let index = 0; index < (await sections.count()); index += 1) {
    await sections.nth(index).scrollIntoViewIfNeeded()
    await page.waitForTimeout(100)
  }
  await page.waitForTimeout(650)
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.screenshot({ fullPage: true, path: testInfo.outputPath('full-page.png') })
})
