import help from "../../help";

const state = () => ({
    prodotti: [],
    testoMessaggio: '',
    visualizzaMessaggio: false
});

const getters = {
    getProdotti(state){
        return state.prodotti;
    },

    getTestoMessaggio(state){
        return state.testoMessaggio;
    },

    getVisualizzaMessaggio(state){
        return state.visualizzaMessaggio;
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

    async deleteProdotto({commit}, idProduct){
        await axios.delete(`${help().linkproduct}`+'/'+idProduct);
        commit('rimuoviProdotto', idProduct);
        commit('deleteProdotto');
    },

    async modificaProdotto({commit}, prodotto){
        const response = await axios.put(`${help().linkproduct}`+'/'+prodotto.id, prodotto);
        commit('modificaProdotto', response.data);
    },
};

const mutations = {
    fetchProdotti(state, payload){
        state.prodotti = payload;
    },

    addProdotto(state, payload){
        state.prodotti.unshift(payload);
        state.testoMessaggio = 'Prodotto aggiunto';
        state.visualizzaMessaggio = true;
    },

    deleteProdotto(state){
        state.testoMessaggio = 'Prodotto eliminato';
        state.visualizzaMessaggio = true;
    },

    rimuoviProdotto(state, idProduct){
        state.prodotti = state.prodotti.filter(ele => ele.id !== idProduct);
    },

    modificaProdotto(state, payload){
        state.prodotti.unshift(payload);
        state.testoMessaggio = 'Prodotto modificato';
        state.visualizzaMessaggio = true;
    },

    resetMessaggio(state){
        state.visualizzaMessaggio = false;
    }
 };

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
