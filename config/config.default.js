exports.keys = '<littlecontrol@qq.com>'
exports.mongoose = {
    client: {
        url: 'mongodb://127.0.0.1/diy_shop',
        options: {},
        plugins: []
        // mongoose global plugins, expected a function or an array of function and options
        // plugins: [createdPlugin, [updatedPlugin, pluginOptions]],
    }
}
exports.security = {
    csrf: {
        queryName: '_csrf',
        bodyName: '_csrf',
        headerName: '_csrf'
    },
    domainWhiteList: ['http://localhost:8080']
}
