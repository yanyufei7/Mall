<template>
    <div>
        <order-header></order-header>
        <order-list :orderlist="orderlist"></order-list>
        <order-footer ></order-footer>
        <order-pay :sum="sum"></order-pay>
    </div>
</template>

<script>
import OrderHeader from './components/Header'
import OrderList from './components/List'
import OrderFooter from './components/Footer'
import OrderPay from './components/Pay'

export default {
    name:'Order',
    components:{
        OrderHeader,
        OrderList,
        OrderFooter,
        OrderPay
    },
    data(){
        return{
            sum:0,
            orderlist:[]
        }
    },
    methods:{
        getOrderInfo:function(){
            this.axios.get('/api/order.json').then(this.getOrderInfoSucc)
        },
        getOrderInfoSucc:function(res){
            res=res.data
            if(res.ret&&res.data){
                this.sum=res.data.sum;
                this.orderlist=res.data.orderlist;
            }
        }
    },
    mounted(){
        this.getOrderInfo()
    }
}
</script>

<style lang="stylus" scoped>

</style>

