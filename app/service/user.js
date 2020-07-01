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
        let res
        await user.findOne({ email, password }, (err, data) => {
            if (err) {
                return res = {
                    resCode: 510,
                    msg: 'Database Error!'
                }
            }
            return res = {
                resCode: 200,
                msg: 'Okay',
                userInfo: data
            }
        })
        return res
    }
    async signup(email, password, name, bio) {
        const user = this.app.userModel
        let res = null
        await user.exists({ email })
            .then((resolve) => {
                if (resolve) {
                    res = {
                        resCode: 511,
                        msg: '实例对象重复!'
                    }
                    return Promise.reject('实例对象重复')
                } else {
                    return new user({ email, password, name, bio }).save()
                }
            })
            .then((resolve) => {
                if (resolve) {
                    res = {
                        resCode: 200,
                        msg: 'Signup Succeed!'
                    }
                } else {
                    res = {
                        resCode: 510,
                        msg: 'Database Error!'
                    }
                }
            })
        return res
    }
}

module.exports = UserService
