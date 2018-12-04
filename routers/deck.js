const fs = require('fs')
const path = require('path')
const CRoyale = require('croyale')
const client = new CRoyale.Client(fs.readFileSync(path.join(__dirname, '../.crapi_token'), 'utf-8'))

module.exports = {
    'get /popular/decks': async (ctx) => {
        ctx.body = await client.Api.getPopularDecks()
    }
}