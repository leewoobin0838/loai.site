<template>
  <v-app>
    <Header />
    <router-view />
    <!-- <Login /> -->
  </v-app>
</template>

<script>
import Header from './components/header/Header'
// import Login from '@/layout/login/Login.vue'

export default {
  name: 'App',

  components: {
    Header,
    // Login
  },

  data: () => ({
    //
  }),
};
</script>
