<template>
  <v-container fluid fill-height pa-0 login-col-height column>
    <v-layout fluid fill-height>
      <v-img src="@/assets/image/bg/bg_01.png" alt="loginBg" />
      <v-col md="5" sm="12" class="pa-0 login-card">
        <v-card class="fill-height">
          
        </v-card>
      </v-col>
    </v-layout>
  </v-container>
</template>


<script>

  export default {
    name: 'Homez-a',
    components: {
    },
    data() {
      return {
        tests: '컈냐'
      }
    },
    mounted() {
      this.test()
    },
    methods: {
      test() {
        this.$axios.get('https://developer-lostark.game.onstove.com/characters/'+this.tests+'/siblings', {
          headers: {
            'accept': 'application/json',
            'authorization': 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAwMjY0NzAifQ.XjNZ7p1lM02H5EayrnrleyaX9moKBs-bAkONK8O91NEZBrfe7IqJr5xrsiKeKPbFeB92f9eWi35tIWEzgAW6adT9a59UckVp2uPV8-vzIiu0T98qESCOU3p6WL91e0Inm0X_gDmbbyvNzKtenMgSazib-brhxqFJbATVTyijt-JepxXfDaOb0sRCGbBsFHhsAxPXJ_1FqIvhD7JW7oWsuUcbGfSb6HS2Bzpj2d-g0-tsEjhu0Ot7MLSnhAXU2Fw4KCpyc8qg22od1gy2O-onuivOjBC-xET7V2DITycfiqL5wcZEKUMrSZKjLBafcFSsToreY0FVUD55VRmbFqFMzw'
          }
        })
          .then(res => {
            console.log(res)
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
$appBarHeight: 70px;
$paddingHeight: 8px;

.login-col-height {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  // max-height: calc(100vh - (#{$appBarHeight} + (#{$paddingHeight} * 5)));
}
.login-card {
  height: 450px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>