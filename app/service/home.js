'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
    index() {
        return 'Hello, Home'
    }
    async getBanners() {
        let banners = this.app.bannerModel
        let res = await banners.find()
        //这里返回的一个数组对象
        return res
    }
}

module.exports = HomeService;
