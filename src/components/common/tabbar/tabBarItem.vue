<template>
  <div id="tabBarItem" @click="itemClick">
     <div class="item-icon icon iconfont" :style="activeStyle">
          <slot name="item-icon"></slot>
     </div>
      <div class="item-title" :class="{active:isActive}">
          <slot name="item-title"></slot>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    props:{
        path:String,
        activeColor:{
            type:String,
            default:"rgba(253, 0, 0, 0.959)"
        }
    },
    methods:{
       itemClick(){
           this.$router.push(this.path).catch(err=>err)
       }
    },
    computed:{
        isActive(){
            return this.$route.path===this.path
        },
        activeStyle(){
            return this.isActive?{color:this.activeColor}:{}
        }
    }
}
</script>

<style>
    #tabBarItem{
        flex: 1;
        vertical-align:0;
        text-align: center;
    }
    .item-icon{
        margin-top: 0px;
    }
    .item-title{
        font-size: 14px;
        line-height: 10px;
    }
  
    div>div>.iconfont{
        padding: 1px;
        font-size: 28px;
        font-weight: 600;
        color: #555;
    }
      .active{
        color: rgba(253, 0, 0, 0.747);
    }
</style>