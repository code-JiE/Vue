<template>
  <swiper class="home-swiper">
    <swiper-item v-for="item in cbanners" :key="item.background">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="ImageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
    import {Swiper, SwiperItem} from 'common/swiper';
    export default {
        name: "HomeSwiper",
        props: {
            cbanners:{
                type:Array,
                default() {
                    return []
                }
            }
        },
        data(){
          return{
            isEmit:true
          }
        },
        methods:{
          /**
           * 图片加载发送事件
           */
          ImageLoad(){
            if(this.isEmit)  {
              this.isEmit=false
              this.$emit('swiperImageLoad')
            }
          }
        },
        components:{
            Swiper,SwiperItem
        }
    }
</script>

<style scoped>


</style>
