<template>
  <div class="navbar">
      <div class="left">
          <slot name="left"></slot>
      </div>
      <div class="center">
          <slot name="center"></slot>
      </div>
      <div class="right">
          <slot name="right"></slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .navbar {
        width: 100%;
        height: 44px;
        line-height: 44px;
        display: flex;
        box-shadow: 0 2px 1px rgba(0, 0, 0, 0.137);
    }
    .left,.right{
        width: 66px;
        height: 100%;
    }
    .center{
        flex: 1;
        text-align: center;
        font-size: 20px;
    }

    
</style>