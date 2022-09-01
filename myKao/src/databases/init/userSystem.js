const {createConnectionDatabase} = require('../../tools/database/createConnection') //  来源于工具类中的打开数据库
    , formatSQL = require('../../tools/database/formatSQL') //  来源于工具类中的格式化SQL程序
    , tableStruct = require('../../../config/database/userSystem.config') //    来源于配置文件的用户系统数据表结构配置文件

//  运行初始化用户系统表程序
function run() {
    return new Promise(async (rec, rej) => {
        let connect = null;
        try {
            //  数据库连接成功
            connect = await createConnectionDatabase()
        } catch (e) {
            //  数据库连接失败
            rej(e)
        }

        /**
         * 开始初始化表
         * */
        const messageList = []

        for(let tableStructDataName of Object.keys(tableStruct)){
            const table = tableStruct[tableStructDataName]
            try {
                //  数据表创建成功
                const result = await createTable(connect.data, table)
                messageList.push(result)
            } catch (e) {
                //  数据表创建失败
                messageList.push(e)
            }
        }
        //  结束
        connect.data.destroy()
        rec(messageList)
    })
}


//  创建表程序
function createTable(connect, tableStructData){
    return new Promise(async (rec, rej) => {
        const SQL = formatSQL(tableStructData)
        connect.query(SQL, async (err, result) => {
            if (err) {
                rej({
                    status: false,
                    tableName: tableStructData.tableName,
                    message: '数据表创建失败。',
                    code: err.code,
                    errno: err.errno,
                    sqlMessage: err.sqlMessage
                })
            } else {
                rec({
                    status: true,
                    tableName: tableStructData.tableName,
                    message: '数据库创建成功。'
                })
            }
        })
    })
}

module.exports = run
