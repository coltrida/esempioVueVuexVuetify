<template>
    <v-container class="py-16">
        <v-alert
            outlined
            color="blue"
            text
        >
            <h2>Products</h2>
        </v-alert>

        <v-row>
            <v-col>
                <v-text-field
                    v-model="prodotto.nome"
                    label="Prodotto"
                    required
                ></v-text-field>
            </v-col>
            <v-col>
                <v-text-field
                    v-model="prodotto.tipologia"
                    label="Tipologia"
                    required
                ></v-text-field>
            </v-col>
            <v-col>
                <v-btn
                    color="success"
                    class="mr-4"
                    @click="inserisci"
                >
                    Inserisci
                </v-btn>
            </v-col>
        </v-row>

        <tabella />

    </v-container>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import Tabella from "./Tabella";
    export default {
        components: {Tabella},
        data: () => ({
            prodotto: {},
        }),

        methods: {
            ...mapActions('product', {
                addProdotto: 'addProdotto',
            }),

            inserisci() {
                this.addProdotto(this.prodotto).then(() => {
                    this.prodotto = {}
                });
            }
        },
    }
</script>

<style scoped>

</style>

