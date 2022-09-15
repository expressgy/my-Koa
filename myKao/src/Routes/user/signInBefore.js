/**
 * 登录前行为，不需要Token
 * */

const router = require('koa-router')();
const api = require(global.path + '/src/API/user')
const makeUUID = require(global.path + '/src/tools/uuid')

router.prefix('/base')

//  登录
router.post('/signIn', async ctx => {
    const parameter = ctx.request.body
    ctx.body = parameter
})

//  注册
router.post('/signUp', async ctx => {
    const parameter = ctx.request.body
    if(global.cfg.user.sign.mailVerf || global.cfg.user.sign.phoneVerf){
        if(parameter.code.length != global.cfg.user.sign.length){
            ctx.body = global.msg.failed({}, "验证码错误。")
            return
        }else{
            //  验证系统
        }
    }
    //  创建时间
    const createTime = new Date().getTime()
    //  UUID
    const uuid = makeUUID()
    //  用户表信息
    const userInfo = {
        user_uuid:uuid,
        username: parameter.username,
        username_createtime:createTime,
        person_id:parameter.personId,
        phone:Number(parameter.phone) || 0,
        mail:parameter.mail
    }
    //  登陆表信息
    const userPassword = {
        user_uuid: uuid,
        user_password:parameter.password,
        password_createTime:createTime
    }
    //  用户其他信息表信息
    const userInfoOther = {
        user_uuid:uuid,
        person_id:parameter.personId,
        address:parameter.address,
        country:parameter.country,
        sex:Number(parameter.sex) || 0,
        birthday: Number(parameter.birthday) || 0,
        nick_name:parameter.nickname,
        personal_profile:parameter.personalProfile,
        slogan:parameter.slogan,
        avatar:parameter.avatar,
        background: parameter.background,
        phone:Number(parameter.phone) || 0,
        mail:parameter.mail,
        updatetime:createTime
    }
    try{
        let data;
        data = await api.userInfo.i(userInfo)
        data = await api.userLogin.i(userPassword)
        data = await api.userInfoOther.i(userInfoOther)
        ctx.body = global.msg.success(data,'用户创建成功！')
    }catch (e){
        ctx.body = global.msg.success(e,'创建用户失败！')
    }
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