/**
 * 用户登录表
 * */
const {SIMP, sql, exec} = require('../mysqlsBase')

const table = 'user_login'

const SQL = SIMP(table)

const order = (field, where, order) => {
    const result = sql
        .table(table)
        .field(field)
        .where(where)
        .order(order)
        .select()
    return exec(result)

}

// SQL.i({'user_password':"Hxl1314521", 'user_uuid':'xsx', 'password_createtime':'121212'})


module.exports = {
    ...SQL,
    order
}