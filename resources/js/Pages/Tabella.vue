<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
            <tr>
                <th class="text-left">
                    nome Prodotto
                </th>
                <th class="text-left">
                    Tipologia
                </th>
                <th class="text-left">
                    Azioni
                </th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="item in getProdotti"
                :key="item.nome"
            >
                <td>{{ item.nome }}</td>
                <td>{{ item.tipologia }}</td>
                <td>
                    <v-tooltip left>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon
                                v-bind="attrs"
                                v-on="on"
                                @click="elimina(item.id)"
                                color="red"
                            >
                                mdi-delete
                            </v-icon>
                        </template>
                        <span>Elimina</span>
                    </v-tooltip>

                    <v-tooltip right>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon
                                v-bind="attrs"
                                v-on="on"
                                @click="modifica(item)"
                                color="blue"
                            >
                                mdi-pencil
                            </v-icon>
                        </template>
                        <span>Modifica</span>
                    </v-tooltip>
                </td>
            </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        nome: "Tabella",
        data () {
            return {

            }
        },

        mounted() {
            this.fetchProdotti();
        },

        methods: {
            ...mapActions('product', {
                fetchProdotti: 'fetchProdotti',
                deleteProdotto: 'deleteProdotto',
            }),

            elimina(idProduct){
                this.$store.commit('product/resetMessaggio');
                this.deleteProdotto(idProduct);
            },

            modifica(product){
                this.$store.commit('product/rimuoviProdotto', product.id);
                this.$emit('modificaProduct', product)
            },
        },

        computed: {
            ...mapGetters('product', {
                getProdotti: 'getProdotti',
            }),
        }
    }
</script>

<style scoped>

</style>
