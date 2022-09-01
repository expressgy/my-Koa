/**
 * 添加依赖
 * */


const Koa = require('koa')//    主依赖 Koa2
    , logger = require('koa-logger')//  日志


/**
 * 创建应用程序
 * */
const app = new Koa();

app.use(logger());//    请求日志
app.use(printTime());// 时间


app.use(async ctx => {
    ctx.body = 'Hello World';
});

function printTime(){
    return async function(ctx, next){
        const start = new Date()
        await next()
        const ms = new Date() - start
        console.info(`${ctx.method} ${ctx.url} - ${ms}ms`)
    }
}

module.exports = app;