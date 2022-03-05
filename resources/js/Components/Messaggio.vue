<template>
    <div class="text-center">
        <v-snackbar
            shaped
            top
            v-model="visualizza"
            :timeout="timeout"
            outlined
            transition="scale-transition"
        >
            {{ getTestoMessaggio }}

        </v-snackbar>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "Messaggio",

        data: () => ({
            timeout: 3000,
        }),

        computed: {
            ...mapGetters('product', {
                getVisualizzaMessaggio: 'getVisualizzaMessaggio',
                getTestoMessaggio: 'getTestoMessaggio',
            }),

            visualizza: {
                get(){
                    return this.getVisualizzaMessaggio
                },
                set(newName){
                    return newName
                }
            }
        }
    }
</script>

<style scoped>

</style>
