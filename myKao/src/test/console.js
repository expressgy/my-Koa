const init = require('../tools/console/index')

init()

console.time()

// console.info('xs')

// console.trace()

function start(){
    try{
        throw new Error()
    }catch(e){
        console.log(e)
        // console.trace()
    }
}

start2()

function start2(){
    // start()
    console.trace()
    console.timeEnd()
}