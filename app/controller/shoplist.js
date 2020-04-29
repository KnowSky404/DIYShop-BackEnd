'use strict';

const Controller = require('egg').Controller;

class ShoplistController extends Controller {
    async echo() {
        this.ctx.body = this.service.shoplist.echo()
    }
    async shoplists() {
        this.ctx.body = await this.service.shoplist.getShopLists()
    }
}

module.exports = ShoplistController;
