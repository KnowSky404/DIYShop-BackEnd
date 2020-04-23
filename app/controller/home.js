const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        this.ctx.body = await this.service.home.index()
    }
    async banners() {
        this.ctx.body = await this.service.home.getBanners()
    }
}

module.exports = HomeController;