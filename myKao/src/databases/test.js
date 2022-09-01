//  测试创建数据库

const createDatabase = require('./createDatabase')

createDatabase().then(
    rec => {
        console.log(rec)
    }
).catch(
    rej => {
        console.log(rej)
    }
)