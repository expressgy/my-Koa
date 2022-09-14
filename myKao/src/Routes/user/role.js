/**
 * 角色
 * */

const router = require('koa-router')();

router.prefix('/role')

//  创建角色
router.post('/create', async ctx => {
    const parameter = ctx.request.body
    ctx.body = parameter
})

//  删除角色
router.del('/delete', async ctx => {
    const parameter = ctx.request.body
    ctx.body = parameter
})

//  修改角色
router.put('/update', async ctx => {
    const parameter = ctx.request.body
    ctx.body = parameter
})

//  获取当前用户角色列表
router.get('/getMyRoleList', async ctx => {
    const parameter = ctx.request.body
    ctx.body = parameter
})

//  获取所有角色列表
router.get('/getAllRoleList', async ctx => {
    const parameter = ctx.request.body
    ctx.body = parameter
})

//  添加角色用户关联
router.post('/relation/add', async ctx => {
    const parameter = ctx.request.body
    ctx.body = parameter
})

//  删除角色用户关联
router.post('/relation/reduce', async ctx => {
    const parameter = ctx.request.body
    ctx.body = parameter
})

module.exports = router.routes()