/**
 * 测试初始化用户系统表
 * */
const run = require('../databases/init/userSystem')

run().then(
    rec => {
        console.log(rec);
    }
).catch(
    e => {
        console.log(e);
    }
)