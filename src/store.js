import Vue from "vue"   
import Vuex from "vuex"  

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        author: ""
    },
    mutations: {
        CHANGE_AUTHOR: (state,payload)=>state.author = payload
        
    },  

})