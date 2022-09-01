//  测试获取纳秒时间戳


const start = process.hrtime.bigint(); //纳秒时间戳
const start1 = new Date().getTime()
//
// console.log(start)
// console.log(start1)




setTimeout(() => {
    // const end = hrtime.bigint();
    // 191052633396993n

    console.log(process.hrtime.bigint())
    // Benchmark took 1154389282 nanoseconds
}, 1000);