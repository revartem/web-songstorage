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
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login form</v-toolbar-title>
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
                  <div class="errora" v-html="error" />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" type="submit" @click="register">Login</v-btn>
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
      email: 'avd',
      password: '123',
      error: ''
    }
  },
  watch: {
    email (value) {
      console.log('Email has changed value', value)
    }
  },
  methods: {
    register () {
      this.error = ''
      const vm = this
      AuthenticationService.register({
        email: this.email,
        password: this.password
      }).then((value) => {
        vm.clearForm();
        return value
      })
        .catch(e => {
          vm.error = e.response.data.error
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
