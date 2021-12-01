import axios from 'axios'
import store from '../../store/index'
let baseUrl = ''
if (process.env.NODE_ENV == 'development') {
    baseUrl = 'http://localhost:8081'
} else {
    baseUrl = 'http://api.safe.demo:3000'
}
let api = {}
api.queryProdData = function () {
    axios.get(baseUrl + '/prodsafe/history/list').then(res => {
        store.commit('setProdData', res.data.data)
    }).catch(err => {
        console.log(err)
    })
}
api.queryFaceData = function () {
    axios.get(baseUrl + '/facesafe/history/list').then(res => {
        store.commit('setFaceData', res.data.data)
    }).catch(err => {
        console.log(err)
    })
}
api.createFaceInfo = function (dirname) {
    return axios.get(baseUrl + '/faceinfo/create', {
        params: {
            dirname
        }
    })
}
api.enterFaceInfo = function(){
    return axios.get(baseUrl + '/faceinfo/enter')
}

export default api;


