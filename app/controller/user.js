'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async echo() {
        this.ctx.body = "Nothing To Do"
    }
    async info() {
        const name = this.ctx.params.name
        const userInfo = await this.ctx.service.user.userInfo(name)
        this.ctx.body = userInfo
    }
    async ip() {
        let ip = await this.ctx.service.user.userIP()
        this.ctx.body = ip
    }

}

module.exports = UserController;
