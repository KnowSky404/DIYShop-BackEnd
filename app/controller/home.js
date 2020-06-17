const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this
        ctx.body = 'Hello, home index'
    }
    async banners() {
        const { ctx, service } = this
        ctx.body = await service.home.getBanners()
    }
}

module.exports = HomeController;