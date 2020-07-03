import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state:{
        token: null,
        user: null,
        isUserLogIn: false
    },
    actions: {
        setToken({commit}, token){
            commit('setToken', token)

        },
        setUser({commit}, user){
            commit('setUser', user)
        }

    },

    mutations:{
        setToken(state, token){
            state.token = token
            if(token){
                state.isUserLogIn = true
            }else{
                state.isUserLogIn = false
            }
        },
        setUser(state,user){
            state.user = user
        }
    }

})