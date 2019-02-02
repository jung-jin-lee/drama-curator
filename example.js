const puppeteer = require('puppeteer');
 
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  const headingOne = await page.evaluate(() => document.querySelector('h1').innerHTML);
  console.log('heading one:', headingOne)
  await browser.close();
})();