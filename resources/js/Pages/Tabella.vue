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
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="item in getProdotti"
                :key="item.nome"
            >
                <td>{{ item.nome }}</td>
                <td>{{ item.tipologia }}</td>
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
            }),
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
