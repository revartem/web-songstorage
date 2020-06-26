<template>
  <v-app>
    <site-header></site-header>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import  SiteHeader from  './components/Header'

export default {
  name: 'App',

  components: {
    SiteHeader
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>

</style>
