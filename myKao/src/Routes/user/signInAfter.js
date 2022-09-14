/**
 * 账户行为
 * */
const router = require('koa-router')();

router.prefix('/account')

//  注销账户
router.post('/writeoff', async ctx => {
    const parameter = ctx.request.body
    ctx.body = parameter
})

//  退出登录
router.post('/signout', async ctx => {
    const parameter = ctx.request.body
    ctx.body = parameter
})

//  修改密码
router.put('/passwordUpdate', async ctx => {
    const parameter = ctx.request.body
    ctx.body = parameter
})

module.exports = router.routes()