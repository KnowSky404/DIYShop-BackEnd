'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    index() {
        this.ctx.body = "Hello, user"
    }
    async ip() {
        let ip = await this.ctx.service.user.userIP()
        this.ctx.body = ip
    }
    async info() {
        const email = this.ctx.params.email
        const userInfo = await this.ctx.service.user.getUser(email)
        this.ctx.body = userInfo
    }
    async userInfo() {
        const { ctx, service } = this;
        console.log(ctx.request.body)
    }
}

module.exports = UserController;
