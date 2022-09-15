/**
 * 用户系统API
 * */
//
// const userLogin = require('../databases/user/userLogin')
//     , userInfo = require('../databases/user/userInfo')
//     , userInfoOther = require('../databases/user/userInfoOther')
//     , userRole = require('../databases/user/userRole')
//     , userAuthority = require('../databases/user/userAuthority')
//     , userRealtionRole = require('../databases/user/userRelationRole')
//     , userRelationAuthority = require('../databases/user/userRelationAuthority')

module.exports = {
    userLogin : require('../databases/user/userLogin')
    , userInfo : require('../databases/user/userInfo')
    , userInfoOther : require('../databases/user/userInfoOther')
    , userRole : require('../databases/user/userRole')
    , userAuthority : require('../databases/user/userAuthority')
    , userRealtionRole : require('../databases/user/userRelationRole')
    , userRelationAuthority : require('../databases/user/userRelationAuthority')
}