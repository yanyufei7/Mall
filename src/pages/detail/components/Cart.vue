<template>
    <div class="cart">
        <van-goods-action class="vanGoods">
            <van-goods-action-mini-btn
                icon="chat-o"
                text="客服"
                @click="handleServerClick"
            />
            <van-goods-action-mini-btn
                icon="cart-o"
                text="购物车"
                @click="handleGoCartClick"
            />
            <van-goods-action-big-btn
                text="加入购物车"
                @click="handleCartClick"
            />
            <van-goods-action-big-btn
                primary
                text="立即购买"
                @click="handleBuyClick"
            />
        </van-goods-action>
        <van-sku class="vanSku"
            v-model="showSku"
            :sku="sku"
            :goods="goods"
            :goods-id="goodsId"
            :quota="quota"
            :quota-used="skuData.quotaUsed"
            :show-add-cart-btn="showAddCartBtn"
            :reset-stepper-on-hide="resetStepperOnHide"
            :reset-selected-sku-on-hide="resetSelectedSkuOnHide"
            @buy-clicked="handleOKClick"
        />
    </div>
</template>

<script>
import {GoodsAction,GoodsActionBigBtn,GoodsActionMiniBtn} from 'vant';
import { Sku } from 'vant';
import { Toast } from 'vant';
export default {
    name:'Cart',
    props:{
        skuData:Object
    },
    data(){
        return {
            sku: {
                "tree": [
                    {
                        "k": "颜色",
                        "v": [
                            {
                                "id": "1001",
                                "name": "银色"
                            },
                            {
                                "id": "1002",
                                "name": "黑色"
                            },
                            {
                                "id": "1003",
                                "name": "白色"
                            }
                        ],
                        "k_s": "s1",
                        "count": 3
                    },
                    {
                        "k": "内存",
                        "v": [
                            {
                                "id": "2001",
                                "name": "64G"
                            },
                            {
                                "id": "2002",
                                "name": "128G"
                            },
                            {
                                "id": "2003",
                                "name": "218G"
                            }
                        ],
                        "k_s": "s2",
                        "count": 3
                    }
                ],
                "list": [
                    {
                        "id": 222,
                        "price": 199000,
                        "s1": "1001",
                        "s2": "2001",
                        "stock_num": 110,
                        "goods_id": 1000008
                    },
                    {
                        "id": 223,
                        "price": 299000,
                        "s1": "1001",
                        "s2": "2002",
                        "stock_num": 244,
                        "goods_id": 1000008
                    },
                    {
                        "id": 224,
                        "price": 399000,
                        "s1": "1001",
                        "s2": "2003",
                        "stock_num": 332,
                        "goods_id": 1000008
                    },
                    {
                        "id": 225,
                        "price": 199000,
                        "s1": "1002",
                        "s2": "2001",
                        "stock_num": 21,
                        "goods_id": 1000008
                    },
                    {
                        "id": 226,
                        "price": 299000,
                        "s1": "1002",
                        "s2": "2002",
                        "stock_num": 334,
                        "goods_id": 1000008
                    },
                    {
                        "id": 227,
                        "price": 399000,
                        "s1": "1002",
                        "s2": "2003",
                        "stock_num": 56,
                        "goods_id": 1000008
                    },
                    {
                        "id": 228,
                        "price": 199000,
                        "s1": "1003",
                        "s2": "2001",
                        "stock_num": 221,
                        "goods_id": 1000008
                    },
                    {
                        "id": 229,
                        "price": 299000,
                        "s1": "1003",
                        "s2": "2002",
                        "stock_num": 110,
                        "goods_id": 1000008
                    },
                    {
                        "id": 230,
                        "price": 399000,
                        "s1": "1003",
                        "s2": "2003",
                        "stock_num": 899,
                        "goods_id": 1000008
                    }
                ],
                "price": "1990",
                "stock_num": 30000,
                "none_sku": false
            },
            goods: {
                "title": "小米9 SE骁龙712超广角4800万三摄拍照智能手机",
                "picture": "static/images/xiaomi/xiaomi01.jpg"
            },
            goodsId: "1000008",
            quota: 0,
            quotaUsed: 999,
            showSku:false,
            resetStepperOnHide:false,
            showAddCartBtn:false,
            resetSelectedSkuOnHide:false
        }
    },
    methods:{
        handleServerClick:function(){
            Toast('客服不在线');
        },
        handleGoCartClick:function(){
            this.$router.push('/cart')
        },
        handleCartClick:function(){
            Toast.success('已加入购物车');
        },
        handleBuyClick:function(){
            this.showSku=true
        },
        handleOKClick:function(){
            this.$router.push('/cart')
        }
    }
}
</script>

<style lang="stylus" scoped>
.vanGoods
.vanSku
    position: fixed
    max-width: 640px
    bottom: 0
    width: 100%
    box-sizing: border-box 
    margin :auto  
</style>

