module.exports = app => {
    const { router, controller } = app
    router.get('/', controller.home.index)
    router.get('/user', controller.user.index)
    router.get('/user/:name', controller.user.info)
    // router.get('/user/info', controller.user.info)
    router.get('/ip', controller.user.ip)
    router.get('/banners', controller.home.banners)
    router.get('/shoplist', controller.shoplist.shoplists)
}
