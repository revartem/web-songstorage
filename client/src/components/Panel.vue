<template>
    <v-card class="elevation-12">
        <v-toolbar
                color="green"
                dark
                flat
        >
            <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
        <v-card-text >
            <slot>
            </slot>
        </v-card-text>
    </v-card>

</template>

<script>
    export default {
        name: "Panel",
        data (){
            return{
                title: 'Hi!'
            }
        }
    }
</script>

<style scoped>

</style>