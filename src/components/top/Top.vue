<template>
<fade-animate>
    <div class="wrapper" @click="handleClick" ref="wrapper" v-show="showTop">
        <div class="top">
            <span class="iconfont">&#xe646;</span>
            顶部
        </div>
    </div>
</fade-animate>
</template>

<script>
import FadeAnimate from './../fade/Fade'
export default {
    name:'Top',
    components:{
        FadeAnimate
    },
    data(){
        return{
            showTop:false
        }
    },
    methods:{
        handleClick:function(){
            window.scrollTo(0,0)
        },
        handleScroll:function(){
            const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
            //console.log(top)
            if(top<30){
                this.showTop=false
            }else{
                this.showTop=true
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
.wrapper
    position :fixed
    width :2rem
    height :2rem
    right :2rem
    bottom:6rem
    cursor :pointer
    z-index :999
    padding :.4rem
    border-radius:100%
    border:1px solid #ccc
    background-color :#fff
    .top
        width :100%
        height :100%
</style>