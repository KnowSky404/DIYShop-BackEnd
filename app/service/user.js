'use strict'

const Service = require('egg').Service

class UserService extends Service {
    async ip() {
        const API = 'https://apis.map.qq.com/ws/location/v1/ip'//腾讯地图API接口
        const KEY = 'LX6BZ-LG733-GHH37-3ZXBJ-HCMUK-FEBMA'//开发者密钥
        let res = await this.ctx.curl(API, {
            method: 'GET',
            data: {
                key: KEY
            }
        })
        return JSON.parse(res.data).result
    }
    async info(email, password) {
        const user = this.app.userModel
        let res = await user.findOne({ email, password }, (err, data) => {
            if (err) {
                return { msg: 'Database Error!' }
            }
            return data
        })
        return res
    }
    async signup(email, password, name, bio) {
        const user = this.app.userModel
        let res = await user.findOneAndUpdate({ email, password, name, bio }, { upsert: true }, (err, data) => {
            if (err) {
                return {
                    msg: 'Database Error!'
                }
            }
            return 'OKay!'
        })
        return res
    }
}

module.exports = UserService
