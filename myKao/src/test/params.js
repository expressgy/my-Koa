const axios = require('axios');

axios({
    method: 'get',
    url: 'http://localhost:3000',
    params:{
        name: 'params',
        method:'get'
    }
})
    .then(res => {
        console.log(res.data);
    }).catch(error => {
    console.log(error);
});

// axios({
//     method: 'get',
//     url: 'http://localhost:3000',
//     data:{
//         name: 'params',
//         method:'get'
//     }
// })
//     .then(res => {
//         console.log(res.data);
//     }).catch(error => {
//     console.log(error);
// });

axios({
    method: 'post',
    url: 'http://localhost:3000',
    params:{
        name: 'params',
        method:'get'
    }
})
    .then(res => {
        console.log(res.data);
    }).catch(error => {
    console.log(error);
});
axios({
    method: 'post',
    url: 'http://localhost:3000',
    data:{
        name: 'data',
        method:'get'
    }
})
    .then(res => {
        console.log(res.data);
    }).catch(error => {
    console.log(error);
});