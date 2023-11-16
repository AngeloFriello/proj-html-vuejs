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
        <div class="row flex">

            <div class="col-3" v-for="item in items">
                <h3>{{ item.title }} <br> {{ item.subtitle }}</h3>
                <div class="text-number">{{ item.number }}</div>
                <p class="small_text">{{ item.text }}</p>
            </div>

        </div>
    </div>
</template>

<style lang="scss">
    @use '../../style/general.scss';
    @use '../../style/partials/variable.scss';
    @use '../../style/partials/mixin.scss';
</style>