module.exports = app => {
    const { router, controller } = app
    router.get('/', controller.home.index)
    router.get('/ip', controller.user.ip)
    router.get('/banners', controller.home.banners)
    router.get('/shoplist', controller.shop.shoplists)
    router.post('/user', controller.user.info)
    router.post('/signup', controller.user.signup)
    router.post('/shopinfo', controller.shop.shopinfo)
    router.get('/search', controller.search.shops)
}
