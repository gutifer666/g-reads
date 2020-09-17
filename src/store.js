import Vue from "vue"   
import Vuex from "vuex"  

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        authorStore: ""
    },
    mutations: {
        CHANGE_AUTHOR: (state,newAuthor)=>state.authorStore = newAuthor
        
    }
})