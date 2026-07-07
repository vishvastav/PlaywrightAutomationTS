import { test, expect } from '@playwright/test';

test("Verify the title", async ({ page }) => {
    await page.goto("https://app.vwo.com");
    await expect(page).toHaveTitle("Login - Wingify");

});
// Skip this test case
test.skip("skip_Verify the title", async ({ page }) => {
    await page.goto("https://app.vwo.com");
    await expect(page).toHaveTitle("Login - Wingify");

});

//only run this test case
test.only("only_Verify the title", async ({ page }) => {
    await page.goto("https://app.vwo.com");
    await expect(page).toHaveTitle("Login - Wingify");

});

//ececute to fail

test.fail("fail_Verify the title", async ({ page }) => {
    await page.goto("https://app.vwo.com");
    await expect(page).toHaveTitle("Login - Wingify");

});

//slow test timeout 3x
// test.slow("slow_Verify the title", async ({ page }) => {
//     await page.goto("https://app.vwo.com");
//     await expect(page).toHaveTitle("Login - Wingify");

// });

// Conditional skip
test('conditional', async ({ page, browserName }) => {
    test.skip(browserName === 'firefox', 'Not supported in Firefox');
});