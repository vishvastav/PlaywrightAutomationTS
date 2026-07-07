import { test, expect } from '@playwright/test';

test('verify browser with two context', async ({ browser }) => {


    const ttaCartContext = await browser.newContext();
    const ttaCartPage = await browser.newPage();
    await ttaCartPage.goto("https://app.thetestingacademy.com/playwright/ttacart/");



    const ttaBankContext = await browser.newContext();
    const ttaBankPage = await browser.newPage();
    await ttaBankPage.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");




});