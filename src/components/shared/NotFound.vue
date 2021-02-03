<template>
  <div class="not-found">
    NOT FOUND :(
    <v-btn class="my-5" color="primary" @click="$router.go(-1)">back</v-btn>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
 .not-found{
   width: 100%;
   height: 100%;
   font-size: 2rem;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
 }
</style>