const scraper = require('../../scraper/shopee/scraper')
const scrap = async (req, res )=>{
    const {keyword} = req.body
    const data = await scraper(keyword)
    res.status(200).json({
        data
    })
}

module.exports = scrap