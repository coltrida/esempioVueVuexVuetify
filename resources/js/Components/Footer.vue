<template>
    <v-footer color="green"  app>
        <v-row
            justify="center"
            no-gutters
        >
            <v-col
                class="py-4 text-center white--text"
                cols="12"
            >
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

</style>
