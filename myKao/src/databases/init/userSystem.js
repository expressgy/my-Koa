const {createConnectionDatabase} = require('../createConnection')


//  运行初始化用户系统表程序
function run() {
    return new Promise(async (rec, rej) => {
        let connect = null;
        try{
            //  数据库连接成功
            connect = await createConnectionDatabase()
        }catch (e){
            //  数据库连接失败
            rej(e)
        }

        /**
         * 开始初始化表
         * */

        //  用户登录表
        initUserLoginTable(connect.data)
    })
}

//  用户登录表
function initUserLoginTable(connect){
    return new Promise(async (rec, rej) => {
        const UserLoginTableSQL = 'Create Table If Not Exists user_login (' +
            'id INT AUTO_INCREMENT PRIMARY KEY,' + //   自增id
            'user_uuid varchar(32),' + //   用户的UUID主键
            'passwd varchar(256),' + // 用户密码
            'createtime bigint(13),' +
            'status int(1))';
        connect.query(UserLoginTableSQL, async (err,result) => {
            if(err){
                rej({
                    status:false,
                    tableName:'UserLoginTable',
                    message:'数据库创建失败。',
                    code:err.code,
                    errno:err.errno,
                    sqlMessage:err.sqlMessage
                })
            }else{
                rec({
                    status:true,
                    tableName:'UserLoginTable',
                    message:'数据库创建成功。'
                })
            }
        })
    })
}

