import Vue from 'vue'
import Router from 'vue-router'
//组件
import Home from '@/pages/home/Home'
import Recommend from '@/pages/recommend/Recommend'
import Search from '@/pages/search/Search'
import Cart from '@/pages/cart/Cart'
import Order from '@/pages/order/Order'
import Person from '@/pages/person/Person'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import Login from '@/pages/login/Login'
import Entry from '@/pages/entry/Entry'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/person',
      name: 'Person',
      component: Person
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/entry',
      name: 'Entry',
      component: Entry
    }
  ],scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
