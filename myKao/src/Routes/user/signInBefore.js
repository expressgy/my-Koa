/**
 * 登录前行为，不需要Token
 * */

const router = require('koa-router')();
const api = require('../../API/user');
const makeUUID = require('../../tools/uuid');
const { HASH } = require('../../tools/user/encryptionString');
const {encrypt} = require('../../tools/user/token')

router.prefix('/base')

//  登录
router.post('/signIn', async ctx => {
    const parameter = ctx.request.body
    const query = 'user_uuid';
    const where = [
        {'username': parameter.username, 'mail': parameter.mail, 'phone': parameter.phone, _type: 'or'}
    ]
    const query2 = 'user_password';
    const where2 = {}
    const order = 'id desc limit 1'
    if (parameter.code) {
        ctx.body = global.msg.failed(parameter, '此功能为开发完成，请期待。')

        /**
         *
         * 未开发，验证码登录
         *
         * */

        return
    } else if (!parameter.password || !(parameter.username || parameter.mail || parameter.phone)) {
        ctx.body = global.msg.failed(parameter, '缺少关键信息，请验证！')
        return
    } else {
        try {
            let result = await api.userInfo.s(query, where)
            if (result.length != 0) {
                where2['user_uuid'] = result[0]['user_uuid']
                result = await api.userLogin.order(query2, where2, order)
                if (result[0]['user_password'] == HASH(parameter.password)) {
                    const token = {
                        username:parameter.username || parameter.mail || parameter.phone,
                        time:new Date().getTime()
                    }
                    const data = {
                        authorization: encrypt(token, global.cfg.user.login.timeLimit),
                        token
                    }
                    ctx.body = global.msg.success(data, '登陆成功！')
                    /***
                     *
                     * 需要redis存储，或者拦截验证，redis可以多系统共享
                     *
                     * */
                } else {
                    ctx.body = global.msg.failed(parameter, '用户信息和密码不匹配，请重试！')
                }
            }else{
                ctx.body = global.msg.failed(parameter, '用户信息和密码不匹配，请重试！')
            }
        } catch (e) {
            console.error(e)
            ctx.body = global.msg.failed(parameter, '系统错误，请联系管理者！')
        }
    }
})

//  注册
router.post('/signUp', async ctx => {
    const parameter = ctx.request.body
    //  判断关键信息是否齐全
    if (!(parameter.username || parameter.mail || parameter.phone) || !parameter.password) {
        ctx.body = global.msg.failed(parameter, '创建用户失败,缺少关键信息！')
        return
    }
    if (global.cfg.user.sign.mailVerf || global.cfg.user.sign.phoneVerf) {
        if (parameter.code.length != global.cfg.user.sign.length) {
            ctx.body = global.msg.failed({}, "验证码错误。")
            return
        } else {
            //  验证系统
        }
    }
    //  创建时间
    const createTime = new Date().getTime()
    //  UUID
    const uuid = makeUUID()
    //  用户表信息
    const userInfo = {
        user_uuid: uuid,
        username: parameter.username,
        username_createtime: createTime,
        person_id: parameter.personId,
        phone: Number(parameter.phone) || 0,
        mail: parameter.mail
    }
    //  登陆表信息
    const userPassword = {
        user_uuid: uuid,
        user_password: HASH(parameter.password),
        password_createTime: createTime
    }
    //  用户其他信息表信息
    const userInfoOther = {
        user_uuid: uuid,
        person_id: parameter.personId,
        address: parameter.address,
        country: parameter.country,
        sex: Number(parameter.sex) || 0,
        birthday: Number(parameter.birthday) || 0,
        nick_name: parameter.nickname,
        personal_profile: parameter.personalProfile,
        slogan: parameter.slogan,
        avatar: parameter.avatar,
        background: parameter.background,
        phone: Number(parameter.phone) || 0,
        mail: parameter.mail,
        updatetime: createTime
    }
    try {
        let data;
        data = await api.userInfo.i(userInfo)
        data = await api.userLogin.i(userPassword)
        data = await api.userInfoOther.i(userInfoOther)
        ctx.body = global.msg.success(data, '用户创建成功！')
    } catch (e) {
        ctx.body = global.msg.failed(e, '创建用户失败！')
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
    if (parameter.username) {
        try {
            const result = await api.userInfo.s('*', {'username': parameter.username})
            if (result.length == 0) {
                ctx.body = global.msg.failed(parameter.username, '不存在此用户，可以注册。')
            } else {
                ctx.body = global.msg.failed(parameter.username, '此用户已存在，请更换！')
            }
        } catch (e) {
            ctx.body = global.msg.failed(e, '查找用户失败！')
        }
    } else if (parameter.mail) {
        try {
            const result = await api.userInfo.s('*', {'mail': parameter.mail})
            if (result.length == 0) {
                ctx.body = global.msg.failed(parameter.mail, '不存在此邮箱用户，可以注册。')
            } else {
                ctx.body = global.msg.failed(parameter.mail, '此邮箱用户已存在，请更换！')
            }
        } catch (e) {
            ctx.body = global.msg.failed(e, '查找邮箱用户失败！')
        }
    } else if (parameter.phone) {
        try {
            const result = await api.userInfo.s('*', {'phone': parameter.phone})
            if (result.length == 0) {
                ctx.body = global.msg.failed(parameter.phone, '不存在此手机用户，可以注册。')
            } else {
                ctx.body = global.msg.failed(parameter.phone, '此手机用户已存在，请更换！')
            }
        } catch (e) {
            ctx.body = global.msg.failed(e, '查找手机用户失败！')
        }
    } else {
        ctx.body = global.msg.failed('', '找不到可验证项。')
    }
})

//  重置密码
router.post('/resetPassword', async ctx => {
    const parameter = ctx.request.body
    //  创建时间
    const createTime = new Date().getTime()
    if(!((parameter.username || parameter.mail || parameter.phone) || !parameter.newPassword )) {
        //  必须存在用户信息，新密码
        ctx.body = global.msg.failed(parameter, '缺少关键用户信息，请验证！')
        return
    }else if(parameter.username && parameter.mail && parameter.phone){
        //  存在三个关键信息
        try{
            const query = 'user_uuid';
            const where = [
                {'username': parameter.username, 'mail': parameter.mail, 'phone': parameter.phone}
            ];
            //  查看三个关键信息是否正确，但是存在隐患
            /**
             *
             * 存在盗用隐患
             *
             * */
            let result = await api.userInfo.s(query, where);
            if (result.length != 0) {
                const query2 = 'user_password';
                const where2 = {'user_uuid': result[0]['user_uuid']}
                const order = 'id desc limit 1';
                const userPassword = {
                    user_uuid: result[0]['user_uuid'],
                    user_password: HASH(parameter.newPassword),
                    password_createTime: createTime
                }
                //  验证旧密码是否相同
                result = await api.userLogin.order(query2, where2, order)
                if(result[0]['user_password'] != HASH(parameter.newPassword)){
                    result = await api.userLogin.i(userPassword)
                    ctx.body = global.msg.success(parameter, '重置密码成功！')
                }else{
                    ctx.body = global.msg.failed(parameter, '新密码不能与旧密码，请验证！')
                }
            }else{
                ctx.body = global.msg.failed(parameter, '用户信息不匹配，请重试！')
            }
        }catch (e){
            console.error(e)
            ctx.body = global.msg.failed(parameter, '系统错误，请联系管理者！')
        }
    }else if((parameter.username || parameter.mail || parameter.phone) && parameter.oldPassword){
        //  验证一个关键信息和旧密码
        if(parameter.oldPassword == parameter.newPassword){
            ctx.body = global.msg.failed(parameter, '新密码不能与旧密码，请验证！')
            return
        }
        //  验证旧密码
        const query = 'user_uuid';
        const where = [
            {'username': parameter.username, 'mail': parameter.mail, 'phone': parameter.phone, _type: 'or'}
        ];
        try {
            //  验证是否存在目标用户
            let result = await api.userInfo.s(query, where)
            if (result.length != 0) {
                const query2 = 'user_password';
                const where2 = {'user_uuid': result[0]['user_uuid']}
                const order = 'id desc limit 1';
                const userPassword = {
                    user_uuid: result[0]['user_uuid'],
                    user_password: HASH(parameter.newPassword),
                    password_createTime: createTime
                }
                //  验证旧密码是否相同
                result = await api.userLogin.order(query2, where2, order)
                if (result[0]['user_password'] == HASH(parameter.oldPassword)) {
                    //  重置密码
                    result = await api.userLogin.i(userPassword)
                    ctx.body = global.msg.success(parameter, '重置密码成功！')
                } else {
                    ctx.body = global.msg.failed(parameter, '用户信息和密码不匹配，请重试！')
                }
            }else{
                ctx.body = global.msg.failed(parameter, '用户信息和密码不匹配，请重试！')
            }
        } catch (e) {
            console.error(e)
            ctx.body = global.msg.failed(parameter, '系统错误，请联系管理者！')
        }
    }else if(parameter.otherData){
        //  验证其他辅助信息
        ctx.body = global.msg.failed(parameter, '其他信息验证功能尚未开发，请期待。')
    }else if(parameter.code){
        //  验证验证码
        ctx.body = global.msg.failed(parameter, '验证码验证功能尚未开发，请期待。')
    }else if(!parameter.otherData && !parameter.code && !parameter.oldPassword){
        //  不存在旧密码，不存在code，不存在其他验证信息
        ctx.body = global.msg.failed(parameter, '缺少关键信息，请验证输入。')
    }
})


module.exports = router.routes()