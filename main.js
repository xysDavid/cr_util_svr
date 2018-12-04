const fs = require('fs')
const path = require('path')
const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const routerParser = require('./lib/routerParser');

// async function getPlayer(playerTag) {
//     try {
//         var player = await client.Users.getChests(playerTag);
//         // console.log(`player ${JSON.stringify(player)}`);
//         return player;
//     } catch(e) {
//         console.error(e);
//     }
// }

var router = new Router({
    prefix: '/crapi'
});
var app = new Koa();

routerParser(router);

app.use(router.routes());
app.listen(3000);