import Vue from 'vue'
import App from './App'
import router from './router'
//引入初始化CSS
import '@/assets/style/reset.css' 
//引入iconfont
import '@/assets/style/iconfont.css'
//引入解决移动端点击延时
import fastClick from 'fastclick'
//引入轮播插件及样式
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
//引入Vant组件
import Vant from 'vant'
import 'vant/lib/index.css'
//引入Vuex
import store from './store'
//兼容浏览器
import 'babel-polyfill'
//图片延时加载
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
fastClick.attach(document.body) //绑定到body页面
Vue.use(VueAwesomeSwiper)//使用轮播图
Vue.use(Vant);    //使用Vant组件
Vue.use(VueLazyload, {  preLoad: 1.3, attempt: 1 }) //使用延时加载

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
