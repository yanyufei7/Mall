<template>
    <div class="right">
        <div class="rightwrap" ref="rightwrap">
            <ul class="categories-list">
                <li class="categories-item" v-for="(item,key) of categories" :key="key">
                    <div class="categorie-name" :ref="key">{{key}}</div>
                    <ul class="detail-list">
                        <li class="detail-item" v-for="innerItem of item" :key="innerItem.id">
                            <div>
                                <div class="detail-item-img"></div>
                                <p class="detail-item-name">{{innerItem.name}}</p>
                            </div>                    
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name:'Right',
    props:{
        categories:Object,
        title:String
    },
    mounted(){
        this.scroll=new Bscroll(this.$refs.rightwrap,{click:true})
    },
    watch:{
        title(){
            if(this.title){
                const element=this.$refs[this.title][0];
                console.log(element);
                this.scroll.scrollToElement(element);
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
.right
    position: relative
    width: 75%
    top: 0
    right: 0
    bottom: 0
    float: left
    background-color: #fff
    .rightwrap
        position:absolute
        overflow: hidden
        height: 44rem
        background-color: #fff
        .categories-list
            width: 100%
            padding-bottom: 20rem
            &::after
                display: block
                content: ''
                clear: both
                height: 0
                visibility: hidden
            .categories-item
                width: 100%
                float: left
                .categorie-name
                    width: 100%
                    padding: .5rem
                    text-align: left
                .detail-list
                    width: 100%
                    .detail-item
                        box-sizing: border-box
                        width: 33%
                        height: 5rem
                        float: left
                        padding:0 1.3rem
                        text-align: center
                        position: relative
                        .detail-item-img
                            height: 3.5rem
                            margin: 0 auto
                            background-color: $bgColor
                        .detail-item-name
                            margin-top: .2rem
                            font-size: .8rem   
</style>


