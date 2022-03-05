import help from "../../help";

const state = () => ({
    prodotti: []
});

const getters = {
    getProdotti(state){
        return state.prodotti;
    },
};

const actions = {
    async fetchProdotti({commit}){
        const response = await axios.get(`${help().linkproduct}`);
        commit('fetchProdotti', response.data);
    },

    async addProdotto({commit}, payload){
        const response = await axios.post(`${help().linkaddproduct}`, payload);
        commit('addProdotto', response.data);
    },
};

const mutations = {
    fetchProdotti(state, payload){
        state.prodotti = payload;
    },

    addProdotto(state, payload){
        state.prodotti.unshift(payload);
    },
 };

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
