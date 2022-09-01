const mysql = require('mysql')
    , config  = require('../../config/default.config')
    , { createConnectionNull } = require('./createConnection')

module.exports = run

//  运行初始化数据库
function run(){
    return new Promise(async (rec, rej) => {
        let connect = null;
        try{
            //  数据库连接成功
            connect = await createConnectionNull()
        }catch (e){
            //  数据库连接失败
            rej(e)
        }
        try{
            //  新建数据库成功
            rec(await createDatabase(connect.data))
            connect.destroy()
        }catch (e){
            //  新建数据库失败
            rej(e)
        }
    })
}
//  创建数据库
async function createDatabase(connect){
    return new Promise((rec, rej) => {
        //  创建数据库语句
        const SQL = `Create Database If Not Exists ?? Character Set UTF8;`
        const params = config.DATABASE_INIT.database
        connect.query(SQL, params,async (err,result) => {
            if(err){
                rej({
                    status:false,
                    message:'数据库创建失败。',
                    code:err.code,
                    errno:err.errno,
                    sqlMessage:err.sqlMessage
                })
            }else{
                rec({
                    status:true,
                    message:'数据库创建成功。'
                })
            }
        })
    })
}

