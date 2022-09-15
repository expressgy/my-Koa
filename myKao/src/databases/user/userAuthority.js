/**
 * 角色权限表
 * */
const {SIMP} = require('../mysqlsBase')

const table  = 'user_authority'

const SQL = SIMP(table)

module.exports = SQL