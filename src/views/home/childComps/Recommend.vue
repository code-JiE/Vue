<template>
  <div class="recommend">
      <div v-for="item in recommend" class="recommend-item" :key="item.index">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        recommend:{
            type:Array,
            default(){
                return [];
            }
        }
    }
}
</script>

<style>
    .recommend{
        display: flex;
        text-align: center;
        margin-top: 10px;
        padding-bottom: 15px;
        border-bottom: 8px rgba(0, 0, 0, 0.09) solid;
    }
    .recommend-item{
    
        flex: 1;
    }
     .recommend-item img{
        width: 90%;
        padding-bottom: 5px;
    }
    .recommend-item a {
        color: #333;
        font-size: 17px;
        text-decoration: none;
    }
</style>