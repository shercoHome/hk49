<template>
    <div class="weixin" :class="{right:isRight}">
        <p>扫描二维码</p>
       <img src="../assets/wx.png" />
       <p>{{title}}</p>
    </div>
</template>
<script>
export default {
  name: "WeiXin",
  props: {
    title: {
      type: String,
      default: () => "加微信获取内部资料" // 
    },
    isRight:{
        type:Boolean,
        default:()=>false
    }
  }
};
</script>
<style lang="less" scoped>
.weixin{
    width: 100px;
    position: fixed;
    top:200px;
    left:0;
    background-color: #fff;
    border-style: double;
    border-width: 1px;
    border-color: #eee;
}
.weixin.right{
    left:auto;
    right:0;
}
.weixin img{
    width: 80px;
    padding: 10px;
    display: block;
    float: left;
}
.weixin p{
        display: block;
    float: left;
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 14px;
        background-color: #eee;
        color: #f00;
}
@media screen and (min-width: 1200px) {
    .weixin{
            top:200px;
            width: 120px;
    }
    .weixin img{
    width: 100px;
    padding: 10px;
    }
    .weixin p{
        width: 120px;
            font-size: 16px;
            
    }
}
@media screen and (min-width: 1600px) {
    .weixin{
            top:200px;
            width: 220px;
    }
    .weixin img{
    width: 200px;
    padding: 10px;
    }
    .weixin p{
        width: 220px;
            font-size: 28px;
            
    }
}
</style>

