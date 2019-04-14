<template>
    <div class="list">
        <div class="item" v-for="item of carList" :key="item.id">
            <div class="top-wrap">
                <van-checkbox click="van-checkbox" v-model="item.checked" @change="handleSelectClick(item)"></van-checkbox>
                <img class="item-img" :src="item.imgUrl"/>
                <div class="item-info">
                    <div class="item-title">{{item.name}}</div>
                    <div class="item-price">￥{{item.price}}×{{item.num}}</div>
                </div> 
            </div> 
            <div class="footer-wrap">
                <div class="sum">￥{{item.sum}}</div>
                <div class="cut btn" @click="handleCutClick(item)">-</div>
                <div class="num">{{item.num}}</div>
                <div class="add btn" @click="handleAddClick(item)">+</div>
            </div>         
        </div>
    </div>
</template>

<script>
import { Checkbox, CheckboxGroup } from 'vant';
export default {
    name:'List',
    props:{
        carList:Array,
        allSum:Number
    },
    methods:{
        handleAddClick(item){
            item.num++
            item.sum+=item.price
            if(item.checked){
                let allsum=this.allSum;
                allsum+=item.price
                this.$emit('change',allsum);
            }
        },
        handleCutClick(item){
            if(item.num>1){
                item.num--
                item.sum-=item.price
                if(item.checked){
                    let allsum=this.allSum;
                    allsum-=item.price
                    this.$emit('change',allsum);
                }
            }
        },
        handleSelectClick:function(e){
            let allsum=this.allSum;
            if(e.checked==true){
                allsum+=e.sum
            }else{
                 allsum-=e.sum
            }
            this.$emit('change',allsum);
        }
    }
}
</script>

<style lang="stylus" scoped>
.list
    margin-top :4rem
    .item
        width :95%
        margin : auto
        margin-top :1rem
        background-color :#fff
        padding :.6rem 0
        border-radius: .6rem
        .top-wrap
            height :6rem
            display :flex
            .van-checkbox
                line-height :6rem 
                width :2rem
            .item-img
                width :6rem
                height :6rem
                border-radius: .2rem
            .item-info
                padding :0 .6rem
                flex:1
                overflow :hidden
                .item-title
                    text-align :left
                    padding :0
                    word-break: break-all;
                    word-wrap: break-word;
                    overflow:hidden
                    text-overflow:ellipsis
                    display:-webkit-box
                    -webkit-box-orient:vertical
                    -webkit-line-clamp:2   
                .item-price
                    margin-top :1rem
                    color:#ccc
                    text-align :left
        .footer-wrap
            width :100%
            padding :0 .8rem
            line-height :2rem
            box-sizing :border-box
            display :flex
            .sum
                flex:1
                color:red
                float :left
                overflow :hidden
                text-align :left
            .num
                float :left
                width :2rem
                border-top:1px solid #ccc
                border-bottom:1px solid #ccc
            .btn
                width :2rem
                border:1px solid #ccc
</style>


