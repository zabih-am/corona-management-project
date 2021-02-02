<template>
  <div class="navbar">
    <div class="navbar__content">
      <button class="navbar__content--menu-btn" @click.stop="$store.state.toggleSidebar = !$store.state.toggleSidebar">
        <svg class="navbar__content--menu-icon"><use xlink:href="../../assets/icons/sprite.svg#icon-menu-white"></use></svg>
      </button>
      <div class="navbar__content--left one-line">
        covid 19 tracker - Sokan Edition
      </div>
      <div class="navbar__content--right">
        <button class="navbar__content--search">
          <svg class="navbar__content--search-icon"><use xlink:href="../../assets/icons/sprite.svg#icon-search"></use></svg>
        </button>
        <button class="navbar__content--alarm">
          <svg class="navbar__content--alarm-icon"><use xlink:href="../../assets/icons/sprite.svg#icon-alarm"></use></svg>
        </button>
        <v-divider style="height: 2rem; align-self: center; margin: 0 1rem" vertical></v-divider>
        <div class="navbar__content--name">Jones Ferdinand</div>
        <div class="navbar__content--avatar">
          <img class="navbar__content--img" src="../../assets/images/boy2.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  @import '../../assets/styles/variable';
  .navbar{
    height: 5rem;
    width: calc(100% - 16rem);
    background: $white2;
    padding: 1.5rem;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 90;
    @media only screen and (max-width: 960px) {
      width: 100%;
    }
    &__content{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &--menu-btn{
        display: none;
        @media only screen and (max-width: 960px) {
          display: block;
        }
      }
      &--menu-icon{
        width: 2rem;
        height: 2rem;
        fill: $gray-dark;
        margin: 0 1rem;
      }
      &--avatar{
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 .5rem;
      }
      &--img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        background-position: center;
      }
      &--name{
        margin: 0 .5rem;
        white-space: nowrap;
        @media only screen and (max-width: 960px) {
          display: none;
        }
      }
      &--search-icon, &--alarm-icon{
        width: 1rem;
        height: 1rem;
        fill: $gray-light;
        margin: 0 1rem;
      }
      &--right{
        // width: 20%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      &--left{
        font-size: 1.5rem;
      }
    }
  }
</style>