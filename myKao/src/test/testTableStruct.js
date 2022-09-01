/**
 * 测试数据表格式化程序
 * */

const tableStruct = {
    tableName: "user_login",
    comment: "用户登录表",
    field: [
        {
            name:"id",
            type:"INT",
            attribute:["AUTO_INCREMENT", "PRIMARY KEY"],
            comment: "自增id"
        },
        {
            name:"user_uuid",
            type:"VARCHAR(32)",
            attribute:["NOT NULL"],
            comment: "用户UUID"
        },
        {
            name:"user_password",
            type:"VARCHAR(256)",
            attribute:["NOT NULL"],
            comment: "加密密码"
        },
        {
            name:"password_createtime",
            type:"BIGINT(13)",
            attribute:["NOT NULL"],
            comment: "密码创建时间"
        },
        {
            name:"status",
            type:"INT(1)",
            attribute:["NOT NULL", "default 0"],
            comment: "密码可用状态"
        },
    ]
}
let field = ''
for(let i of tableStruct.field){
    field += `${i.name} ${i.type} ${i.attribute.join(' ')} comment "${i.comment}",`
}
field = field.slice(0, field.length - 1)

let SQL = `Create Table If Not Exists ${tableStruct.tableName} (${field})comment = ${tableStruct.comment};`

console.log(SQL)