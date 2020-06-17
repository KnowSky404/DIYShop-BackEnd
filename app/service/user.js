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
        let res = await user.findOne({ email, password }, (err, data) => {
            if (err) {
                console.log('Database Error!')
                return { msg: 'Database Error!' }
            }
            return data
        })
        return res
    }
}

module.exports = UserService
