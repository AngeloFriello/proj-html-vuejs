<script>
    export default{
        props:{
            items:{
                type:Object,
                required:true,
            },
        }
    }
</script>

<template>
    <div class="container">
        <div class="row flex f-wrap">

            <div class="col-12">
                <p class="mid_text ">MAXCOACH AVAIBLE COURSES</p>
                <h2>Access <a href="">Smart Tutoring</a> Program For Benefits.</h2>
            </div>

            <div class="col-4" v-for="item in items">
                <div>
                    <img :src=" item.image " alt="">
                </div>
                <div>
                    <h3>{{item.title}}</h3>
                    <p>{{ item.text }}</p>
                    <a href="" class="hover-green">{{ item.link }} <font-awesome-icon :icon="['fas', 'arrow-right']" /></a>
                </div>
            </div>

            <div class="col-7 p-relative">
                <div class="p-relative">
                    <img src="../../../public/youtube-background.jpg" alt="" class="img_background">
                    <img src="../../../public/youtube-logo.png" alt="" class="p-absolute logo_youtube">
                </div>

                <img src="../../../public/maxcoach-shape-05.png" alt="" class="p-absolute img_left">
                <img src="../../../public/maxcoach-shape-07.png" alt="" class="p-absolute img_right">
                <img src="../../../public/cloud.svg" alt="" class="p-absolute img_cloud">
            </div>
            <div class="col-5">
                <p class="small_text">GET STARTED <a href="">EFFORTLESSLY</a></p>
                <h3>Enjoy Our <a>Companionship</a></h3>
                <p class="text-main">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam iusto adipisci distinctio, velit ducimus aspernatur quia quibusdam nihil quidem id?</p>
                <a href="">Download free guidebook <font-awesome-icon :icon="['fas', 'arrow-right']" /></a>
            </div>
        </div>
    </div>

</template>

<style lang="scss">
    @use '../../style/general.scss';
    @use '../../style/partials/variable.scss';
    @use '../../style/partials/mixin.scss';
</style>