/**
 * 用户角色关联表
 * */
const {SIMP} = require('../mysqlsBase')

const table  = 'user_relation_role'

const SQL = SIMP(table)

module.exports = SQL