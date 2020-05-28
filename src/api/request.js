//request.js
import axios from "axios";
import qs from "qs";
import router from '../router'

const toLogin = () => {
    router.push({
        path: '/'
    })
}
//错误信息处理；
const errorHandle = (status, other) => {
    switch (status) {
        case 400:
            console.log('信息校验失败');
            break;
        case 401:
            console.log('去登陆');
            break;
    }
}
//创建axios实例
var instance = axios.create({
    timeout: 5000
})
instance.defaults.headers.post['content-type'] = 'application/x-www-form-urlencoded';

//请求时间拦截
instance.interceptors.request.use(config => {
    console.log(config);
    //用qs 进行转化；
    if (config.method === "post") {
        config.data = qs.stringify(config.data)
    }
    return config
}, error => {
    return Promise.reject(error)
})
//response时拦截；
instance.interceptors.response.use(res => {
    return Promise.resolve(res)
}, error => {
    const { response } = error;
    if (response) {
        errorHandle(response.status, response.data.message)
        return Promise.reject(response)
    } else {
        console.log('断网了')
    }
})
//最后，将我们的axios实例暴露出去
export default instance;