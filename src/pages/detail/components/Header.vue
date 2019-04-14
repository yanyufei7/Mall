<template>
    <div>
        <div class="back" v-show="showBackIcon" @click.stop="handleGoBackClick">
            <span class="iconfont back-icon">&#xe62d;</span>
        </div>
        <div class="header" v-show="!showBackIcon"  :style="opacityStyle">
            <div class="header-back" @click.stop="handleGoBackClick">
                <span class="back-icon iconfont">&#xe62d;</span>
            </div>
            <div class="header-menu">
                <ul class="menu-list">
                    <li class="item" :class="{actived:scrolltop<commonY}" @click="handlechangeClick">宝贝</li>
                    <li class="item" :class="{actived:scrolltop>=commonY&&scrolltop<listY}" @click="handlechangeClick">评论</li>
                    <li class="item" :class="{actived:scrolltop>=listY}" @click="handlechangeClick">详情</li>
                </ul>
            </div>
        </div>       
    </div>
</template>

<script>
export default {
    name:'Header',
    data(){
        return {
            scrolltop:0,
            showBackIcon:true,
            opacityStyle:{
                opacity:0
            }
        }
    },
    props:{
        commonY:Number,
        listY:Number
    },
    methods:{
        handleGoBackClick:function(){
            history.go(-1);
        },
        handleScroll:function(){
            const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
            this.scrolltop=top;
            if(top>60){
                let opacity=top/140
                opacity =opacity>1?1:opacity
                this.opacityStyle={opacity}
                this.showBackIcon=false
            }else{
                this.showBackIcon=true
            }
            //console.log(top)
        },
        handlechangeClick:function(e){
            if(e.target.innerText=="宝贝"){
                window.scrollTo(0,0)
            }
            if(e.target.innerText=="评论"){
                window.scrollTo(0,this.commonY)
            }
            if(e.target.innerText=="详情"){
                window.scrollTo(0,this.listY)
            }
        }
    },
    activated(){
        window.addEventListener('scroll',this.handleScroll)
    },
    deactivated(){
        window.removeEventListener('scroll',this.handleScroll)
    }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
.back
    position :absolute
    top:1rem
    left :1rem
    width :2rem
    height :2rem
    z-index :999
    .back-icon
        padding :.4rem
        font-size :2rem
        border-radius :100%
        background-color :rgba(0,0,0,0.5)
        color:rgba(255,255,255,0.8)
.header
    position: fixed
    top: 0
    max-width: 640px
    width: 100%
    display: flex
    line-height: 3rem
    background-color:#fff
    z-index :99
    .header-back
        flex:1
        height :100%
        .back-icon
            font-size:1rem   
    .header-menu
        flex:6
        position: relative
        .menu-list
            color: #7d7e80
            display :flex
            align-content:center
            .item
                flex:1
                position :relative
            .actived::before
                display: block
                content: ''
                width: 100%
                height: .2rem
                margin :auto
                background-color: $bgColor
                position: absolute
                bottom :0
</style>


