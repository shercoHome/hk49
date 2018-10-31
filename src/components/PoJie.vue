<template>

<ul>
  <li v-for="(str,index) in pojie" :key="index">{{str}}</li>
</ul>

</template>
<script>
export default {
    name:"PoJie",
    props:{
        pojie:Array
    }
}
</script>
<style lang="less" scoped>
ul{
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li{
  float: left;
  width: 33.33%;
  box-sizing: border-box;
  background-color: rgb(233, 17, 89);
  border: 3px solid #3c3c3c;
  text-shadow: #2c3e50 1px 1px 1px;
  height: 3em;
  padding: 0 .2rem;
}
li:nth-child(3n){
  background-color:rgb(9, 177, 243);
  color: #fff;
    text-shadow: #ddd 1px 1px 1px;
}
li:nth-child(3n-1){
  background-color: #f90;

}


@media screen and (min-width: 1200px) {

   
li{
  width: 25%;
    border: 6px solid #3c3c3c;
      height: 3em;
  padding: 0 0;
  line-height: 3em;
}
li:nth-child(4n){
  background-color:rgb(9, 177, 243);
     color: #fff;
    text-shadow: #ddd 1px 1px 1px;
}
 li:nth-child(4n-1){
  background-color: #f90;
   color: #000;
     text-shadow: #2c3e50 1px 1px 1px;

}
li:nth-child(4n-2){
  background-color: rgb(14, 247, 169);
     color: #000;
     text-shadow: #2c3e50 1px 1px 1px;

}
 li:nth-child(4n-3){
  background-color: rgb(233, 17, 89);
     color: #000;
     text-shadow: #2c3e50 1px 1px 1px;

}


}
</style>
</style>

