<template>
    <div class="comment" ref="comment">
        <div class="header">
            <div class="header-title">商品评论（{{comment.count}}）</div>
            <div class="header-all iconfont">全部评论&#xe628;</div>
        </div>
        <ul class="comment-list">
            <li class="comment-item" v-for="item of comment.list" :key="item.id">
                <div class="comment-item-wrap">
                    <div class="comment-item-user">
                        <img class="user-img" :src="item.userImg">
                        <span class="user-name">{{item.username}}</span>
                    </div>
                    <div class="comment-item-cont">{{item.content}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'Comment',
    props:{
        comment:Object
    },
    methods:{
        handleScroll:function(){
            var commonY=this.$refs.comment.offsetTop-48;
            this.$emit("change",commonY);
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
@import '~style/mixins.styl'
.comment
    background-color :#fff
    width :100%
    margin-top :.6rem
    .header
        padding :0 .6rem
        height :2rem
        .header-title
            float :left
            height:100%
            line-height :2rem
        .header-all
            float :right
            height:100%
            line-height :2rem
    .comment-list
        width :100%
        .comment-item
            width :100%
            margin-bottom :.2rem
            .comment-item-wrap
                padding :.2rem .6rem
                .comment-item-user
                    width:100%
                    height :1rem
                    text-align :left
                    .user-img
                        float :left
                        height 1rem
                        width :1rem
                        margin-right: .4rem;
                    .user-name
                        overflow:hidden
                        text-overflow:ellipsis
                        white-space:nowrap
                .comment-item-cont
                    margin :.3rem 0
                    text-align :left
                    twoellipsis()
</style>


