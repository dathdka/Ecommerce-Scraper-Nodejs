const browserInstance = require("../browser");
const autoScroll = require('../Shared/autoScrollPage')
const getItemLinks = require('./actions/getItemLinks')
const getItemProperties = require('./actions/getItemProperties')

const scraperObj = async (keyword) => {
  let url = `https://shopee.vn/search?keyword=${keyword}`;
  const browser = await browserInstance();
  const page = (await browser.pages())[0];
  console.log(`Navigating to ${url}...`);
  await page.goto(url);
  async function scrap() {
    var dataScrap = [];
    await page.waitForSelector(
      "#main > div > div.dYFPlI > div > div > div.ZgwlcK > div.shopee-search-item-result > div.row.shopee-search-item-result__items > div:nth-child(1) > a > div > div"
    );
    const productList = await getItemLinks(page);
    


    for (const link in productList) {
      if (productList[link]) dataScrap.push(await getItemProperties(productList[link],browser));
    }
    return dataScrap;
  }
  scrap();
};

module.exports = scraperObj;
