<template>
    <div class="WXFooter">
        
        <span>{{wxhao}}<button @click="copy()" class="sx">点击复制微信号</button></span>

    </div>
</template>
<script>
export default {
    name:"WXFooter",
    props:{
        wxhao:String
    },
    methods:{
        copy(){
     
    var range = document.createRange();
 
    var eleP = document.createElement("p");
    var ele = document.createTextNode(this.wxhao);
    eleP.appendChild(ele);
    document.body.appendChild(eleP);

    range.selectNode(ele);
    var selection = window.getSelection();
    if (selection.rangeCount > 0) selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');

    document.body.removeChild(eleP);

    alert("复制成功！");
        }
    }
    
}
</script>
<style lang="less" scoped>
.WXFooter{
display: block;
position: fixed;
bottom: 0;
left:0;
background-color: blue;
width: 100%;
height: 50px;
padding: 0;
margin: 0;
}
.WXFooter span{
       display: block;
        position: relative;

height: 40px;
 width: 80%;

    margin: 5px auto;

    background: #f90;
    border-radius: 5px;
 
     font-size: 18px;

line-height: 40px;

color: #f00;
}
.WXFooter span button{
    vertical-align: middle;
    font-size: 16px;
    margin:0 5px;

}

@media screen and (min-width: 1200px) {
    .WXFooter{
        bottom: 10px;
    }
.WXFooter span{
 width: 30%;
}
}
</style>
