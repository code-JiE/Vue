<template>
  <div id="home">
      <navbar>
          <div slot="center">首页</div>
      </navbar>
  </div>
</template>

<script>
import navbar from 'common/navbar/NavBar.vue'
export default {
    name:'home',
    components:{
        navbar
    }
}
</script>

<style>

</style>