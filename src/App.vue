<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
    <div :class="{'overlay' : $store.state.toggleSidebar}" @click="$store.state.toggleSidebar = !$store.state.toggleSidebar"></div>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    
  }),
};
</script>
<style lang="scss" scoped>
  .overlay{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    background: rgba(black,.5);
    transition: all 0.5s;
    z-index: 95;
    @media only screen and (min-width: 960px) {
      display: none;
    }
  }
</style>
