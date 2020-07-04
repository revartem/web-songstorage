<template>
    <v-toolbar  dense   class="green--text" dark>
        <v-toolbar-title >
           <v-btn
                   @click="toLogin" class="green--text home" text>
               SongArt
           </v-btn>

        </v-toolbar-title>
        <v-spacer/>
        <v-toolbar-items  >
            <v-btn
                    @click="$router.push('/songs')" class="green--text"  text >
                Browse
            </v-btn>
        </v-toolbar-items>
        <v-spacer/>

        <v-toolbar-items  >


            <v-btn v-if="!$store.state.isUserLogIn"
                    @click="toRegister" class="green--text" text>
                Sing Up
            </v-btn>
            <v-btn v-if="!$store.state.isUserLogIn"
                   @click="toLogin" class="green--text" text>
                Login
            </v-btn>
            <v-btn v-if="$store.state.isUserLogIn"
                   @click="logOut" class="green--text" text>
                Log Out
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default {
        data() {
            return{

            }
        },
        methods: {
            toRegister(){
                this.$router.push('/register')
            },
            toLogin(){
                this.$router.push('/login')
            },
            logOut(){
                this.$store.dispatch('setToken', null)
                this.$store.dispatch('setUser', null)
                this.$router.push('/register')
            },
        }
    }
</script>

<style scoped>
    .home{
        font-size: 18px;
    }

</style>