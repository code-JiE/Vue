<template>
  <div class="control">
      <div v-for="(item,index) in titles" 
      :key="item" 
      class="control-item" 
      @click="span_click(index)">
          <span :class="{active_span:index==active_index}" 
          >{{item}}
          </span>
      </div>  
  </div>
</template>

<script>
export default {
    data(){
        return{
            active_index:0
        }
    },
    props:{
        titles:{
            type:Array,
            default(){
                return [];
            }
        }
    },
    methods:{
        span_click(item){
            this.active_index=item
            this.$emit('tabControl',item)
        }
    }
}
</script>

<style>
    .control{
        background-color: #ffffff;
        display: flex;
        width: 100%;
        height: 44px;

        
    }
    .control-item{
        flex: 1;
        height: 100%;
        text-align: center;
        color: #555;
        line-height: 44px;
    }
    .control-item span {
        padding: 5px;
        cursor: pointer;
    }
    .active_span{
        border-bottom: 3px solid pink;
        color: rgb(243, 112, 134);
    }
</style>