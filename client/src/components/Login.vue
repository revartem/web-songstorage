<template>

  <v-app id="inspire">

    <v-main>
      <v-flex xs12>
        <v-alert type="error" :value="error" dismissible
        >{{error}}</v-alert
        >
      </v-flex>
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
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Email"
                    name="Email"
                    prepend-icon="mdi-account"
                    v-model="email"
                    type="email"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    v-model="password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="green" dark @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import AuthenticationService from '../services/AuthenticationService'

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  watch: {
    email (value) {
      console.log('Email has changed value', value)
    }
  },
  methods: {
    async login () {
      const vm = this
      await AuthenticationService.login({
        email: this.email,
        password: this.password
      }).then((value) => {
        vm.clearForm();

        return value
      })
        .catch(e => {
          if(e == null){
            return
          }else {
            console.log(e)
            vm.error = e.response.data.error
          }
        })
    },
    clearForm () {
      this.email = '',
              this.password = ''
    }
  }
}
</script>

<style scoped>
.errora{
  color:red;
}
</style>
