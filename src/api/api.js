//
import axios from './request';
const base = {
    baseUrl :'/api',
    banner: '/our',
    postComments:'/comments'
}
const banner = {
    getData() {
        return axios.get(base.baseUrl + base.banner, { params: { username: 'ximing' } })
    }
}
const comments = {
    postData() {
        return axios.post()
    }
}
export default {
    banner
}