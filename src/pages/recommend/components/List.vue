<template>
    <van-pull-refresh v-model="isLoading" @refresh="handleRefresh">
        <div class="list" ref="list">
            <router-link tag="div" :to="'/detail/'+item.id" class="item" v-for="item of recommendList" :key="item.id">
                <img :src="item.imgUrl" alt="" class="item-img">
                <div class="item-info">
                    <p class="item-title">{{item.smallname}}</p>
                    <div class="item-price">￥<span class="prict-txt">{{item.price}}</span></div>
                    <span class="item-sell">月销{{item.sold}}</span>
                </div>
            </router-link>
        </div>
    </van-pull-refresh>
</template>
<script>
import { PullRefresh } from 'vant';
export default {
    name:'List',
    props:{
        recommendList:Array
    },
    data(){
        return {
            isLoading:false
        }
    },
    methods:{
        handleRefresh:function(){
            setTimeout(() => {
                this.$toast('刷新成功');
                this.isLoading = false;
                }, 500);
        }
    }
}
</script>

<style lang="stylus" scoped>
.list
    width: 100%
    overflow: hidden
    .item
        width: 50%
        box-sizing: border-box
        padding: .1rem
        background: #fff
        float: left
        .item-img
            width: 100%
            height: 100%
        .item-info
            position: relative
            text-align: left
            padding: .5rem
            font-size: .9rem
            color:#000
            .item-title
                width: 100%
                text-align: center
                overflow:hidden
                text-overflow:ellipsis
            .item-price
                position: absolute
                left: 1rem
                bottom: 0
                color: orange
            .prict-txt
                font-size: 1.2rem
            .item-sell
                position: absolute
                right: 1rem
                bottom: 0
                color: #ccc
.item-title::after
    clear: both
    content: ''
    width: 100%
    display: block
    height: 1rem
</style>


