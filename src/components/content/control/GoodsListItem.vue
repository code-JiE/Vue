<template>
  <div class="goodsListItem">
          <img :src="goodsItem.show.img" alt="" @load="imgload">
      <div class="goodsItemInfo">
          <p class="goodsItemTitle">{{goodsItem.title}}</p>
          <span class="goods_item_pice">{{goodsItem.price}}</span>
          <span class="goods_item_cfav"><i>❤</i> {{goodsItem.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        goodsItem:{
            type:Object,
            default(){
             return []
            }
        }
    },
    methods:{
        imgload(){
            // console.log(this.$bus)
             this.$bus.$emit('itemImagLoad')
        }
    }
}
</script>

<style>
 .goodsListItem a{
     text-decoration: none;
 }
    .goodsListItem{
    width: 48%;
    padding: 3px;
    padding-bottom:7px;
    text-align: center;
    }
    .goodsItemTitle{
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 8px;
        color: #555;
    }
      .goodsListItem img{
        width: 100%;
        height: 90%;
        border-radius: 5px;
        
    }

    .goods_item_pice{
        font-size: 14px;
        color: #e55;
        margin-right: 10%;
    }
    
    .goods_item_cfav{
        font-size: 13px;
        color: #888;
    }
    .goodsItemInfo .goodsItemTitle{
        margin-top: 1%;

    }
    .goodsItemInfo i{
        font-style: normal;
        color: #f55;
        font-size: 13px;
    }
</style>