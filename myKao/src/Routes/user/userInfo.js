/**
 * 用户信息
 * */
const router = require('koa-router')();

router.prefix('/userInfo')

//  获取用户信息
router.get('/get', async ctx => {
    const parameter = ctx.request.body
    ctx.body = parameter
})

//  编辑用户信息
router.put('/update', async ctx => {
    const parameter = ctx.request.body
    ctx.body = parameter
})

module.exports = router.routes()