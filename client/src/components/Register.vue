<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <input
            type="emal"
            name="email"
            v-model="email"
            placeholder="email" />
          <br>
          <input
            type="password"
            name="password"
            v-model="password"
            placeholder="password" />
          <br>
          <div class="error" v-html="error"></div>
          <br>
          <v-btn
            class="cyan"
            @click="register">
            Register
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthService from '@/services/AuthService';

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async register() {
      try {
        await AuthService.register({
          email: this.email,
          password: this.password,
        });
      } catch (err) {
        this.error = err.response.data.error;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: red;
  }
</style>
