import Vue from 'vue'
import Vuex from 'vuex'

import LoginModule from './module/login';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        login:LoginModule,
    }
});

export default store;
