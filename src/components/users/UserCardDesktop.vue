<template>
  <div class="user">
    <v-row justify="space-between">
      <v-col cols="12" lg="5" md="4" sm="4" xs="4">
        <v-row justify="start">
          <v-col align-self="center" cols="12" lg="1" md="2" sm="3" xs="4">
            <div class="user__avatar">
              <img class="user__img" :src="user.img" :alt="user.name">
            </div>
          </v-col>
          <v-col class="mx-2" cols="12" lg="10" md="9" sm="7" xs="8">
            <div class="user__name one-line">{{user.name}}</div>
            <div class="user__time one-line font-medium">{{user.lastSeen}}</div>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" lg="3" md="2" sm="3" xs="4">
        <div class="user__city">{{user.city}}</div>
        <div class="user__birth one-line font-medium">{{user.birthday}}</div>
      </v-col>

      <v-col cols="12" lg="3" md="2" sm="3" xs="4">
        <div class="user__register--day one-line">{{user.registerDay}}</div>
        <div class="user__register--time font-medium">{{user.registerTime}}</div>
      </v-col>

      <v-col align-self="center" cols="12" lg="1" md="2" sm="2">
        <div :style="[user.level === 'HIGH' ? {background: '#F12B2C'} : user.level === 'NORMAL' ? {background : '#29CC97'} : { background: '#FEC400'}]" class="user__level">{{user.level}}</div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'User',
  props: ['user'],
  data(){
    return{

    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/styles/variable.scss';
  .user{
    border-top: 1px solid $white3;
    padding: .5rem 1rem;
    font-size: 14px;
    &__avatar{
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      overflow: hidden;
    }
    &__img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      background-position: center;
    }
    &__level{
      width: fit-content;
      padding:.2rem .5rem;
      color: $white;
      border-radius:43rem;
      text-align: center;
      font-size: 11px;
    }
  }
</style>