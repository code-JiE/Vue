<template>
  <div id="home">
      <navbar class="home-navbar">
          <div slot="center">首页</div>
      </navbar>
        <control :titles="['流行','新款','精选']" 
        class="control_bar_copy" 
        @tabControl="tab_click"
        v-show="isTabFixed" 
        ref="control_clone">
        </control>

        <scroll class="wrapper" ref="scroll" 
        :probe-type='3' :pull-up-load='true'
        @scroll='contentScroll'
        @pullingUp='upMore'>
           <home-swiper :cbanners='banner'
           @swiperImageLoad='swiperisLoad'></home-swiper>
            <recomentd :recommend='recommend'></recomentd>
            <feature></feature>
            <control :titles="['流行','新款','精选']" class="control_bar" @tabControl="tab_click" ref="control" ></control>
            <goods-list :goods="goods[currentType].list" />
        </scroll>
        <back-top class="backtop" @click.native="BackTop" v-show="backtopshow" />
  </div>
</template>
<script>
/**
 * 插件外部组件
 */
/**自己写的
 * 
 */
import navbar from 'common/navbar/NavBar.vue'
import {getHomeMultidata,getHomeGoods} from '@/network/home'
import HomeSwiper from './childComps/HomeSwiper'
import Recomentd from './childComps/Recommend'
import Feature from './childComps/Feature'
import Control from 'components/content/control/Control'
import GoodsList from 'components/content/control/GoodsList'
/**
 * Scoll
 */
import Scroll from 'common/scroll/Scroll'
import BackTop from 'components/content/backtop/BackTop'
export default {
    name:'home',
    components:{
        navbar,
        HomeSwiper,
        Recomentd,
        Feature,
        Control,
        GoodsList,
        Scroll,
        BackTop
    },
    data(){
        return{
            banner:[],
            recommend:[],
            goods:{
                'pop':{page:0,list:[]},
                'new':{page:0,list:[]},
                'sell':{page:0,list:[]}
            },
            currentType:'pop',
            scroll:null,
            backtopshow:false,
            isTabFixed:false,
            controlOffsetTop:0,
        }
    },
    created(){
        this.getHomeMultidata();
        this.getHomeGoods("pop");   
        this.getHomeGoods("new"); 
        this.getHomeGoods("sell"); 

    },
    mounted(){
        /**
         * 图片加载完毕重新计算高度
         */
            this.$bus.$on('itemImagLoad',this.ref)
            this.$bus.$on('itemImagLoad',this.debounce(this.ref,50))
            /**防抖函数 */
            // const refresh=this.debounce(this.$refs.scroll.scroll.refresh(),100)
            // this.ref()
          
        
    },
     watch: {
    List () {
      /*检测到数据变化时，此时如果不使用$nextTick方法，
      refresh方法会在DOM更新前直接调用*/
    //   this.$nextTick(() => {
    //     this.scroll.refresh()
    //     console.log('1')
        
    //   })
    }
  }
    ,
    methods:{
        /**
         * controlTab点击切换
         */
        tab_click(item){
           switch (item) {
               case 0:
                    this.currentType='pop'
                   break;
               case 1:
                    this.currentType='new'
                   break;
               case 2:
                    this.currentType='sell'
                   break;
           }
           this.$refs.control.active_index=item
           this.$refs.control_clone.active_index=item
        },
        contentScroll(postion){
        this.backtopshow= -postion.y>900
        this.isTabFixed =this.controlOffsetTop<-postion.y
        },

        /**
         * 网络请求
         */
        getHomeMultidata(){
          getHomeMultidata().then(res=>{
           this.banner=res.data.data.banner.list
           this.recommend=res.data.data.recommend.list             
         })   
        },
        getHomeGoods(type){
            const page=this.goods[type].page+1
            getHomeGoods(type,page).then(res=>{
                this.goods[type].list.push(...res.data.data.list)
                this.goods[type].page++
                this.$refs.scroll.scroll.finishPullUp();
            })
        },
        /**
         * 返回顶部
         */
        BackTop(){
            this.$refs.scroll.scroll.scrollTo(0,0,500)
        },
        /**
         * 上拉加载更多
         */
        upMore(){
            this.getHomeGoods(this.currentType)
        },
        /**
         * 防抖函数
         */
       debounce(fn,delay){
			let time=null
			return ()=>{
				if(time) clearTimeout(time)
			time=setTimeout(()=>{
				fn.apply(this)
			    },delay)
			}
		},
        ref(){
                 this.$bus.$on('itemImagLoad',()=>{ 
                     this.$refs.scroll.scroll.refresh()
                     
              })
            
        },
        /**监听轮播图片加载事件 */
        swiperisLoad(){
            /**
             * Control获取距离顶部的位置
             */
          this.controlOffsetTop=this.$refs.control.$el.offsetTop
        }
    }
}
</script>

<style scoped>
#home {
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
    /* bottom: 49px; */
}
.home-navbar{
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9; */
    background-color: tomato;
    color: aliceblue;
}
.control_bar{
    /* top: 44px;
    position:sticky; */
}
.control_bar_copy{
    position: relative;
    z-index: 9;
}
.wrapper{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
}

</style>