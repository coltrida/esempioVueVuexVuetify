<template>
    <v-container class="py-16">
        <v-alert
            outlined
            color="blue"
            text
        >
            <h2>Products {{getVisualizzaMessaggio}}</h2>
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
                    {{testoBtn}}
                </v-btn>
            </v-col>
        </v-row>

        <tabella @modificaProduct = "modifica"/>
        <messaggio />
    </v-container>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import Tabella from "./Tabella";
    import Messaggio from "../Components/Messaggio";
    export default {
        components: {Messaggio, Tabella},
        data: () => ({
            switchModifica:false,
            prodotto: {},
        }),

        methods: {
            ...mapActions('product', {
                addProdotto: 'addProdotto',
                modificaProdotto: 'modificaProdotto',
            }),

            inserisci() {
                this.$store.commit('product/resetMessaggio');
                if (this.switchModifica) {
                    this.modificaProdotto(this.prodotto).then(() => {
                        this.prodotto = {};
                        this.switchModifica = false;
                    });
                }else{
                    this.addProdotto(this.prodotto).then(() => {
                        this.prodotto = {};
                    });
                }

            },

            modifica(product){
                this.prodotto = product;
                this.switchModifica = true;
            }

        },

        computed: {
            ...mapGetters('product', {
                getVisualizzaMessaggio: 'getVisualizzaMessaggio',
            }),

            testoBtn(){
                return this.switchModifica ? 'Modifica' : 'Inserisci';
            }
        }
    }
</script>

<style scoped>

</style>

