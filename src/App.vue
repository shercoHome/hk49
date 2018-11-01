<template>
  <div id="app">
        <h1         @click="toCSFun" class="sx title">亚洲最全综合娱乐平台——【E尊国际】<i  v-show="!m" >，</i><br v-show="m" />特码赔率48.5倍！资金绝对安全！</h1>
        <h1         @click="toCSFun" class="sx title bk-blue">E尊国际：永远免费，高手齐聚，好料不断<i  v-show="!m" >，</i><br v-show="m" />请记住：{{domain}}</h1>
        <WordBling  @click.native="toCSFun" class="sx" msg="香港挂牌|六合彩研究机构1号大楼" />
        <KaiJiang   @click.native="toCSFun" class="sx" :kjData="forKJprops" />
        <LogoDomain @click.native="toCSFun" class="sx" :domain="domain" />
        <div        @click="toCSFun" class="sx pojie">
          <p>大师破解<label style="color:red">{{kj.issue+1}}期</label>，高手资料，一站齐全</p>
          <PoJie :pojie="pojie" />
        </div>
        <LogoDomain @click.native="toCSFun" class="sx" :domain="domain" />
        <LiuYan :msgArr="msgArr"  />
        <WeiXin     @click.native="toCSFun" class="sx" />
        <WeiXin     @click.native="toCSFun" class="sx" :title="wxtitle" :isRight="true" />
        <br>
        <WXFooter :wxhao="wxhao" />
  </div>
</template>

<script>
import WordBling from "./components/WordBling.vue";
import KaiJiang from "./components/KaiJiang.vue";
import LiuYan from "./components/LiuYan.vue";
import LogoDomain from "./components/LogoDomain.vue";
import PoJie from "./components/PoJie.vue";
import WeiXin from "./components/WeiXin.vue";
import WXFooter from "./components/WXFooter.vue";

export default {
  name: "app",
  data() {
    return {
      domain: "www.ez083.com",
      wxhao: "Ezlily188",
      wxtitle: "加微信得现金最高88888元",
      m: false,
      kj: {
        issue: 122,
        d: [45, 1, 15, 5, 39, 47, 43],
        nextIssueTime: {
          m: 10,
          d: 30,
          w: "二",
          t: "21点30分"
        }
      },
      msgArr: [
        {
          name: "清风",
          talk:
            "谢谢版主，连跟了3期3肖了，小赚一笔，活动奖励也拿了188元，好地方，珍藏了！",
          time: "6小时前",
          img: "1.jpg",
          zan: 2635
        },
        {
          name: "默默付出",
          talk: "料还可以，观察了几期，再继续观察两期，稳就跟！",
          time: "5小时前",
          img: "2.jpg",
          zan: 1633
        },
        {
          name: "Tillreetree",
          talk:
            "幸好加了微信群，都连续三期中各类奖励了，虽然不多，只有100多，但是大师要继续命中哦，我好继续中奖！嘻嘻！",
          time: "5小时前",
          img: "3.jpg",
          zan: 834
        },
        {
          name: "Monicfenga",
          talk: "好地方，料不错，值得跟，我会介绍几个朋友来的",
          time: "5小时前",
          img: "4.jpg",
          zan: 893
        },
        {
          name: "我使者",
          talk:
            "谢谢分享，跟着群里买，稳赚不亏！",
          time: "5小时前",
          img: "5.jpg",
          zan: 120
        },
        {
          name: "年华",
          talk: "这个好！免费得奖励，料还准，微信群千万不要关闭啊！",
          time: "5小时前",
          img: "6.jpg",
          zan: 576
        },
        {
          name: "快乐信心",
          talk:
            "终于找到归属了，以后就在这里安家了！群里氛围好，还有红包拿，奖励也多。就是这里了！",
          time: "3小时前",
          img: "7.jpg",
          zan: 452
        }
      ],
      pojie: [
        "曾道人一码中特",
        "圣旨卷轴期期大中",
        "破解跑狗玄机图",
        "赛马会图库",
        "六肖13码期期中特",
        "2018挂牌爆1码",
        "玄机公开解1肖",
        "重点1肖防4码",
        "平特一肖",
        "1句玄机解特",
        "欲钱诗猜肖看图找特",
        "免费10码中特",
        "新版4不像特马诗",
        "刘伯温二肖博4码",
        "金财神正版平特一肖图",
        "六合宝典藏肖宝图"
      ]
    };
  },
  computed: {
    forKJprops() {
      return {
        issue: this.kj.issue,
        nextTime: this.kj.nextIssueTime,
        result: this.thisSix,
        m: this.m
      };
    },
    thisSix() {
      var now = new Date();
      var year = now.getFullYear();
      var ss = year - 2008; //设定2008为初始年份
      var ssc = ss % 12;
      var ssyear = "鼠牛虎兔龙蛇马羊猴鸡狗猪"; //new Array("子鼠","丑牛","寅虎","卯兔","辰龙","巳蛇","午马","未羊","申猴","酉鸡","戌狗","亥猪");
      ssyear = ssyear.slice(ssc) + ssyear.slice(0, ssc); //重排，第1个为当前年的生肖
      ssyear = ssyear.split("");
      var result = [];
      for (var ele of this.kj.d) {

        ele = ele < 10 ? "0" + ele : "" + ele;

        var xx = (ele % 12) - 1;
        xx = xx < 0 ? 11 : xx;

        result.push({
          num: ele,
          sx: ssyear[xx]
        });
      }
      return result;
    }
  },
  components: {
    WordBling,
    KaiJiang,
    LiuYan,
    LogoDomain,
    PoJie,
    WeiXin,
    WXFooter
  },
  created() {
    var userAgentInfo = navigator.userAgent;
    var Agents = [
      "Android",
      "iPhone",
      "SymbianOS",
      "Windows Phone",
      "iPad",
      "iPod"
    ];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    console.log("PC:" + flag);
    this.m = !flag;

    var that = this;
    this.$axios
      .get("re.txt")
      .then(function(response) {
        // handle success
        console.log(response);
        var re = response.data; //122|45|1|15|5|39|47|43|10|30|二|21点30分
        var re = re.split("|");
        that.kj = {
          issue: Number(re[0]),
          d: [re[1], re[2], re[3], re[4], re[5], re[6], re[7]],
          nextIssueTime: {
            m: re[8],
            d: re[9],
            w: re[10],
            t: re[11]
          }
        };
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });
  },
  methods: {
    toCSFun() {
      window.open("https://baidu.com");
       //window.open("https://v88.live800.com/live800/chatClient/chatbox.jsp?companyID=206119&configID=1239&jid=8580125140&s=1&domain="+this.domain+"&type=new");
    }
  }
};
</script>

<style lang="less">
@rem: 32/1rem;
body,
html {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1200px;
  width: 100%;
  min-height: 100%;

  background: #fff;
  margin: 0 auto;
}
.sx{
  cursor: pointer;
}
.title {
  font-size: 10 / @rem;
  background-color: red;
  color: white;
  font-size: 18px;
  width: 100%;
  margin: 0;
  padding: 0;
}
.bk-blue {
  background-color: rgb(37, 198, 247);
}
.bk-yellow {
  background-color: rgb(243, 205, 36);
}
.clear {
  clear: both;
}

.pojie {
  font-size: 18px;
  float: left;
  background: #3c3c3c;
}
.pojie p {
  font-size: 18px;
  line-height: 40px;
  padding: 5px 0;
  margin: 0;
  height: 40px;
  color: white;
  background-color: #000;
  font-weight: 400;
}

@media screen and (min-width: 1200px) {
  .pojie {
    font-size: 24px;
  }
  .pojie p {
    font-size: 24px;
    line-height: 40px;
    padding: 5px 0;
  }
  .title {
    font-size: 34px;
  }
}
</style>
