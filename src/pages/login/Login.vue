<template>
    <div class="login">
        <component :is="type"></component>
        <login-footer @change="handleChangeClick"></login-footer>
    </div>
</template>

<script>
import LoginWayone from './components/WayOne'
import LoginWaytwo from './components/WayTwo'
import LoginFooter from './components/Footer'
export default {
    name:'Login',
    data(){
        return{
            type:'LoginWayone'
        }
    },
    components:{
        LoginWayone,
        LoginWaytwo,
        LoginFooter
    },
    methods:{
        handleChangeClick:function(val){
            val==true?this.type='LoginWayone':this.type='LoginWaytwo'
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>


