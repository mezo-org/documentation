import puppeteer from 'puppeteer';
import axios from 'axios';

const visitedUrls = new Set();

// Function to check the status of a URL
async function checkUrl(url) {
  try {
    const response = await axios.get(url);
    if (response.status >= 400) {
      console.log(`Broken: ${url} (Status: ${response.status})`);
    }
  } catch (error) {
    console.log(`Error: ${url} (Error: ${error.message})`);
  }
}

// Function to extract links from a page
async function extractLinksFromPage(page) {
  const links = await page.evaluate(() => {
    const hrefs = [];

    const anchorTags = document.querySelectorAll('a');
    const imgTags = document.querySelectorAll('img');

    anchorTags.forEach(anchor => hrefs.push(anchor.href));
    imgTags.forEach(img => hrefs.push(img.src));
    
    return hrefs;
  });
  return links;
}

// Function to crawl the website recursively
async function crawlWebsite(url, depth = 0, maxDepth = 5) {
    // Avoid exceeding the maximum recursion depth
    if (depth > maxDepth) {
      return;
    }
  
    // Skip if the URL has already been visited
    if (visitedUrls.has(url)) {
      return;
    }
  
    // Mark the URL as visited
    visitedUrls.add(url);
  
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Go to the current URL
    await page.goto(url);
    
    // Extract links and images from the page
    const links = await extractLinksFromPage(page);
    
    // Check the status of every link and image on the page
    for (let link of links) {
      await checkUrl(link);
    }
  
    // Recursively crawl links to other pages on the same domain (to avoid external links)
    for (let link of links) {
      if (link.startsWith(url) && !visitedUrls.has(link)) {
        await crawlWebsite(link, depth + 1, maxDepth);
      }
    }
  
    await browser.close();
  }

const args = process.argv.slice(2);
const baseUrl = args[0];
crawlWebsite(baseUrl).catch(err => console.log(err));