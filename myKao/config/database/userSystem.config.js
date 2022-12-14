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
    },{
        tableName: "user_role",
        comment: "角色表",
    },{
        tableName: "user_authority",
        comment: "权限表",
    },{
        tableName: "user_relation_role",
        comment: "用户角色关联表",
    },{
        tableName: "user_relation_authority",
        comment: "用户权限关联表",
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
            type: "VARCHAR(128)",
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
        {
            name: "person_id",
            type: "VARCHAR(18)",
            attribute: ["NOT NULL"],
            comment: "身份证"
        },
        {
            name: "phone",
            type: "BIGINT(11)",
            attribute: ["NOT NULL"],
            comment: "电话"
        },
        {
            name: "mail",
            type: "VARCHAR(64)",
            attribute: ["NOT NULL"],
            comment: "邮箱"
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
            name: "person_id",
            type: "VARCHAR(18)",
            attribute: ["NOT NULL"],
            comment: "身份证"
        },
        {
            name: "address",
            type: "VARCHAR(256)",
            attribute: ["NOT NULL"],
            comment: "住址"
        },
        {
            name: "country",
            type: "VARCHAR(256)",
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
            type: "VARCHAR(64)",
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
        {
            name: "phone",
            type: "BIGINT(11)",
            attribute: ["NOT NULL"],
            comment: "电话"
        },
        {
            name: "mail",
            type: "VARCHAR(128)",
            attribute: ["NOT NULL"],
            comment: "邮箱"
        },
        {
            name: "updatetime",
            type: "BIGINT(13)",
            attribute: ["NOT NULL"],
            comment: "信息最新时间"
        },
    ]
}

//  角色表
const user_role = {
    tableName: "user_role",
    comment: "角色表",
    field: [
        {
            name: "id",
            type: "INT",
            attribute: ["AUTO_INCREMENT", "PRIMARY KEY"],
            comment: "自增id"
        },
        {
            name: "role_name",
            type: "VARCHAR(32)",
            attribute: ["NOT NULL"],
            comment: "角色名称"
        },
        {
            name: "role_remarks",
            type: "VARCHAR(128)",
            attribute: ["DEFAULT '角色备注'"],
            comment: "角色备注"
        },
    ]
}

//  权限表
const user_authority = {
    tableName: "user_authority",
    comment: "权限表",
    field: [
        {
            name: "id",
            type: "INT",
            attribute: ["AUTO_INCREMENT", "PRIMARY KEY"],
            comment: "自增id"
        },
        {
            name: "authority_name",
            type: "VARCHAR(32)",
            attribute: ["NOT NULL"],
            comment: "权限名称"
        },
        {
            name: "type",
            type: "INT(2)",
            attribute: ["DEFAULT 0"],
            comment: "权限类型"
        },
        {
            name: "grade",
            type: "INT(2)",
            attribute: ["DEFAULT 0"],
            comment: "权限类型"
        },
        {
            name: "sequence",
            type: "INT(3)",
            attribute: ["DEFAULT 0"],
            comment: "序列"
        },
        {
            name: "authority_remarks",
            type: "VARCHAR(128)",
            attribute: ["DEFAULT '权限备注'"],
            comment: "权限备注"
        },
    ]
}
//  角色关联表
const user_relation_role = {
    tableName: "user_relation_role",
    comment: "用户角色关联表",
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
            comment: "用户uuid"
        },
        {
            name: "role_id",
            type: "INT",
            attribute: ["DEFAULT 0"],
            comment: "角色id"
        },
    ]
}
//  权限关联表
const user_relation_authority = {
    tableName: "user_relation_authority",
    comment: "用户权限关联表",
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
            comment: "用户uuid"
        },
        {
            name: "authority_id",
            type: "INT",
            attribute: ["DEFAULT 0"],
            comment: "权限id"
        },
    ]
}

module.exports = {
    user_login,
    user_info,
    user_info_other,
    user_role,
    user_authority,
    user_relation_role,
    user_relation_authority
}