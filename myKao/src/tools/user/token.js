/**
 * 生成和验证jwt
 * */
const jwt = require('jsonwebtoken');

// authorization
// Token.decrypt(ctx.header.authorization);   //    获取其中的令牌

const CFG = global.cfg ? global.cfg.encryption : require('../../../config/default.config')

module.exports = {
    encrypt: (token, time) => {
        return jwt.sign(token, CFG.encryption.secretKey, time)
    },
    decrypt: (token) => {
        try {
            let data = jwt.verify(token, CFG.encryption.secretKey);
            return {
                token:true,
                id:data
            };
        } catch (e) {
            return {
                token:false,
                data:e
            }
        }
    }
}