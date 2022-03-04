<template>
    <v-app>
        <div>
            <Navbar></Navbar>
            <v-main>
                <div fluid>
                    <router-view></router-view>
                </div>
            </v-main>
            <Footer></Footer>
        </div>
    </v-app>
</template>


<script>
    import Navbar from "./Components/Navbar";
    import Footer from "./Components/Footer";
    import router from "./Router";

    export default {
        name: "App",
        components: {Footer, Navbar},
        mounted() {
            router.push('home')
        }
    }
</script>

<style scoped>

</style>
