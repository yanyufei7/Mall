<template>
    <div class="city">
        <city-header :cities="cities"></city-header>
        <city-list :cities="cities" :letter="letter"></city-list>
        <city-aside :cities="cities" @change="handleLetterChange"></city-aside>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CityList from './components/List'
import CityAside from './components/Aside'
export default {
    name:'City',
    components:{
        CityHeader,
        CityList,
        CityAside
    },
    data(){
        return {
            cities:{},
            letter:''
        }
    },
    methods:{
        getCityList:function(){
            this.axios.get('/api/city.json').then(this.handleGetCityListSucc)
        },
        handleGetCityListSucc:function(res){
            res=res.data
            if(res.ret&&res.data){
                this.cities=res.data.cities;
            }
        },
        handleLetterChange:function(letter){
            this.letter=letter
        }
    },
    mounted(){
        this.getCityList()
    }
}
</script>

<style lang="stylus" scoped>

</style>


