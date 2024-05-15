import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
    test('should match screenshot', async ({ page }) => {
      // テスト対象のページにアクセス
      await page.goto('/');
  
      // スクリーンショットを取得
      await expect(page).toHaveScreenshot();
    });
  });
