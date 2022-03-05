<template>
    <v-container class="py-16">
        <v-alert
            outlined
            color="blue"
            text
        >
            <h2>Login</h2>
        </v-alert>

        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >

            <v-text-field
                v-model="user.email"
                :rules="emailRules"
                label="E-mail"
                required
            ></v-text-field>

            <!--<v-text-field
                v-model="user.password"
                :rules="passwordRules"
                label="password"
                required
                type="password"
                autocomplete="on"
            ></v-text-field>-->

            <v-text-field
                v-model="user.password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="passwordRules"
                :type="show1 ? 'text' : 'password'"
                label="password"
                @click:append="show1 = !show1"
                autocomplete="on"
            ></v-text-field>

            <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
            >
                Login
            </v-btn>

            <v-btn
                color="error"
                class="mr-4"
                @click="reset"
            >
                Reset
            </v-btn>
        </v-form>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            show1: false,
            valid: true,
            user: {},
            emailRules: [
                v => !!v || 'E-mail obbligatoria',
                v => /.+@.+\..+/.test(v) || 'E-mail deve essere valida',
            ],
            passwordRules: [
                v => !!v || 'password obbligatoria',
            ],
        }),

        methods: {
            validate () {
                this.$refs.form.validate();
                console.log(this.user)
            },
            reset () {
                this.$refs.form.reset()
            },
        },
    }
</script>

<style scoped>

</style>
