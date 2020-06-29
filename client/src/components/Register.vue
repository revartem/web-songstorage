<template>

  <v-app id="inspire">

    <v-main>
      <v-flex xs12>
        <v-alert type="error" :value="error" dismissible
        >{{error}}</v-alert
        >
        <v-alert type="positive" class="green" :value="positive" dismissible
        >{{positive}}</v-alert
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
                <v-toolbar-title>Register</v-toolbar-title>
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
                <v-btn class="green" type="submit" dark @click="register">Register</v-btn>
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
      error: null,
      positive: null
    }
  },
  watch: {
    email (value) {
      console.log('Email has changed value', value)
    }
  },
  methods: {
    register () {
      const vm = this
      AuthenticationService.register({
        email: this.email,
        password: this.password
      }).then((value) => {
        vm.clearForm();
        vm.positive = 'User was successfully created'
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
      this.email = ''
              this.password = ''
              this.error = null
              this.positive = null
    }
  }
}
</script>

<style scoped>
.errora{
  color:red;
}
</style>
