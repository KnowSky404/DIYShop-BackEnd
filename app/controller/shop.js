'use strict';

const Controller = require('egg').Controller;

class ShoplistController extends Controller {
    async echo() {
        this.ctx.body = this.service.shoplist.echo()
    }
    async shoplists() {
        const { ctx, service } = this
        ctx.body = await service.shop.getShopList()
    }
    async shopinfo() {
        const { ctx, service } = this
        const { id } = ctx.request.body
        if (id.length !== 24) {
            ctx.body = {}
        } else {
            ctx.body = await service.shop.postShopInfo(id)
        }
    }
}

module.exports = ShoplistController;
