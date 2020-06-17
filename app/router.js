module.exports = app => {
    const { router, controller } = app
    router.get('/', controller.home.index)
    router.get('/ip', controller.user.ip)
    router.get('/banners', controller.home.banners)
    router.get('/shoplist', controller.shoplist.shoplists)
    router.post('/user', controller.user.userInfo)
}
