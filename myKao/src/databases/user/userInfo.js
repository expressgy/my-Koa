/**
 * 用户信息表
 * */
const {SIMP} = require('../mysqlsBase')

const table  = 'user_info'

const SQL = SIMP(table)

module.exports = SQL