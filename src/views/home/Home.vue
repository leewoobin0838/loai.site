<template>
  <v-container fluid fill-height pa-0 login-col-height column>
    <v-layout fluid fill-height style="background:#15181d">
      <v-row no-gutters>
        <v-col cols="12" class="pa-2">
          <v-row>
            <v-spacer />
            <v-col class="pa-2 ma-2 search">
              <v-text-field solo placeholder="캐릭터 검색" dark v-model="search" @keyup.enter="searchCharacter" style="max-width:350px" background-color="#77777740" hide-details="">

              </v-text-field>
            </v-col>
            <v-spacer />
          </v-row>
          <v-row>
            <v-spacer />
            <v-col class="characterInfoCard">
              <v-row>
                <v-col cols="6" class="pa-2 characterInfo">
                  <v-row class="pa-2">
                    <v-col cols="12" class="pa-2">
                      <v-chip class="mr-2" label small color="#77777740">
                        <span style="font-weight:bold;">{{ character.ServerName }}</span>
                      </v-chip>
                      <v-chip class="mr-2" label small color="#77777740">
                        <span style="font-weight:bold;">{{ character.CharacterClassName }}</span>
                      </v-chip>
                      <v-chip class="mr-2" label small color="#77777740">
                        <span style="font-weight:bold;">{{ 'Lv. '+character.CharacterLevel }}</span>
                      </v-chip>
                    </v-col>
                    <v-col cols="12" class="pa-2 mb-2" style="min-height:65px">
                      <h4 style="color:#b3b3b3; min-hight:20px">{{ character.Title }}</h4>
                      <h2>{{ character.CharacterName }}</h2>
                    </v-col>
                    <v-col cols="12" class="pa-2 pb-3 pl-5">
                      <v-row>
                        <v-chip class="mr-2" label small color="#77777740">
                          <span style="font-weight:bold;">길드</span>
                        </v-chip>
                        <span class="mt-1">{{ character.GuildName }}</span>
                        <v-img v-if="character.GuildMemberGrade === '길드장'" class="ml-2" max-width="20" :src="guild[0]"/>
                        <v-img v-else-if="character.GuildMemberGrade === '부길드장'" class="ml-2" max-width="20" :src="guild[1]"/>
                        <v-img v-else-if="character.GuildMemberGrade === '임원'" class="ml-2" max-width="20" :src="guild[2]"/>
                      </v-row>
                    </v-col>
                    <v-col cols="12" class="pa-2 pb-0">
                      <v-chip class="mr-2" label small color="#77777740">
                        <span style="font-weight:bold;">영지</span>
                      </v-chip>
                      <span class="mt-1">{{ character.TownName + ' Lv.' + character.TownLevel }}</span>
                    </v-col>
                    <v-col cols="12" class="pa-2 pb-0">
                      <v-chip class="mr-2" label small color="#77777740">
                        <span style="font-weight:bold;">PVP</span>
                      </v-chip>
                      <span class="mt-1">{{ character.PvpGradeName }}</span>
                    </v-col>
                    <v-col class="mt-3">
                      <v-row class="characterInfoItem">
                        <v-col cols="4" class="pa-2">
                          <span class="mt-1">아이템</span><br />
                          <span class="mt-1">{{ character.ItemAvgLevel }}</span>
                        </v-col>
                        <v-col cols="4" class="pa-2">
                          <span class="mt-1">원정대</span><br />
                          <span class="mt-1">{{ 'Lv.'+character.ExpeditionLevel }}</span>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="6" class="pa-2" :class="character.CharacterClassName === '기상술사' || character.CharacterClassName === '도화가' ? ' overflow-hidden' : ''">
                  <v-card class="characterImg" :class="character.CharacterClassName === '기상술사' || character.CharacterClassName === '도화가' ? ' characterImg2' : ''">
                    <v-img style="border-radius: 10px;" :src="character.CharacterImage">
                    </v-img>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
            <v-spacer />
          </v-row>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>


<script>
  export default {
    name: 'defaultDashboard',
    components: {
    },
    data() {
      return {
        guild: [
          require('@/assets/image/bg/ci/Guild1.png'),
          require('@/assets/image/bg/ci/Guild2.png'),
          require('@/assets/image/bg/ci/Guild3.png')
        ],
        search: '연모음',
        character: []
      }
    },
    mounted() {
      this.searchCharacter()
    },
    methods: {
      searchCharacter() {
        this.$axios.get('https://developer-lostark.game.onstove.com/armories/characters/'+this.search+'/profiles', {
          headers: {
            'accept': 'application/json',
            'authorization': 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAwMjY0NzAifQ.XjNZ7p1lM02H5EayrnrleyaX9moKBs-bAkONK8O91NEZBrfe7IqJr5xrsiKeKPbFeB92f9eWi35tIWEzgAW6adT9a59UckVp2uPV8-vzIiu0T98qESCOU3p6WL91e0Inm0X_gDmbbyvNzKtenMgSazib-brhxqFJbATVTyijt-JepxXfDaOb0sRCGbBsFHhsAxPXJ_1FqIvhD7JW7oWsuUcbGfSb6HS2Bzpj2d-g0-tsEjhu0Ot7MLSnhAXU2Fw4KCpyc8qg22od1gy2O-onuivOjBC-xET7V2DITycfiqL5wcZEKUMrSZKjLBafcFSsToreY0FVUD55VRmbFqFMzw'
          }
        })
          .then(res => {
            this.character = res.data
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
  // overflow: hidden;
  max-height: calc(100vh - (#{$appBarHeight} + (#{$paddingHeight} * -0.7)));
}
.login-card {
  height: 450px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.search {
  // margin: 0 auto;
}
.characterImg {
  box-shadow: none !important;
  border-radius: 0 !important;
  background-color: transparent !important;
}
.characterImg2 {
  transform: translateY(-10%);
}
.characterInfoCard {
  border: 1px solid #77777740;
  border-radius: 10px;
}
.characterInfo > div {
  font-size: 13px;
  font-weight: bold;
}
h1,h2,h3,h4,h5,h6 {
  color: white
}
span {
  color: #b3b3b3;
  vertical-align: middle;
}
.characterInfoItem > div > span:last-child {
  color: white;
  font-size: 20px;
}
</style>