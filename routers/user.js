const fs = require('fs')
const path = require('path')
const CRoyale = require('croyale')
const client = new CRoyale.Client(fs.readFileSync(path.join(__dirname, '../.crapi_token'), 'utf-8'))

module.exports = {
    'get /player/:tag': async (ctx) => {
        ctx.body = await client.Users.getProfile(ctx.params.tag);
    },
    'get /player/:tag/chests': async (ctx) => {
        ctx.body = await client.Users.getChests(ctx.params.tag);
    },
}