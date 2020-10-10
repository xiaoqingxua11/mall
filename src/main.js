import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import router from './router';
import fastclick from 'fastclick';
import Vuelazyload from "vue-lazyload";

import 'assets/scss/index.scss';
import "swiper/dist/css/swiper.css";
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload,{
  //差多少开始加载
  preLoad: 1.3,
  error: require('assets/img/error.png'),
  loading: require('assets/img/loading.gif'),
  //尝试次数
  attempt: 1
});

fastclick.attach(document.body);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
