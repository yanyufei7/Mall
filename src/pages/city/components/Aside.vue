<template>
    <ul class="aside">
        <li class="item" 
            v-for="item of letters" 
            :key="item"
            @click="handleLetterClick"
        >{{item}}</li>
    </ul>
</template>

<script>
export default {
    name:'Aside',
    props:{
        cities:Object
    },
    computed:{
        letters(){
            const letters=[]
            for(let i in this.cities){
                letters.push(i);
            }
            return letters;
        }
    },
    methods:{
        handleLetterClick:function(e){
            this.$emit('change',e.target.innerText)
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
.aside
    position :fixed
    top:5rem
    width :1rem
    right :.5rem
    display :flex
    flex-direction :column
    justify-content :center
    .item
        text-align :center
        line-height :1.6rem
        color:$bgColor
</style>


