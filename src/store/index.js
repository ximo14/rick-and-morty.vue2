import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
            email: '',
            isLoggedIn: false,
        }
    },
    mutations: {
        setIsLoggedIn(state, payload) {
            state.user.isLoggedIn = payload.isLoggedIn;
            state.user.email = state.user.isLoggedIn ? payload.email : '';
        }
    },
    actions: {
        async setIsLoggedIn(state, payload) {
            state.commit("setIsLoggedIn", payload);
        }
    },
    modules: {

    },
    getters: {
        getUser: state => state.user

    }
})