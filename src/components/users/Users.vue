<template>
<div class="users__container">
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
      <div class="users__loading" v-if="loading">
        <v-progress-circular
          :size="70"
          :width="7"
          color="blue"
          indeterminate
        ></v-progress-circular>
      </div>
    </div>
  </div>
  <div class="users-mobile">
    <UserCardMobile v-for="user in users" :key="user.id" :user="user"/>
  </div>
</div>
</template>
<script>
import { getUsers } from '@/services/api/usersService'
export default {
  name: 'Users',
  components: {
    UserCardDesktop: ()=> import(/* webpackChunkName: "UserCardDesktop" */ './UserCardDesktop'),
    UserCardMobile: ()=> import(/* webpackChunkName: "UserCardMobile" */ './UserCardMobile')
  },
  data(){
    return{
      users: [],
      loading: false
    }
  },
  methods: {
    async getAllUsers(){
      try{
        this.loading = true
        const users = await getUsers()
        this.loading = false
        this.users = users
      }catch(e){
        alert(e)
        this.loading = false
      }
    }
  },
  created(){
    this.getAllUsers()
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/styles/variable.scss';
  .users{
    &__container{
      height: 90vh;
    }
    background: $white;
    border-radius: .5rem;
    border: 1px solid $white3;
    min-height: 100%;
    @media only screen and (max-width: 600px) {
      display: none;
    }
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
    &__loading{
      width: 100%;
      height: 100%;
      margin-top: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .users-mobile{
    width: 100%;
    height: 100%;
    display: none;
    @media only screen and (max-width: 600px) {
      display: block
    }
  }
</style>