<template>
    <div class="pay">
        <van-submit-bar
        :price="sum*100"
        button-text="提交订单"
        @submit="handleSubmitClick">
        </van-submit-bar>
    </div>
</template>

<script>
import { Toast } from 'vant';
import { SubmitBar } from 'vant';
export default {
    name:'Pay',
    props:{
        sum:Number
    },
    methods:{
        handleSubmitClick:function(){
            Toast('已提交支付');
        }
    }
}
</script>

<style lang="stylus" scoped>
.pay
    margin-top :3rem
</style>


