<template>
<div class="KaiJiang">
    <div class="KaiJiang-up">
 
       <div class="KaiJiang-up-issue"> {{kjData.issue}}期</div>
       <template  v-for="(d,i) in kjData.result">

        <div  class="KaiJiang-up-add"  :key="i+100" v-show="i==6">+</div>
        <div  class="KaiJiang-up-result" :key="i">
           <div class="u" :class="color(d.num)">{{d.num}}</div>
           <div class="d">{{d.sx}}</div>
        </div>
       </template>

       <div class="clear"></div>
    </div>
    <div class="KaiJiang-down">
 第<label style='color:red'>{{kjData.issue+1}}</label>期
 开奖时间
<label style='color:red'>{{kjData.nextTime.m}}</label>月
<label style='color:red'>{{kjData.nextTime.d}}</label>日
     星期<label style='color:red'>{{kjData.nextTime.w}}</label>
     {{kjData.nextTime.t}} <br v-show="kjData.m" />
     <span class="tips">
 开奖记录 点击复制开奖 彩色图库
 数据正常<br v-show="kjData.m" />
 如果自动更新失败，请刷新
 </span>
    </div>
    <div class="clear"></div>
</div>
</template>

<script>
export default {
  name: "KaiJiang",
  data() {
    return {};
  },
  props: {
    kjData: Object
  },
  computed: {
  },
  created() {
  },
  methods:{
    color(n){
      
      n=Number(n);
      if([5,6,11,16,17,21,22,27,28,32,33,38,39,43,44,49].indexOf(n)>=0){
        return "green";
      }
      if([3,4,9,10,14,15,20,25,26,31,36,37,41,42,47,48].indexOf(n)>=0){
        return "blue";
      }
      return "red";

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@rem: 32/1rem;
.KaiJiang,
.KaiJiang-up,
.KaiJiang-down {
  width: 100%;
  font-size: 16px;
  float: left;
  margin-top: 8px;
}
.KaiJiang{
    border: solid 3px #ecab1f;
    box-sizing: border-box;
    margin-top: 0;
    padding: 5px auto;
}
.KaiJiang-up > div {
  float: left;
  width: 10%;
  margin: 2px;
}
.KaiJiang-up >.KaiJiang-up-issue {
  width: 10%;
   font-size: 18px;
   vertical-align: middle;
}
.KaiJiang-up >.KaiJiang-up-add {
  width: 5%;
 line-height: 40px;
 font-size: 30px;
}
.KaiJiang-up-result {
    border: solid 1px #333;
    box-sizing: border-box;
    background-color: aliceblue;
    font-size: 14px;
 

}
.KaiJiang-up-result .u{
 background-color: red;
    padding: 3px;
       font-size: 18px;
       color: #fff;

}
.KaiJiang-up-result .u.red{
 background-color: red;
 }
 .KaiJiang-up-result .u.blue{
 background-color: blue;
 }
 .KaiJiang-up-result .u.green{
 background-color: green;
 }
.tips{
    font-size: 10px;
}
@media screen and (min-width: 1200px) {
    .KaiJiang-up >.KaiJiang-up-issue {
  width: 15%;
     font-size: 48px;
     line-height: 120px;
}
.KaiJiang-up >.KaiJiang-up-add {
  width: 5%;
       line-height: 120px;
        font-size: 80px;
}
.KaiJiang-up-result {
    border: solid 1px #333;
    box-sizing: border-box;
    background-color: aliceblue;
    font-size: 24px;
     padding: 5px;
}
.KaiJiang-up-result .u{
 background-color: red;
    padding: 15px;
   font-size: 36px;
}
}

</style>
