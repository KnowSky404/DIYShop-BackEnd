'use strict';

const Controller = require('egg').Controller;

class SearchController extends Controller {
    async shops() {
        const { ctx, service } = this
        const { keyword } = ctx.request.query
        // console.log(keyword)
        const shops = await service.search.shops(keyword)
        ctx.body = shops
    }
}

module.exports = SearchController;
