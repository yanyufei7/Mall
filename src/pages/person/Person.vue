<template>
  <div>
    <person-header></person-header>
    <person-order></person-order>
    <person-list></person-list>
    <person-logout></person-logout>
    <common-tabbar></common-tabbar>
  </div>
</template>

<script>
import PersonHeader from './components/Header'
import PersonOrder from './components/Order'
import PersonList from './components/List'
import PersonLogout from './components/LogOut'
import CommonTabbar from '../../components/tabBar/TabBar'
export default {
  name: 'Person',
  components:{
    PersonHeader,
    PersonOrder,
    PersonList,
    PersonLogout,
    CommonTabbar
  },
  data(){
    return{

    }
  }
}
</script>

<style>

</style>