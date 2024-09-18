import { test, expect } from '@playwright/test';

test.describe('Practising Pplaywright', () => {
    
    test('Practsising opening a page and clicking a login button', async ({ page }) => {
        
        await page.goto("https://demo.guru99.com/test/guru99home/scrolling.html");

        await page.click('//*[@id="rt-feature"]/div/div[1]/div/div/div/div/div[6]/div/div/div/div/div[1]/div/div/a');

        expect(page.url()).toEqual("https://www.guru99.com/vbscript-tutorials-for-beginners.htm");

        await page.waitForTimeout(2000);

        await page.mouse.wheel(0, 2000);

        await page.waitForTimeout(2000);

    })
    

})
