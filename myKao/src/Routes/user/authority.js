/**
 * 权限
 * */

const router = require('koa-router')();

router.prefix('/authority')

//  创建权限
router.post('/create', async ctx => {
    const parameter = ctx.request.body
    ctx.body = parameter
})

//  删除权限
router.del('/delete', async ctx => {
    const parameter = ctx.request.body
    ctx.body = parameter
})

//  修改权限
router.put('/update', async ctx => {
    const parameter = ctx.request.body
    ctx.body = parameter
})

//  获取当前角色权限列表
router.get('/getMyAuthorityList', async ctx => {
    const parameter = ctx.request.body
    ctx.body = parameter
})

//  获取所有权限列表
router.get('/getAllAuthorityList', async ctx => {
    const parameter = ctx.request.body
    ctx.body = parameter
})

//  添加角色权限关联
router.post('/relation/add', async ctx => {
    const parameter = ctx.request.body
    ctx.body = parameter
})

//  删除角色权限关联
router.post('/relation/reduce', async ctx => {
    const parameter = ctx.request.body
    ctx.body = parameter
})

//  清空权限关联
router.post('/relation/clear', async ctx => {
    const parameter = ctx.request.body
    ctx.body = parameter
})

module.exports = router.routes()
