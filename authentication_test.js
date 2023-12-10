const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await authenticate(page);

    await browser.close();

})();

async function authenticate(page) {
    await page.goto('https://bitheap.tech'); //Navigating to the website using the goto method
    await page.click('#menu-item-1311'); //Here used id attribute
    await page.locator("[name='xoo-el-username']").fill(process.env.BITHEAP_USERNAME) //here username is retrived from environment variable
    await page.locator("[name='xoo-el-password']").fill(process.env.PASS) //here username is retrived from environment variable
    await page.locator('xpath=/html/body/div[2]/div[2]/div/div/div[2]/div[1]/div/div/div[2]/div/form/button').click();
    const text = await page.locator('css=#menu-item-1314 > a').textContent() //Playwright retrievs text content at the locator specified
    if(text != "Hello, Thabang")
        console.error("The authentication was not successful!")
    await page.screenshot({path: 'screenshot.png'})
}