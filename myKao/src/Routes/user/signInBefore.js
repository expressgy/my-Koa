/**
 * 登录前行为，不需要Token
 * */

const router = require('koa-router')();

router.prefix('/base')

//  登录
router.post('/signIn', async ctx => {
    const parameter = ctx.request.body
    ctx.body = parameter
})

//  注册
router.post('/signUp', async ctx => {
    const parameter = ctx.request.body
    ctx.body = parameter
})

//  发送验证码
router.get('/sendCode', async ctx => {
    const parameter = ctx.request.body
    ctx.body = parameter
})

//  用户名查重
router.get('/verificationUsernameRepeat', async ctx => {
    const parameter = ctx.request.body
    ctx.body = parameter
})

//  重置密码
router.post('/resetPassword', async ctx => {
    const parameter = ctx.request.body
    ctx.body = parameter
})


module.exports = router.routes()