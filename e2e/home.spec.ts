import { expect, test } from '@playwright/test';

test.describe('Form submission', () => {
  test('should submit form and display submission message', async ({
    page,
  }) => {
    // テスト対象のページにアクセス
    await page.goto('/');

    // フォームが表示されることを確認
    await expect(page.getByText('名前')).toBeVisible();
    await expect(page.getByText('送信')).toBeVisible();

    // 名前入力フィールドに値を入力
    await page.getByLabel('名前').fill('テストユーザー');

    // フォームを送信
    await page.getByText('送信').click();

    // 戻るボタンが表示されることを確認
    const backButton = page.getByRole('button', { name: '戻る' });
    await backButton.isVisible();

    // 戻るボタンをクリック
    await backButton.click();

    // 再びフォームが表示されることを確認
    await expect(page.getByText('名前')).toBeVisible();
    await expect(page.getByText('送信')).toBeVisible();
  });
});
