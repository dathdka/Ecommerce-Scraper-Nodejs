const autoScroll = require('../../Shared/autoScrollPage')

const getItemLinks = async (page) =>{
    await autoScroll(page);
    await page.waitForSelector(
      "div:nth-child(57) > a > div > div > div.KMyn8J > div.zGGwiV"
    );
    var productList = await page.$$eval(
      "div.row.shopee-search-item-result__items > .col-xs-2-4",
      (items) => {
        items = items.map((el) => el.querySelector("a")?.href);
        return items;
      }
    );
    return productList
}
module.exports = getItemLinks