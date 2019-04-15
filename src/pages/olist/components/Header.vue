<template>
    <ul class="list">
        <div class="item" 
            v-for="item of list" 
            :class="{actived:subpage==item.link}" 
            :key="item.id" 
            @click="handleClick(item.link)">
            <div class="item-title">{{item.title}}</div>
        </div>
    </ul>
</template>

<script>
export default {
    name:'Header',
    data(){
        return{
            subpage:'',
            list:[
                    {id:'1001',title:'全部',link:'all'},
                    {id:'1002',title:'待付款',link:'pay'},
                    {id:'1003',title:'待发货',link:'send'},
                    {id:'1004',title:'待收货',link:'get'},
                    {id:'1005',title:'待评价',link:'comment'}
                ]
        }
    },
    methods:{
        handleClick:function(value){
            this.subpage=value
            this.$router.push('/olist/'+value)
        }
    },
    created(){
        this.subpage=this.$route.name
    }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
.list
    position: fixed
    top: 0
    max-width: 640px
    width: 100%
    display: flex
    line-height: 3rem
    background-color:#fff
    z-index :99
    .item
        flex :1
        position :relative
        .item-title
            width :80%
            box-sizing:border-box
            margin:auto
    .actived
        .item-title
            color :$bgColor
            &::before
                display :block
                content :''
                position :absolute
                bottom :0
                width :80%
                height :.2rem
                margin:auto
                background-color :$bgColor
</style>


