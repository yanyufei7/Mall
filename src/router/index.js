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
import OList from '@/pages/olist/OList'
//子组件
import AllOrder from '@/pages/olist/components/AllOrder'
import PayOrder from '@/pages/olist/components/PayOrder'
import SendOrder from '@/pages/olist/components/SendOrder'
import GetOrder from '@/pages/olist/components/GetOrder'
import CommentOrder from '@/pages/olist/components/CommentOrder'

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
      component: Order,
      meta:{requireAuth:true},
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
    },
    {
      path: '/olist',
      name: 'OList',
      component: OList,
      meta:{requireAuth:true},
      children:[{
            path: '/olist/all',
            name: 'all',
            meta:{requireAuth:true},
            component: AllOrder
          },{
            path: '/olist/pay',
            name: 'pay',
            meta:{requireAuth:true},
            component: PayOrder
          },{
            path: '/olist/send',
            name: 'send',
            meta:{requireAuth:true},
            component: SendOrder
          },{
            path: '/olist/get',
            name: 'get',
            meta:{requireAuth:true},
            component: GetOrder
          },{
            path: '/olist/comment',
            name: 'comment',
            meta:{requireAuth:true},
            component: CommentOrder
      }]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
