<template>
    <v-carousel hide-delimiters :show-arrows="false" cycle>
        <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            transition="fade-transition"
        ></v-carousel-item>
    </v-carousel>
</template>

<script>
    export default {
        name: "Home",
        data () {
            return {
                items: [
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                    },
                ],
            }
        },
    }
</script>

<style scoped>

</style>
