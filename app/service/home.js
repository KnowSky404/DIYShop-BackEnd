'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
    async index() {
        console.log('Hello Egg')
    }
    async getBanners() {
        let banners = this.app.getBanners()
        await banners.find(
            { id: { $exists: true } },
            (err, docs) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log(docs)
                    return docs
                }
            }
        )
    }
}

module.exports = HomeService;
