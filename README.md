
# Website Screenshot Tool

This tool is a combination of two scripts: one that extracts all internal URLs from a given site and another that takes screenshots of those URLs using Puppeteer. This can be useful for various purposes, such as archiving web pages, testing visual aspects of a site, or monitoring changes.

## Prerequisites

Before using this tool, you need to have the following installed on your system:

1. **Node.js**: Puppeteer is a Node.js library, so you'll need Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

2. **Python**: The URL extraction script is written in Python, so you'll need Python installed. You can download it from [python.org](https://www.python.org/).

## Installation

### 1. Install Node.js Dependencies

First, you'll need to install Puppeteer, which is used for taking screenshots of the URLs.

Run the following command in your terminal:

- *npm install puppeteer*

### 2. Install Python Dependencies

You'll also need the *requests* and *beautifulsoup4* libraries to extract URLs from your site.

Install them using pip:

- *pip install requests beautifulsoup4*

## Usage

### Step 1: Extract URLs from Your Site

The first script extracts all internal URLs from your site's homepage and saves them to a file called **urls.txt**.

1. Open the **extract_urls** file and add the URL of your site in the **site_url** variable.
2. Run the Python script:

- *python extract_urls.py*

This script will scrape your site's homepage, extract all internal links, and save them to **urls.txt**.

You can also simply add the urls of the sites or pages you want to screenshot in **urls.txt** without using the **extract_urls.py** file and run the **take_screenshot.js** file directly.

### Step 2: Take Screenshots of the URLs

The second script uses Puppeteer to take screenshots of all the URLs listed in **urls.txt**.

1. Open the **take_screenshots.js** file and make sure the **width** and **height** values are set to your desired viewport size.
2. Run the Node.js script:

- *node screenshot_tool.js*

This script will read the **urls.txt** file, navigate to each URL, and take a full-page screenshot. The screenshots will be saved in a **screenshots** directory in the same location as the script.

### Customization

- **Viewport Size**: You can adjust the width and height of the viewport in the Puppeteer script to match the screen size you want to capture.
- **Full-Page Screenshots**: The script is set to capture full-page screenshots by default. If you want to capture only the visible part of the page, you can remove the **fullPage: true** option in the **page.screenshot()** method.

## Example

1. Extract URLs:

- *python extract_urls.py*

2. Take screenshots:

- *node screenshot_tool.js*

## Notes

- Ensure your site URL is set correctly in the Python script before running it.
- The **screenshots** directory must exist in the same directory as the **take_screenshots.js** file. If it doesn't exist, you'll need to create it.

## Troubleshooting

- **Puppeteer Issues**: If Puppeteer fails to launch the browser, ensure that your system has all required dependencies. On some systems, additional libraries may be needed (e.g., **libnss3**, **libatk-bridge2.0-0**).
- **Python Errors**: If you encounter issues with the Python script, ensure that the URL is correct and that the site is accessible.

## License

This tool is open-source and free to use. Contributions and improvements are welcome!
