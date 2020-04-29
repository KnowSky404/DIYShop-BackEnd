'use strict';

const Service = require('egg').Service;

class ShoplistService extends Service {
    async echo() {
        return 'This is shoplist'
    }
    async getShopList() {
        let shopList = this.app.shopListModel
        let res = await shopList.find()
        return res
    }
}

module.exports = ShoplistService;
