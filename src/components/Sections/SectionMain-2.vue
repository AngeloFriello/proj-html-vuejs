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
    <div class="container">
        <div class="row flex f-wrap">
            <div class="col-12 ">
                <p class="small_text">SIMULATED TO LEARN?</p>
                <h2>Featured Online Courses</h2>
            </div>
            
            <div class="col-6 card flex" v-for="item in items">
                <div>
                    <img :src=" item.image " alt="" class="card_img">
                </div>
                <div class="card_info">
                    <p class="price">{{ item.price }}</p>
                    <h3>{{item.name}}</h3>
                    <div class="flex">
                        <p><font-awesome-icon :icon="['far', 'file']" /> {{item.lessons}} lessons</p>
                        <p><font-awesome-icon :icon="['far', 'user']" /> {{ item.students }} Students</p>
                    </div>
                </div>
            </div>
        
            <div class="col-12">
                <button class="button_green">Viow all courses <font-awesome-icon :icon="['fas', 'arrow-right']" /></button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @use '../../style/general.scss';
    @use '../../style/partials/variable.scss';
    @use '../../style/partials/mixin.scss';
</style>