<template>
    <v-app-bar
        elevation="4"
        color="green"
        dark
    >

        <router-link :to="{ name: 'home'}">
            <v-img
                lazy-src="/img/logo.png"
                width="90"
                src="/img/logo.png"
            ></v-img>
        </router-link>

        <v-spacer></v-spacer>

        <router-link :to="{ name: 'login'}">
            <v-btn text>
                Login
            </v-btn>
        </router-link>

        <router-link :to="{ name: 'register'}">
            <v-btn text>
                Register
            </v-btn>
        </router-link>
    </v-app-bar>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>

</style>
