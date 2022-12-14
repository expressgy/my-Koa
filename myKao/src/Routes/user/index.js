const router = require('koa-router')();

router.prefix('/user')

router.get('/', async ctx => {
    ctx.body = '/API/user'
})
router.use(
    //  登陆前操作
    require('./signInBefore'),
    //  账户操作
    require('./signInAfter'),
    //  用户信息
    require('./userInfo'),
    //  角色
    require('./role'),
    //  权限
    require('./authority')
)

//  这里必须要使用router.routes()，多层嵌套
module.exports = router.routes()