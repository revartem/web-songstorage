<template>
  <div>
    <h1>Register</h1>
    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="email "
    >
    <br/>
    <input

    type="password"
    name="password"
    v-model="password"
    placeholder="password "
    >
    <br/>
    <button
      type="submit"
      @click="register"
    >Register</button>
  </div>
</template>

<script>
  import AuthenticationService from "../services/AuthenticationService";
  export default {
    name: "Register",
    data() {
      return {
        email: 'avd',
        password: '123'
      }
    },
    watch:{
      email (value){
        console.log('Email has changed value', value)
      }
    },
    methods: {
     async register(){
        await AuthenticationService.register({
          email:  this.email,
          password: this.password
        })

      }
    },
    mounted() {
      setTimeout(() => {
        this.email = 'Hello world!'
      }, 1000)
    }
  }
</script>

<style scoped>

</style>
