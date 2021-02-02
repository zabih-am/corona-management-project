<template>
  <div class="sidebar">
    <div class="sidebar__space"></div>
    <div class="sidebar__content" :class="{'sidebar__open' : $store.state.toggleSidebar}">
      <div class="sidebar__header">
        <svg class="sidebar__header--icon"><use xlink:href="../../assets/icons/sprite.svg#icon-vinyl"></use></svg>
        <span class="sidebar__header--text"> Covid 19 Tracker</span>
      </div>
      <div class="sidebar__menu">
        <v-tabs vertical background-color="transparent" color="white">
          <v-tab>
            <router-link exact to="/" active-class="active-link" class="sidebar__menu--item">
              <svg :style="[selectedLink === '/' ? {fill: 'white'} : {fill : '#A4A6B3'}]" class="icon"><use xlink:href="../../assets/icons/sprite.svg#icon-pie-chart"></use></svg>
              Overview
            </router-link>
          </v-tab>
          <v-tab>
            <router-link to="/users" active-class="active-link"  class="sidebar__menu--item">
              <svg :style="[selectedLink === '/users' ? {fill: 'white'} : {fill : '#A4A6B3'}]" class="icon"><use xlink:href="../../assets/icons/sprite.svg#icon-video"></use></svg>
              Patients
            </router-link>
          </v-tab>
          <v-tab>
            <router-link to="/link1" active-class="active-link" class="sidebar__menu--item">
              <svg class="icon"><use xlink:href="../../assets/icons/sprite.svg#icon-light-bulb"></use></svg>
              Link number 1
            </router-link>
          </v-tab>
          <v-tab>
            <router-link to="/link2" class="sidebar__menu--item">
              <svg class="icon"><use xlink:href="../../assets/icons/sprite.svg#icon-vinyl"></use></svg>
              Link number 2
            </router-link>
          </v-tab>
          <v-tab>
            <router-link to="/link3" class="sidebar__menu--item">
              <svg class="icon"><use xlink:href="../../assets/icons/sprite.svg#icon-user-tie"></use></svg>
              Link number 4
            </router-link>
          </v-tab>
          <v-tab>
            <router-link to="/link4" class="sidebar__menu--item">
              <svg class="icon"><use xlink:href="../../assets/icons/sprite.svg#icon-book"></use></svg>
              Link number 5
            </router-link>
          </v-tab>
          <v-divider color="gray" class="my-5"></v-divider>
          <v-tab>
            <router-link to="/link5" class="sidebar__menu--item">
              <svg class="icon"><use xlink:href="../../assets/icons/sprite.svg#icon-cog"></use></svg>
              Settings
            </router-link>
          </v-tab>
          <v-tab>
            <router-link to="link6" class="sidebar__menu--item">
              <svg class="icon"><use xlink:href="../../assets/icons/sprite.svg#icon-log-out"></use></svg>
              Logout
            </router-link>
          </v-tab>
        </v-tabs>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
    }
  },
  computed: {
    selectedLink:{
      get(){
        return this.$route.path ?? ''
      }
    }
  },
  created(){
    console.log(this.$route.path)
    console.log(this.$route.fullPath)
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/styles/variable';
  .sidebar{
    z-index: 100;
    &__space{
      height: 100vh;
      width: 16rem;
      @media only screen and (max-width: 960px) {
        display: none;
      }
    }
    &__content{
      width: 16rem;
      height: 100vh;
      background:$gray-dark;
      position: fixed;
      top: 0;
      left: 0;
      transition: all .3s;
      overflow-y: auto;
      overflow-x: hidden;
      @media only screen and (max-width: 960px) {
        transform: translateX(-16rem);
      }
    }
    &__open{
      transform: translateX(0);
    }
    &__header{
      width: 100%;
      height: 8rem;
      display: flex;
      margin: 0 1.5rem;
      align-items: center;
      &--icon{
        width: 2rem;
        height: 2rem;
        fill: $blue;
      }
      &--text{
        color: $gray-light;
        margin: 0 .5rem;
      }
    }
    &__menu{
      &--item{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        color: $gray-light;
      }
    }
  }
  .icon{
    fill: $gray-light;
    width: 1.5rem;
    height: 1.5rem;
    margin: 1rem;
  }
  .v-tab{
    text-transform: none !important;
  }
  .active-link{
    color: $white;
  }
</style>