<template>
    <div class="preloader"></div>
</template>

<script>
export default {
    name:'Loading'
}
</script>

<style lang="stylus" scoped>
.preloader
    position:relative;
    &:before
        width:1rem;
        height:1rem;
        border-radius:1rem;
        background:blue;
        content:'';
        position:absolute;
        background:#9b59b6;
        animation: preloader_before 1.5s infinite ease-in-out;
    &:after
        width:1rem;
        height:1rem;
        border-radius:1rem;
        background:blue;
        content:'';
        position:absolute;
        background:#2ecc71;
        left:1rem;
        animation: preloader_after 1.5s infinite ease-in-out;
@keyframes preloader_before 
    0% 
        transform: translateX(0px) rotate(0deg)
    50% 
        transform: translateX(50px) scale(1.2) rotate(260deg); background:#2ecc71;border-radius:0px
    100%
        ransform: translateX(0px) rotate(0deg)
@keyframes preloader_after
    0%
        transform: translateX(0px)
    50%
        transform: translateX(-50px) scale(1.2) rotate(-260deg);background:#9b59b6;border-radius:0px;     
    100%
        transform: translateX(0px)
</style>


