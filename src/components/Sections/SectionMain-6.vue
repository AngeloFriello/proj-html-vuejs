<script>
    export default{
        props:{
            items:{
                type:Object,
                required:true,
            },
            cards:{
                type:Object,
                required:true,
            }
        }
    }
</script>

<template>
    <div class="container">
        <div class="row flex">

            <div class="col-4">
                <p class="small_text">ENJOEBLE INSIGHTS</p>
                <h4 >Most Viewed <a href="" class="c_green f-w_light">Best Blogs</a></h4>
                <ul>
                    <li class="list_item flex" v-for="item in items">
                        <div>
                            <font-awesome-icon :icon="['fas', 'arrow-right']" class="arrow-right" />
                        </div> 
                        <div>
                            {{ item }}
                        </div>
                    </li>
                </ul>
            </div>
            <div class="col-4" v-for="card in cards">
                <div class="card">
                    <div class="card-body">
                        <div>
                            <img :src="card.image" alt="">
                        </div>
                        <div class="card-footer">
                            <p class="small_text">{{card.job}}</p>
                            <h3>{{card.title}}</h3>
                            <ul class="flex">
                                <li><font-awesome-icon :icon="['far', 'calendar']" /> {{  card.date  }} </li>
                                <li><font-awesome-icon :icon="['far', 'eye']" /> {{ card.views }} views</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @use '../../style/general.scss';
    @use '../../style/partials/variable.scss';
    @use '../../style/partials/mixin.scss';
</style>
