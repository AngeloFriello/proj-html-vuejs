<script>
    export default{
        props:{
            items:{
                type:Object,
                required:true,
            }
        }
    }
</script>

<template>
    <div class="container-fluid">
        <div class="row flex f-wrap">
            <div class="col-12">
                <p class="small_text">GREAT WORDS ABOUT MAXCOACH</p>
                <h3>Our <a href="">top learnes'</a> verbatim </h3>
            </div>
        </div>
        <div class="row flex">

            <div class="col-4" :class="item.visibility === false ? 'active' : 'ciro'" v-for="(item, i) in items">
                <h4>{{ item.title }}</h4>
                <p>{{ item.text }}</p>
                <div class="card">
                    <div>
                        <img :src=" item.image " alt="">
                    </div>
                    <div>
                        <h5>{{item.name}}</h5>
                        <p>{{ item.job }}</p>
                    </div>
                </div>                
            </div>
    
        </div>

        <div class="row">
            <div class="col-3">
                <div class="point point-active"></div>
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
            </div>
        </div>

        <div class="row">
            <div class="col-12 p-relative">
                <img src="../../../public/maxcoach-shape-01.png" alt="" class="p-absolute img_left">
                <img src="../../../public/maxcoach-shape-02.png" alt="" class="p-absolute img_right">
                <h4>Start today for getting <a href="" class="c_green f-w_light">Online Certification</a></h4>
                <h3>You can be your own guiding star with our help!</h3>
                <button class="button_green">Get started now</button>
            </div>
        </div>
    </div>

</template>

<style lang="scss">
    @use '../../style/general.scss';
    @use '../../style/partials/variable.scss';
    @use '../../style/partials/mixin.scss';
</style>