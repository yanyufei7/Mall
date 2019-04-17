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
//引入axios调用HTTP请求
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.axios=axios //使用axios
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

//路由拦截
router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth){
    if(store.state.token){
      next();
    }else{
      next({
        path:'/login',
        query:{redirect:to.fullPath}
      });
    }
  }else{
    next();
  }
})

//HTTP请求拦截器
axios.interceptors.request.use(
  config=>{
    //如果token存在，则在每个http Header上加上token
    if(store.state.token){
      config.headers.Authorization=store.state.token
    }
    return config
  },
  err=>{
    return Promise.reject(err);
  }
)
//HTTP响应拦截器
axios.interceptors.response.use(
  response=>{
    return response;
  },
  error=>{
    if(error.response){
      switch(error.response.status){
        //返回10002表示token已过期，则清除token，并跳转到登录页面
        case 10002:
          store.commit('logout');
          router.replace({
            path:'/login',query:{redirect:router.currentRoute.fullPath}
          })
      }
    }
    return Promise.reject(error.response.data);
  }
)
