//
import axios from './request';
const base = {
    baseUrl :'/api',
    banner: '/our',
    postComments:'/comments'
}
const banner = {
    getData() {
        return axios.get(base.baseUrl + base.banner, { params: { id: 'ximing' } })
    }
}
const comments = {
    postData(data) {
        return axios.post(base.baseUrl + base.postComments,data)
    }
}
export default {
    banner,
    comments
}