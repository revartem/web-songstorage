<template>
    <v-app id="inspire">
        <v-main>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-col cols="8" >
                        <Panel>
                            <v-row align="center" justify="center">
                                <v-col align="center" cols="3" >
                            <h1>
                                YO YO YO!
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, in!
                            </p>
                                </v-col>
                            </v-row>
                        </Panel>
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
        components: {
            Panel
        }
    }
</script>

<style scoped>

</style>