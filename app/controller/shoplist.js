'use strict';

const Controller = require('egg').Controller;

class ShoplistController extends Controller {
    async echo() {
        this.ctx.body = this.service.shoplist.echo()
    }
    async shoplists() {
        const { ctx, service } = this
        ctx.body = await service.shoplist.getShopList()
    }
}

module.exports = ShoplistController;
