<script>
    export default{
        props:{
            filippo:{
                type:Object,
            }
        }
    }
</script>

<template>
    <div class="container">
        <div class="row flex">
            <div class="col-5">
                <h2>Distant learning for futher expansion</h2>
                <p class="mid_text">Learning a life-long journey that in fact we never find the terminate stop. Stop searchjing, enkoy the process.</p>
                <button class="button_green"><font-awesome-icon :icon="['fas', 'download']" class="icon_download" />Download free guide</button>
                <p>Have questuins?<a href="" class="link_sample"> Get Free Sample <font-awesome-icon :icon="['fas', 'arrow-right']" /></a></p>   
            </div>
            <div class="col-7 p-relative">
                <img src="../../../public/about-me-profile.png" alt="" class="z-2">
                <img src="../../../public/maxcoach-shape-07.png" alt="" class="p-absolute b-0 r-100 z-1">
                <img src="../../../public/maxcoach-shape-08.png" alt="" class="p-absolute img_relative-top">
                <img src="../../../public/maxcoach-shape-08.png" alt="" class="p-absolute img_relative-bot">
                <img src="../../../public/maxcoach-shape-02.png" alt="" class="p-absolute img_relative-right">
            </div>
        </div>
        <div>
            <ul class="flex list-logs">
                <li><img src="../../../public/client-logo-01.png" alt=""></li>
                <li><img src="../../../public/client-logo-02.png" alt=""></li>
                <li><img src="../../../public/client-logo-03.png" alt=""></li>
                <li><img src="../../../public/client-logo-04.png" alt=""></li>
                <li><img src="../../../public/client-logo-05.png" alt=""></li>
                <li><img src="../../../public/client-logo-06.png" alt=""></li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
    @use '../../style/general.scss';
    @use '../../style/partials/variable.scss';
    @use '../../style/partials/mixin.scss';
</style>