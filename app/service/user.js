'use strict'

const Service = require('egg').Service

class UserService extends Service {
    async userIP() {
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
    async userInfo(email, password) {
        let user = this.app.userModel
        let res = await user.find({ email, password })
        return res
    }
}

module.exports = UserService
