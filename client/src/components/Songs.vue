<template>
    <v-app id="inspire">

        <v-main>

            <v-container
                    class="fill-height"
                    fluid
            >
                <v-row
                        align="center"
                        justify="center"
                >
                    <v-col
                            cols="12"
                            sm="8"
                            md="4"
                    >
                        <v-card class="elevation-12">
                            <v-toolbar
                                    color="green"
                                    dark
                                    flat
                            >
                                <v-toolbar-title>Songs</v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                            <Panel/>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    import Panel from "../components/Panel";

    export default {
        name: "Songs",
        components:{
            Panel
        }
    }
</script>

<style scoped>

</style>