'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async ip() {
        const { ctx, service } = this
        let ip = await service.user.ip()
        ctx.body = ip
    }
    async info() {
        const { ctx, service } = this
        const { email, password } = ctx.request.body
        let res = await service.user.info(email, password)
        ctx.body = res
    }
    async signup() {
        const { ctx, service } = this
        const { email, password, name, bio } = ctx.request.body
        let res = await service.user.signup(email, password, name, bio)
        console.log(res)
        if (res.resCode === 200) {
            ctx.body = {
                resCode: 200,
                msg: res.msg
            }
        } else {
            ctx.body = {
                resCode: 500,
                msg: res.msg
            }
        }
    }
}

module.exports = UserController;
