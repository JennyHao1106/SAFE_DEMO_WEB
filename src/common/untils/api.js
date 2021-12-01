import axios from 'axios'
import store from '../../store/index'
let baseUrl  = 'http://localhost:3000';
let api={}
api.queryProdData=function(type){
    axios.get(baseUrl+'/history/list',{
        params:{
            carme:type
        }
    }).then(res=>{
        if(type ==1){
            store.commit('setFaceData',res.data.data)
        }else if(type==3){
            store.commit('setProdData',res.data.data)
        }
        
    }).catch(err=>{
        console.log(err)
    })
}

export default api;


