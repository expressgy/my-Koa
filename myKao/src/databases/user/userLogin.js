/**
 * 用户登录表
 * */
const {SIMP} = require('../mysqlsBase')

const table  = 'user_login'

const SQL = SIMP(table)

// SQL.i({'user_password':"Hxl1314521", 'user_uuid':'xsx', 'password_createtime':'121212'})


module.exports = SQL