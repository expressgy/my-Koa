/**
 * 引入依赖
 * */

const app = require('../app')
    , http = require('http')
    , config = require('../config/default.config')
    , _console = require('@michaelray/console-color');

const server = http.createServer(app.callback());

server.listen(config.PORT)
server.on("listening", onListening)


/**
 * 启动
 * */
function onListening(){
    console.clear();
    _console.info(`> Web System Name ${config.PROJECT_NAME.red}`)
    _console.info(`> httpServer listening in http://localhost:${config.PORT}`);
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
