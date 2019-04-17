<template>
    <div>
        <cart-header></cart-header>
        <cart-list :allSum="allSum" :carList="carList" @change="handleChangeSum"></cart-list>
        <cart-footer :allSum="allSum"></cart-footer>
        <common-tabbar></common-tabbar>
    </div>
</template>

<script>
import CartHeader from './components/Header'
import CartList from './components/List'
import CartFooter from './components/Footer'
import CommonTabbar from '../../components/tabBar/TabBar'
export default {
    name:'Cart',
    data(){
        return{
            allSum:0,
            carList:[]
        }
    },
    components:{
        CartHeader,
        CartList,
        CartFooter,
        CommonTabbar
    },
    methods:{
        handleChangeSum:function(val){
            this.allSum=val;
        },
        getCartInfo:function(){
            this.axios.get('/api/cart.json').then(this.handelGetCartInfoSucc)
        },
        handelGetCartInfoSucc:function(res){
            res=res.data;
            if(res.ret&&res.data){
                this.carList=res.data.cartlist;
                this.allSum=res.data.allSum;
            }
        }
    },
    mounted(){
        this.getCartInfo();
    }
}
</script>

<style scoped>

</style>


