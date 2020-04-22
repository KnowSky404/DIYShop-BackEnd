'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
    getBanner() {
        return [
            {
                url: 'https://s1.ax1x.com/2020/04/22/JNij8P.md.jpg',
                target: ''
            },
            {
                url: 'https://s1.ax1x.com/2020/04/22/JNivgf.md.jpg',
                target: ''
            },
            {
                url: 'https://s1.ax1x.com/2020/04/22/JNFSKS.md.jpg',
                target: ''
            }
        ]
    }
}

module.exports = HomeService;
