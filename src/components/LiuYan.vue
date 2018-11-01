<template>
  <div class="LiuYan">
        <p>阅读&nbsp;86575&nbsp;+&emsp;<img class="zan" src="../assets/zan.jpg" /> 6881  &emsp;&emsp; 留言</p>
        <div v-for="(msg,i) in msgArr" :key="i">
            <div class="msg-left">
                    <img class="msg-img" :src="require('../assets/'+msg.img)" />
            </div>
            <div class="msg-right">
                <p>{{msg.name}}<img class="zan" src="../assets/zan.jpg" /> {{msg.zan}} </p>
                <p>{{msg.talk}}</p>
                <p>{{msg.time}}</p>
            </div>
        </div>
        <div class="clear"></div>
  </div>
</template>

<script>

export default {
  name: "LiuYan",
 
  props: {
  msgArr: {
    type: Array,
    default: () =>[
          {
            name: "test",
            talk: "test-talk",
            time: "66小时前",
            img: "logo.png",
            zan: 2635
          }
        ]
  }
  },
  computed: {},
  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.LiuYan {
  font-size: 16px;
  background-color: #fff;
}
.LiuYan>p{
    text-align: left;
}
.zan {
  width: 20px;
}
.msg-img {
  width: 50px;
}
.msg-left,
.msg-right {
  width: 75%;
  float: left;
  text-align: left;
}
.msg-left {
  width: 25%;
  text-align: center;
  padding-top: 1.2em;
}
@media screen and (min-width: 1200px) {

    .msg-left {
  width: 10%;
  text-align: center;
}
.msg-right {
  width: 90%;}
}
</style>
