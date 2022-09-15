/**
 * 权限角色关联表表
 * */
const {SIMP} = require('../mysqlsBase')

const table  = 'user_relation_authority'

const SQL = SIMP(table)

module.exports = SQL