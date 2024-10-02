const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
    // Read the URLs from the file
    const urls = fs.readFileSync('urls.txt', 'utf-8').split('\n').filter(Boolean);

    // Launch Puppeteer and open a new page
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Set the viewport dimensions
    await page.setViewport({
        width: 375,
        height: 1080,
    });

    // Loop through each URL and take a screenshot
    for (const url of urls) {
        try {
            await page.goto(url, { waitUntil: 'networkidle2' });

            // Array of cookie banner selectors
            const cookieBannerSelectors = ['.gdpr-wrapper', '.cookie-notice-container'];

            // Hide cookie banners if present
            await page.evaluate((selectors) => {
                selectors.forEach((selector) => {
                    const element = document.querySelector(selector);
                    if (element) {
                        element.style.setProperty('display', 'none', 'important');
                    }
                });
            }, cookieBannerSelectors);

            // After scrolling back to the top, take the screenshot
            const fileName = url.replace(/[^a-z0-9]/gi, '_').toLowerCase();
            const filePath = path.join(__dirname, 'screenshots', `${fileName}.png`);
            await page.screenshot({ path: filePath, fullPage: true });
            console.log(`Screenshot taken for: ${url}`);
        } catch (error) {
            console.error(`Failed to take screenshot for ${url}:`, error);
        }
    }

    await browser.close();
})();