const puppeteer = require('puppeteer');
const fs        = require('fs');
const path      = require('path');

(async () => {
    // Read the URLs from the file
    const urls = fs.readFileSync('urls.txt', 'utf-8').split('\n').filter(Boolean);

    // Launch Puppeteer and open a new page
    const browser = await puppeteer.launch();
    const page    = await browser.newPage();

    // Set the viewport dimensions to a larger width
    await page.setViewport({
        width: 1920, //update this to the width you want to take the screenshots
        height: 1080,
    });

    // Loop through each URL and take a screenshot
    for (const url of urls) {
        await page.goto(url, { waitUntil: 'networkidle2' });
        const fileName = url.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        const filePath = path.join(__dirname, 'screenshots', `${fileName}.png`);
        await page.screenshot({ path: filePath, fullPage: true });
        console.log(`Screenshot taken for: ${url}`);
    }

    // Close the browser
    await browser.close();
})();
