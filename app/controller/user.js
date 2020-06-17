'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async ip() {
        const { ctx, service } = this
        let ip = await service.user.userIP()
        ctx.body = ip
    }
    async userInfo() {
        const { ctx, service } = this
        const { email, password } = ctx.request.body
        let res = await service.user.userInfo(email, password)
        ctx.body = res
    }
}

module.exports = UserController;
