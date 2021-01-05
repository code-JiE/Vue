<template>
  <div id="tabBar">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
 #tabBar{
  position:fixed;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 49px;
    box-shadow: 0 -1px 1px rgba(31, 31, 31, 0.103);
    display: flex;
    background-color: #f6f6f6;
 }
</style>