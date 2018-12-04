/**
 * parse router configs in '../routers'
 */
const fs = require('fs')
const path = require('path')

module.exports = (router, options = {}) => {

    options.path = options.path || path.join(__dirname, '../routers')

    let files = fs.readdirSync(options.path)
    
    files.forEach((file) => {
        let routers = require(path.join(options.path, file))
        Object.keys(routers).forEach((key) => {
            let method = key.split(' ')[0];
            let routerPath = key.split(' ')[1];

            router[method](routerPath, routers[key]);
        })
    })

}