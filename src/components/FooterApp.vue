<script>
    export default{
        props:{
            items:{
                type:Object,
                required: true,
            }
        },
    }
</script>

<template>
    <div class="container">
        <div class="row f-wrap">
            <div class="col-6">
                <li class="title-list">{{ items.adress }}</li>
            </div>
            <div class="col-2">
                <li class="title-list">Explore</li>
            </div>
            <div class="col-2">
                
            </div>
            <div class="col-2">
                <li class="title-list">Information</li>
            </div>
            <div class="col-6">
                <ul>
                    <li class="hover-green">{{ items.id }}</li>
                    <li class="hover-green">{{ items.orario }}</li>
                    <li class="hover-green">{{ items.email }}</li>
                    <ul class="flex">
                        <li class="li-brand hover-green"><font-awesome-icon :icon="['fab', 'square-facebook']" /></li>
                        <li class="li-brand hover-green"><font-awesome-icon :icon="['fab', 'square-twitter']" /></li>
                        <li class="li-brand hover-green"><font-awesome-icon :icon="['fab', 'square-instagram']" /></li>
                        <li class="li-brand hover-green"><font-awesome-icon :icon="['fab', 'linkedin']" /></li>
                    </ul>
                </ul>
            </div>
            <div class="col-2">
                
                <li v-for="(item, i) in items.listFooterStarts" class="hover-green">{{ item }}</li>
            </div>
            <div class="col-2">

                <li v-for="(item, i) in items.listFooterMids" class="hover-green">{{ item }}</li>
            </div>
            <div class="col-2">
                
                <li v-for="(item, i) in items.listFooterEnds" class="hover-green">{{ item }}</li>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @use '../style/general.scss';
    @use '../style/partials/variable.scss';
    @use '../style/partials/mixin.scss';
</style>