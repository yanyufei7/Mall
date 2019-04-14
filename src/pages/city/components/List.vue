<template>
    <div class="list" ref="list">
        <div>
        <div class="area">
            <div class="title">当前城市</div>
            <div class="area-list">
                <div class="city-item">{{this.currentCity}}</div>
            </div>
        </div>
        <div class="area" v-for="(item,key) of cities" :key="key">
            <div class="title" :ref="key">{{key}}</div>
            <div class="area-list" 
                v-for="innerItem of item" 
                :key="innerItem.id"
                @click="handleCityClick(innerItem.name)">
                <div class="city-item">{{innerItem.name}}</div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import　{mapState,mapMutations} from 'vuex'
export default {
    name:'List',
    props:{
        cities:Object,
        letter:String
    },
    computed:{
        ...mapState({currentCity:'city'})
    },
    mounted(){
        this.scroll=new Bscroll(this.$refs.list,{click:true})
    },
    watch:{
        letter(){
            if(this.letter){
                const element=this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
        }
    },
    methods:{
        handleCityClick:function(city){
            this.changeCity(city)
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
    }
}
</script>

<style lang="stylus" scoped>
.list
    position :absolute
    top:3rem
    bottom :0
    left :0
    right :0
    max-width:640px
    margin :auto
    overflow :hidden
    .area
        width :100%
        text-align :left   
        .title
            padding :0 .6rem
            box-sizing:border-box  
            width :100%
            height :2rem
            line-height :2rem
        .area-list
            background-color :#fff
            width :100%
            padding :.6rem
            box-sizing:border-box  
            .city-item
               padding :0 .6rem 

</style>


