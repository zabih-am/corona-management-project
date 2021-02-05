<template>
  <div class="dashboard">
    <Navbar />
    <Sidebar />
    <div class="dashboard__content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/dashboard/Sidebar'
import Navbar from '@/components/dashboard/navbar'
export default {
  components: {
    Sidebar,
    Navbar,
  },
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/variable';
  .dashboard{
    display: flex;
    justify-content: space-between;
    height: 100%;
    &__content{
      width: calc(100% - 16rem);
      background: $white2;
      margin-top: 5rem;
      padding: 1.5rem;
      @media only screen and (max-width: 960px) {
        width: 100%;
      }
    }
  }
</style>
