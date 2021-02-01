<template>
  <div class="users">
    <div class="users__header">
      <v-row>
        <v-col cols="12" lg="12" md="12">
          <div class="users__header--name">All Patients</div>
        </v-col>
      </v-row>
      <v-row align="end" class="py-5" justify="space-between">
        <v-col cols="12" lg="5" md="4" sm="4" xs="4"><div class="users__header--item">User Details</div></v-col>
        <v-col cols="12" lg="3" md="2" sm="3" xs="4"><div class="users__header--item">Birth Details</div></v-col>
        <v-col cols="12" lg="3" md="2" sm="3" xs="4"><div class="users__header--item one-line">Registration Date</div></v-col>
        <v-col cols="12" lg="1" md="2" sm="2"><div class="users__header--item one-line">Infection Level</div></v-col>
      </v-row>
    </div>
    <div class="users__content">
      <UserCardDesktop v-for="user in users" :key="user.id" :user="user"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Users',
  components: {
    UserCardDesktop: ()=> import(/* webpackChunkName: "UserCardDesktop" */ './UserCardDesktop'),
    // UserCardMobile: ()=> import(/* webpackChunkName: "UserCardMobile" */ './UserCardMobile')
  },
  data(){
    return{
      users: [
        {id:0 ,name: 'Ali Ahmadi', img: 'https://cutt.ly/Cke0L30', lastSeen: 'Update 1 day ago', city: 'Tehran', birthday: 'on 24 05 2000', registerDay: 'May 26, 2020', registerTime: '7:30 PM', level: 'HIGH'},
        {id:1 ,name: 'Mohammad Safa', img: 'https://cutt.ly/yke0Ibz', lastSeen: 'Update 1 day ago', city: 'Tehran', birthday: 'on 24 05 2000', registerDay: 'May 26, 2020', registerTime: '7:30 PM', level: 'NORMAL'},
        {id:2 ,name: 'Zabih Heydari', img: 'https://cutt.ly/yke00Hh', lastSeen: 'Update 1 day ago', city: 'Tehran', birthday: 'on 24 05 2000', registerDay: 'May 26, 2020', registerTime: '7:30 PM', level: 'LOW'},
        {id:3 ,name: 'Sepehr Mohammadi', img: 'https://cutt.ly/ake0Rpd', lastSeen: 'Update 1 day ago', city: 'Tehran', birthday: 'on 24 05 2000', registerDay: 'May 26, 2020', registerTime: '7:30 PM', level: 'HIGH'},
        {id:4 ,name: 'Maria Gomez', img: 'https://cutt.ly/Eke0QD1', lastSeen: 'Update 1 day ago', city: 'Tehran', birthday: 'on 24 05 2000', registerDay: 'May 26, 2020', registerTime: '7:30 PM', level: 'NORMAL'},
        {id:5 ,name: 'Sepehr Mohammadi', img: 'https://cutt.ly/ake0Rpd', lastSeen: 'Update 1 day ago', city: 'Tehran', birthday: 'on 24 05 2000', registerDay: 'May 26, 2020', registerTime: '7:30 PM', level: 'LOW'},
        {id:6 ,name: 'Maria Gomez', img: 'https://cutt.ly/eke0YrG', lastSeen: 'Update 1 day ago', city: 'Tehran', birthday: 'on 24 05 2000', registerDay: 'May 26, 2020', registerTime: '7:30 PM', level: 'LOW'},
        {id:7 ,name: 'Ali Ahmadi', img: 'https://cutt.ly/yke0Ibz', lastSeen: 'Update 1 day ago', city: 'Tehran', birthday: 'on 24 05 2000', registerDay: 'May 26, 2020', registerTime: '7:30 PM', level: 'HIGH'},
        {id:8 ,name: 'Zabih Heydari', img: 'https://cutt.ly/ike0PRX', lastSeen: 'Update 1 day ago', city: 'Tehran', birthday: 'on 24 05 2000', registerDay: 'May 26, 2020', registerTime: '7:30 PM', level: 'NORMAL'},
        {id:9 ,name: 'Mohammad Safa', img: 'https://cutt.ly/Kke0DMR', lastSeen: 'Update 1 day ago', city: 'Tehran', birthday: 'on 24 05 2000', registerDay: 'May 26, 2020', registerTime: '7:30 PM', level: 'HIGH'},
        {id:10 ,name: 'alireza ahmadi', img: 'https://cutt.ly/3ke0H2h', lastSeen: 'Update 1 day ago', city: 'Tehran', birthday: 'on 24 05 2000', registerDay: 'May 26, 2020', registerTime: '7:30 PM', level: 'LOW'},
        {id:11 ,name: 'Ali Ahmadi', img: 'https://cutt.ly/Cke0L30', lastSeen: 'Update 1 day ago', city: 'Tehran', birthday: 'on 24 05 2000', registerDay: 'May 26, 2020', registerTime: '7:30 PM', level: 'LOW'},
        {id:12 ,name: 'Zabih Heydari', img: 'https://cutt.ly/Fke0Vsm', lastSeen: 'Update 1 day ago', city: 'Tehran', birthday: 'on 24 05 2000', registerDay: 'May 26, 2020', registerTime: '7:30 PM', level: 'NORMAL'},
        {id:13 ,name: 'Sepehr Mohammadi', img: 'https://cutt.ly/3ke0Ntl', lastSeen: 'Update 1 day ago', city: 'Tehran', birthday: 'on 24 05 2000', registerDay: 'May 26, 2020', registerTime: '7:30 PM', level: 'LOW'},
        {id:14 ,name: 'Ali Ahmadi', img: 'https://cutt.ly/Uke0MDs', lastSeen: 'Update 1 day ago', city: 'Tehran', birthday: 'on 24 05 2000', registerDay: 'May 26, 2020', registerTime: '7:30 PM', level: 'HIGH'},
        {id:15 ,name: 'Maria Gomez', img: 'https://cutt.ly/yke00Hh', lastSeen: 'Update 1 day ago', city: 'Tehran', birthday: 'on 24 05 2000', registerDay: 'May 26, 2020', registerTime: '7:30 PM', level: 'NORMAL'}
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/styles/variable.scss';
  .users{
    background: $white;
    border-radius: .5rem;
    border: 1px solid $white3;
    min-height: 100%;
    &__header{
      width: 100%;
      height: 8rem;
      background: $white;
      border-bottom: 1px solid $white3;
      border-top-left-radius: .5rem;
      border-top-right-radius: .5rem;
      padding: 1rem .5rem;
      position: sticky;
      top: 5rem;
      overflow: hidden;
      &--name{
        font-size: 19px;
      }
      &--item{
        color: $gray-text;
        font-size: 14px;
      }
    }
  }
</style>