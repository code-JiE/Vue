<template>
  <div id="cart">
      <navbar class="navbar">
          <div slot="center">购物车</div>
      </navbar>
  </div>
</template>

<script>
import navbar from 'common/navbar/NavBar.vue'
export default {
    components:{
        navbar
    }
}
</script>

<style>
   #cart .navbar {
        background-color: tomato;
        color: #ffffff;
    }
</style>