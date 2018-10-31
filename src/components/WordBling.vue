<template>
  <div class="WordBling">
   <h1 class="title" :class="{ active: isActive }" v-for="(str,index) in string2Arr" :key="index">{{str}}</h1>
  </div>
</template>

<script>
export default {
  name: 'WordBling',
  data(){
    return{
      isActive:true
    }
  },
  props:{
    msg: String,
  },
  computed:{
    string2Arr:function(){
    return this.msg.split("|");
    }
  },created() {
   var that=this;
    setInterval(function(){

that.isActive=!that.isActive;

    },500);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.WordBling{
  min-height: 90px;
  background-color:#111;
}
.title{
   background-color:#111;
  color:  rgb(243, 205, 36);
  text-shadow: #333 1px 1px 1px;
  padding-top:10px;
}
.active.title{
      padding-top:0px;
font-size: 30px;
}

@media screen and (min-width: 1200px) {
.active.title{
  font-size: 46px;
    padding-top:0px;
}
.WordBling{
  min-height: 130px;}
}
</style>
