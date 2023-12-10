const{chromium} = require('playwright');  //Adding browseer to be used in our tests 'chromium or chrome'

//Inside this async function we are going to add our test steps
//'await' is used to allow enough time before action can be executed
(async () => {
    const browser = await chromium.launch(); //Here we are instructing playwright to launch browser
    const page = await browser.newPage(); //Here once browser is open this line opens new tab
    await page.goto('https://bitheap.tech'); //Here on the new tab this line instructs browser to navigate to the specified url
    await page.screenshot({path: 'screenshot.png'}); //After page has loaded this line takes a screenshot giving it name then placed in dir of script
    await browser.close(); //After screendhot of web page has been taken this line closes the browser

})();

