module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/user', controller.user.echo)
    router.get('/user/:name', controller.user.info);
    router.get('/ip', controller.user.ip)
    router.get('/banner', controller.home.banner)
}
