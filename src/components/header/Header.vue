<template>
  <v-col class="pa-0">
    <v-app-bar
      app
      color="success"
      class="px-4 header"
    >
      <v-col md="2" sm="2" xl="2" class="ma-0 pa-0">
        <h1 class="main-header">
          LostArk
        </h1>
      </v-col>
      <v-col md="6" class="pa-0">
        <v-menu
          transition="scale-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-row class="header-button">
              <v-col cols="2" class="pa-0">
                <v-btn
                  color="primary"
                  v-bind="attrs"
                  v-on="on"
                  text
                  width="100%"
                  height="100%"
                >
                  <span>홈</span>
                </v-btn>
              </v-col>
              <v-col cols="2" class="pa-0">
                <v-btn
                  color="primary"
                  v-bind="attrs"
                  v-on="on"
                  width="100%"
                  text
                  height="100%"
                >
                  <span>랭킹</span>
                </v-btn>
              </v-col>
            </v-row>
          </template>
        </v-menu>
        <!-- <router-link to="/">Home</router-link> |
        <router-link to="/About">About</router-link> -->
      </v-col>
      <!-- <v-col cols="12" md="4">
        <v-btn text>
          메뉴 1
        </v-btn>
        <v-btn text>
          메뉴 2
        </v-btn>
      </v-col> -->
    </v-app-bar>
    <v-col class="pa-0" style="height:64px" />
  </v-col>
</template>

<script>
export default {
  name: 'main-header',

  data: () => ({
    //
  }),
};
</script>
<style>
.header > div {
  padding: 0;
}
.header > div > div {
  height: 100%;
  display: flex;
  align-items: center;
}
.header-button {
  height: 100%;
}
/* .header-button > div > div {
  height: 100%;
} */
</style>