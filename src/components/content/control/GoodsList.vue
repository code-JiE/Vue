<template>
  <div class="goodsList">
      <goods-list-item v-for="item in goods" 
      :key="item.index"
      :goods-item="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
    data(){
        return{
            
        }
    },
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        GoodsListItem
    }
}
</script>

<style>
    .goodsList{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content:space-around;
    }
</style>