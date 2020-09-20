import Vue from "vue"   
import Vuex from "vuex"  

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        author:"",
        books:[]
    },
    mutations: {
        CHANGE_AUTHOR: (state,payload)=>state.author = payload,
        CHANGE_BOOKS: (state,payload)=>state.books = payload

        
    },  

})