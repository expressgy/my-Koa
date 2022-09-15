/**
 * 用户其他信息表
 * */
const {SIMP} = require('../mysqlsBase')

const table  = 'user_info_other'

const SQL = SIMP(table)

module.exports = SQL