const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        this.ctx.body = 'Hello world'
    }
    banner() {
        this.ctx.body = this.service.home.getBanner()
    }
}

module.exports = HomeController;