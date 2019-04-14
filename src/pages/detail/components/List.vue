<template>
    <div class="list" ref="list">
         <div class="header">
            <div class="header-title">商品详情</div>
        </div>
        <ul class="warap">
            <li class="item" v-for="item of info.detailImgList" :key="item.id">
                <img class="item-img" :src="item.imgUrl"/>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'List',
    props:{
        info:Object
    },
    methods:{
        handleScroll:function(){
            var listY=this.$refs.list.offsetTop-48;
            this.$emit("change",listY);
        }
    }
    ,
    activated(){
        window.addEventListener('scroll',this.handleScroll)
    },
    deactivated(){
        window.removeEventListener('scroll',this.handleScroll)
    }
}
</script>

<style lang="stylus" scoped>
.list
    background-color :#fff
    width :100%
    margin-top :.6rem
    .header
        padding :0 .6rem
        height :2rem
        .header-title
            float :left
            height:100%
            line-height :2rem
    .warap
        .item
            width :100%
            overflow :hidden
            .item-img
                 width :100%
                 max-width :640px          
</style>

