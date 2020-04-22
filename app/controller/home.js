const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        this.ctx.body = 'Hello world'
    }
    async banners() {
        // let banners = this.service.home.getBanners()
        this.ctx.body = await this.service.home.getBanners()
    }
}

module.exports = HomeController;