/**
 * 数据操作的方法封装
 * */
const {init, exec, sql, transaction} = require('mysqls')
const config = require("../../config/default.config");

init({
    host: config.DATABASE_INIT.host,
    user: config.DATABASE_INIT.user,
    password: config.DATABASE_INIT.password,
    database: config.DATABASE_INIT.database,
    port: config.DATABASE_INIT.port,
})


function INSERT(table, data) {
    return sql
        .table(table)
        .data(data)
        .insert()
}

function DELETE(table, data) {
    return sql
        .table(table)
        .where(data)
        .delet();
}

function UPDATE(table, data, where) {
    return sql
        .table(table)
        .data(data)
        .where(where)
        .update()
}

function SELECT(table, field, where) {
    return sql
        .table(table)
        .field(field)
        .where(where)
        .select()
}

function SIMP(table) {
    return {
        i(data){
            return exec(
                INSERT(
                    table,
                    data
                )
            )
        },
        d(data){
            return exec(
                DELETE(
                    table,
                    data
                )
            )
        },
        u(data, where){
            return exec(
                UPDATE(
                    table,
                    data,
                    where
                )
            )
        },
        s(field, where){
            return exec(
                SELECT(
                    table,
                    field,
                    where
                )
            )
        }
    }
}

module.exports = {
    INSERT,
    DELETE,
    UPDATE,
    SELECT,
    sql,
    exec,
    transaction,
    SIMP
}