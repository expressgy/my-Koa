/**
 * 1. 创建数据库
 * 2. 初始化数据表
 * 3. 导入初始数据
 * 4. 提供数据接口
 * */
const createDatabase = require('./createDatabase');//   创建数据库
const createUserTable = require('./init/userSystem');// 创建用户系统表



module.exports = {
    createDatabase,
    createUserTable
}
