import Vue from 'vue'
import App from './App.vue'

import Axios from "axios";

Vue.config.productionTip = false

Vue.prototype.$axios=Axios;

var dpr, rem, scale;
var docEl = document.documentElement;
var fontEl = document.createElement('style');
var metaEl = document.querySelector('meta[name="viewport"]');
dpr = window.devicePixelRatio || 1;
//rem = docEl.clientWidth * dpr / 10;
rem = docEl.clientWidth / 10;
scale = 1 / dpr;
// 设置viewport，进行缩放，达到高清效果
//metaEl.setAttribute('content', 'width=' + dpr * docEl.clientWidth + ',initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no');
metaEl.setAttribute('content', 'width=' + docEl.clientWidth + ',initial-scale=1,maximum-scale=1, minimum-scale=1,user-scalable=no');
// 设置data-dpr属性，留作的css hack之用
docEl.setAttribute('data-dpr', dpr);
// 动态写入样式
docEl.firstElementChild.appendChild(fontEl);
fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}';
window.dpr = dpr;
window.rem = rem;

new Vue({
  render: h => h(App)
}).$mount('#app')

