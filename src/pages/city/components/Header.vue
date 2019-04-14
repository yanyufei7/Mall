<template>
    <div>
        <div class="header">
            <router-link tag="div" to="/"  class="header-back">
                <span class="back-icon iconfont">&#xe62d;</span>
            </router-link>
            <div class="header-search">
                <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音"/>       
            </div>
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item" 
                    v-for="item of list" 
                    :key="item.id"
                    @click="handleSelectClick(item.name)">
                    {{item.name}}
                </li>
                <li class="search-item" v-show="hasCityData">没找到对应城市</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import {mapState,mapMutations} from 'vuex'
export default {
    name:'Header',
    props:{
        cities:Object
    },
    data(){
        return{
            keyword:'',
            list:[],
            timer:null
        }
    },
    computed:{
        hasCityData(){
            return !this.list.length;
        }
    },
    mounted(){
        this.scroll=new Bscroll(this.$refs.search)
    },
    watch:{
        keyword(){
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.keyword){
                this.list=[]
                return
            }
            this.timer=setTimeout(()=>{
                const result=[]
                for(let i in this.cities){
                    this.cities[i].forEach(val => {
                        if(val.spell.indexOf(this.keyword)>-1||
                        val.name.indexOf(this.keyword)>-1){
                            result.push(val)
                        }
                    });
                }
                this.list=result
            },100)
        }
    },
    methods:{
        handleSelectClick:function(city){
            this.changeCity(city)
            console.log('1111')
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
    }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
.header
    position: fixed
    top: 0
    max-width: 640px
    width: 100%
    display: flex
    line-height: 3rem
    background-color: $bgColor
    .header-back
        flex:1
        height :100%
        .back-icon
            font-size:1rem   
    .header-search
        flex:6
        position: relative
        .search-input
            background-color: #e5e5e5
            color: #7d7e80
            padding-left :1rem
            border-radius: 1rem
            line-height: 2rem
            position: absolute
            top:50%
            left:50%
            width: 90%
            transform:translate(-50%,-50%)
.search-content
    position :absolute
    top:3rem
    bottom :0
    left :0
    right :0
    z-index :1
    max-width:640px
    margin :auto
    overflow :hidden
    background-color :#fff
    .search-item
        text-align :left   
        padding :0 .6rem
        box-sizing:border-box  
        width :100%
        height :2rem
        line-height :2rem
</style>


