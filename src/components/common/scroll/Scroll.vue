<template>
<div class="wrappers" ref="wrapper">
      <div class="contents">
          <slot>

         </slot>
      </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    data(){
        return{
            scroll:null
        }
    },
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }

    },
    mounted(){
            this.scroll=new BScroll(this.$refs.wrapper,{
            click:true,
            pullUpLoad:this.pullUpLoad,
            probeType:3 ,
            mouseWheel: true

        }) 
            this.scroll.on('scroll',(postion)=>{
                this.$emit('scroll',postion)           
        })
    //    setInterval(()=>{
    //          this.scroll.refresh()
    //    },1000)
       this.scroll.on('pullingUp',()=>{
          this.$emit('pullingUp')
       })
    }
}
</script>

<style scoped>
.contents{
    /* height: 5389px; */
}


</style>