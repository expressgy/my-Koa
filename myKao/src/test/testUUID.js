//  测试UUID

const { v4: uuidv4 } = require('uuid');
//  需要去重- 然后转换成字符串
const uuid=uuidv4().split('-').join("")

console.log(uuid.length)