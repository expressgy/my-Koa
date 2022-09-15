module.exports = {
    PROJECT_NAME:'myKoa',
    PORT:'3000',
    KEY:'expressgy',
    DATABASE_INIT:{
        host: 'localhost',
        user: 'root',
        password:'root',
        database: "mykoa",
        port: 3306,
    },
    //  加密
    encryption:{
        salt:'время,вперёд!',// 盐
        secretKey:"быть всегда готовым!",// 密钥
    },
    //  用户系统
    user:{
        //  注册
        sign:{
            mailVerf: false,//  邮箱验证注册
            phoneVerf:false,//  手机验证注册
            length:4,
        }
    }
}