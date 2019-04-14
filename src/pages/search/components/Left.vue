<template>
    <ul class="left">
        <li class="item" v-for="item of kindNames" 
            :class="{actived:navIndex==item.id}" 
            :key="item.id" 
            @click="handleClick(item.id,item.title)">
            <p class="item-title">{{item.title}}</p>
        </li>
    </ul>
</template>

<script>
export default {
    name:'Left',
    data(){
        return {
            navIndex:0
        }
    },
    props:{
        categories:Object
    },
    computed:{
        kindNames(){
            const tempList=[];
            const kindNames=[]  
            for(let i in this.categories){
                tempList.push(i);
            }
            for(let i=0;i<tempList.length;i++){
                var obj={id:i,title:tempList[i]}
                kindNames.push(obj)
            }
            return kindNames;
        }
    },
    methods:{
        handleClick:function(id,title){
            this.navIndex=id;
            this.$emit('change',title);
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
.left
    position: relative
    left: 0
    top: 0
    float: left
    bottom: 0
    width: 25%
    .item
        padding: 1.2rem 0
        display: flex
        align-items: center
        justify-content: center

    .actived
        background-color: #fff
.actived::before
    display: block
    content: ''
    width: .3rem
    height: 1.4rem
    background-color: $bgColor
    position: absolute
    left: 0
</style>


