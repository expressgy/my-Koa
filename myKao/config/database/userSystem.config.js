/**
 * 用户系统表结构
 * */

const tableNameList = [
    {
        name: "user_login",
        comment: "用户登录表",
    },
    {
        name: "user_info",
        comment: "用户信息表",
    },
    {
        name: "user_info_other",
        comment: "用户其他信息表"
    }
]


//  范例
const exampleTableName = {
    tableName: "exampleTableName",
    comment: "xxx表",
    field: [
        {
            name: "字段名称",
            type: "类型和长度",
            attribute: ["AUTO_INCREMENT", "PRIMARY KEY"],// 属性
            comment: "自增id"//   备注
        },
    ]
}

//  用户登录表结构
const user_login = {
    tableName: "user_login",
    comment: "用户登录表",
    field: [
        {
            name: "id",
            type: "INT",
            attribute: ["AUTO_INCREMENT", "PRIMARY KEY"],
            comment: "自增id"
        },
        {
            name: "user_uuid",
            type: "VARCHAR(32)",
            attribute: ["NOT NULL"],
            comment: "用户UUID"
        },
        {
            name: "user_password",
            type: "VARCHAR(256)",
            attribute: ["NOT NULL"],
            comment: "加密密码"
        },
        {
            name: "password_createtime",
            type: "BIGINT(13)",
            attribute: ["NOT NULL"],
            comment: "密码创建时间"
        },
        {
            name: "status",
            type: "INT(1)",
            attribute: ["NOT NULL", "DEFAULT 0"],
            comment: "密码可用状态"
        },
    ]
}

//  用户信息表结构
const user_info = {
    tableName: "user_info",
    comment: "用户信息表",
    field: [
        {
            name: "user_uuid",
            type: "VARCHAR(32)",
            attribute: ["PRIMARY KEY"],
            comment: "用户的UUID 主键"
        },
        {
            name: "username",
            type: "VARCHAR(32)",
            attribute: ["NOT NULL"],
            comment: "用户名"
        },
        {
            name: "username_createtime",
            type: "BIGINT(13)",
            attribute: ["NOT NULL"],
            comment: "用户创建时间"
        },
        {
            name: "status",
            type: "INT(1)",
            attribute: ["NOT NULL", "DEFAULT 0"],
            comment: "可用状态"
        },
    ]
}

//  用户其他信息表
const user_info_other = {
    tableName: "user_info_other",
    comment: "用户其他信息表",
    field: [
        {
            name: "user_uuid",
            type: "VARCHAR(32)",
            attribute: ["PRIMARY KEY"],
            comment: "用户的UUID 主键"
        },
        {
            name: "resident_id",
            type: "VARCHAR(18)",
            attribute: ["NOT NULL"],
            comment: "身份证"
        },
        {
            name: "address",
            type: "BIGINT(18)",
            attribute: ["NOT NULL"],
            comment: "住址"
        },
        {
            name: "sex",
            type: "INT(1)",
            attribute: ["NOT NULL", "DEFAULT 9"],
            comment: "性别"
        },
        {
            name: "birthday",
            type: "INT(8)",
            attribute: ["NOT NULL"],
            comment: "出生日期"
        },
        {
            name: "nick_name",
            type: "VARCHAR(32)",
            attribute: ["NOT NULL"],
            comment: "昵称"
        },
        {
            name: "personal_profile",
            type: "VARCHAR(256)",
            attribute: ["NOT NULL"],
            comment: "个人简介"
        },
        {
            name: "slogan",
            type: "VARCHAR(64)",
            attribute: ["NOT NULL"],
            comment: "标语"
        },
        {
            name: "avatar",
            type: "VARCHAR(64)",
            attribute: ["NOT NULL"],
            comment: "头像"
        },
        {
            name: "background",
            type: "VARCHAR(64)",
            attribute: ["NOT NULL"],
            comment: "背景"
        },

    ]
}
module.exports = {
    user_login,
    user_info,
    user_info_other
}