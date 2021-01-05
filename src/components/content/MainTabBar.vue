<template>
  <div>
          <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <span slot="item-icon" >&#xe610;</span>
        <div slot="item-title" class="">
          首页
        </div>
      </tab-bar-item>
        <tab-bar-item path="/category">
        <span slot="item-icon" >&#xe624;</span>
        <div slot="item-title" class="">
          分类
        </div>
      </tab-bar-item>
        <tab-bar-item path="/cart">
        <span slot="item-icon" >&#xe618;</span>
        <div slot="item-title" class="">
          购物车
        </div>
      </tab-bar-item>
        <tab-bar-item path="/profile">
        <span slot="item-icon" >&#xe6c9;</span>
        <div slot="item-title" class="">
          个人
        </div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
//tabBAR
import TabBar from "common/tabbar/tabBar"
import TabBarItem from "common/tabbar/tabBarItem"
export default {
  components:{
        TabBar,
    TabBarItem

  }
}
</script>

<style>
@import '~assets/icon/iconfont.css';
</style>