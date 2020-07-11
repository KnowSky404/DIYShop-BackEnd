'use strict';

const Service = require('egg').Service;

class SearchService extends Service {
    async shops(keyword) {
        const shopList = this.app.shopListModel
        let reg = new RegExp('[' + keyword + ']+', 'i')
        // console.log(reg)
        const res = await shopList.find({ name: reg })
        return res
    }
}

module.exports = SearchService;
