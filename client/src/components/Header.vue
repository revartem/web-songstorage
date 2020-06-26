<template>
    <v-toolbar  dense fixed  class="green--text" dark>
        <v-toolbar-title >
           <v-btn  @click="$router.push('/register')" class="green--text home"  flat >SongArt</v-btn>
        </v-toolbar-title>
        <v-spacer/>

        <v-toolbar-items  >
            <v-btn @click="$router.push('/login')" class="green--text" flat>
                Login
            </v-btn>
            <v-btn @click="$router.push('/register')" class="green--text" flat>
                Sing Up
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>