/**
 * 用户角色表
 * */
const {SIMP} = require('../mysqlsBase')

const table  = 'user_role'

const SQL = SIMP(table)

module.exports = SQL