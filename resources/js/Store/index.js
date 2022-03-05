import Vue from 'vue'
import Vuex from 'vuex'

import ProductModule from './module/product';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        product:ProductModule,
    }
});

export default store;
