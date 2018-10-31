<template>
    <a href="###"  class="logo"><img src="../assets/e.png" />{{domain}}</a>
</template>
<script>
export default {
    name:"LogoDomain",
    props:{domain:String}
}
</script>

<style lang="less" scoped>

.logo{
  width: 100%;
  display: block;
 float: left;
  background: white;

  padding: 0;
 
  color: black;
  font-weight: bold;
 

  font-size: 18px;
  height:60px;
  line-height:60px;
  

}
.logo img{

    width: 120px;
    height:30px;
    vertical-align: middle;
    margin-right: 1em;
}
@media screen and (min-width: 1200px) {
  .logo{
  width: 100%;
  display: block;
 float: left;
  background: white;

  padding: 0;
 
  color: black;
  font-weight: bold;
 

  font-size: 32px;
  height:150px;
  line-height:150px;
  

}
.logo img{

    width: 320px;
    height:80px;
    vertical-align: middle;
    margin-right: 1em;
}
}
</style>
