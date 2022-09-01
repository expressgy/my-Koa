/**
 * 引入依赖
 * */

const app = require('../app')
    , http = require('http')
    , config = require('../config/default.config')
    , _console = require('@michaelray/console-color')
    , net = require('net')


console.time('> Web Start Use'.blue)
start()

/**
 * 开始函数
 * */
async function start(){
    const server = http.createServer(app.callback());
    config.PORT = await testPort(config.PORT)
    server.listen(config.PORT)
    server.on("listening", onListening)
    server.on("error", onError)
}


/**
 * 启动
 * */
function onListening(port){
    console.clear();
    _console.info(`> Web System Name ${config.PROJECT_NAME.red}`)
    _console.info(`> httpServer listening in http://localhost:${config.PORT}`);
    const startedTime = new Date().getTime()
    console.timeEnd('> Web Start Use'.blue)
    // console.group('-----------demo1:use system console function-----------');
    // _console.info('info');// 绿色
    // _console.debug('debug');//   蓝色
    // _console.warn('warn');// 黄色
    // _console.error('error');//   红色
}

/**
 * 出错
 * */
function onError(error){
    _console.error('> httpServer Error!');
    console.error(error);
    process.exit(1);
}

/**
 * 探测端口是否占用
 * */
async function testPort(port){
    return new Promise(rec => {
        const server = net.createServer().listen(port)

        server.on('listening', function () { // 执行这块代码说明端口未被占用
            server.close() // 关闭服务
            rec(port)
        })
        server.on('error', async function (err) {
            if (err.code === 'EADDRINUSE') { // 端口已经被使用
                _console.warn('The port【' + port + '】 is occupied.')
                port++;
                if(port < 65535){
                    rec(await testPort(port))
                }else{
                    rec(config.PORT)
                }
            }
        })
    })
}
