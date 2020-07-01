'use strict';

const Service = require('egg').Service;

class ShoplistService extends Service {
    async echo() {
        return 'This is shoplist'
    }
    async getShopList() {
        const shopList = this.app.shopListModel
        const res = await shopList.find()
        return res
    }
    async postShopInfo(id) {
        const shopInfo = this.app.shopInfoModel
        let res = {}
        await shopInfo.findById(id, (err, data) => {
            if (err) {
                return res = {}
            } else {
                return res = data
            }
        })
        return res
    }
}

module.exports = ShoplistService;
