<template>
  <v-card class="card__container ma-3" max-width="344">
    <div class="card">
      <div class="card__avatar">
        <img class="card__img" :src="user.img" :alt="user.name">
      </div>
      <div class="card__info">
        <div class="user__name one-line">{{user.name}}</div>
        <div class="user__time one-line font-medium">{{user.lastSeen}}</div>
      </div>
    </div>
    
    <v-card-actions>
      <v-btn color="orange lighten-2" text @click="show = !show">more</v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <div class="card__detail">
          <div class="user__birth d-flex-sb">
            <div class="item">
              Birth Details
            </div>
            <div class="user__birth--value">
              <div class="user__city">{{user.city}}</div>
              <div class="user__birth one-line font-medium">{{user.birthday}}</div>
            </div>
          </div>
          <v-divider class="my-2"></v-divider>
          <div class="card__registration d-flex-sb">
            <div class="item">
              Registration Date
            </div>
            <div class="card__registration--value">
              <div class="user__register--day one-line">{{user.registerDay}}</div>
              <div class="user__register--time font-medium">{{user.registerTime}}</div>
            </div>
          </div>
          <v-divider class="my-2"></v-divider>
          <div class="user__level d-flex-sb">
            <div class="item">Infection Level</div>
            <div :style="[user.level === 'HIGH' ? {background: '#F12B2C'} : user.level === 'NORMAL' ? {background : '#29CC97'} : { background: '#FEC400'}]" class="user__level--value">{{user.level}}</div>
            </div>
        </div>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
export default {
  name: 'UserCardMobile',
  props: ['user'],
  data(){
    return{
      show: false
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/styles/variable.scss';
  .card{
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__container{
      font-size: 14px;
    }
    &__detail{
      padding: .5rem;
    }
    padding: .5rem;
    &__avatar{
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      overflow: hidden;
    }
    &__img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      background-position: center;
    }
  }
  .user{
    &__level--value{
      width: fit-content;
      padding:.2rem .5rem;
      color: $white;
      border-radius:43rem;
      text-align: center;
      font-size: 11px;
    }
  }
  .item{
    color: $gray-text;
    font-size: 14px;
  }
</style>