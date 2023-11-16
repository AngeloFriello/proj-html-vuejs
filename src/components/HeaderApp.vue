<script>

    export default{
        props:{
            items:{
                type:Object,
                required: true,
            }
        },
        components:{

        },
		data(){
			return{

			}
		},
		methods:{

		},
    }
</script>

<template>
    <div class="flex container nav-bar">
        <div>
            <img src="../../public/dark-logo.png" alt="" class="logo">
        </div>
        <ul class="flex">
            <li class="nav-bar__item" v-for="(item, i) in items">{{item}}<font-awesome-icon :icon="['fas', 'chevron-down']" class="icon_chevron" /></li>
            <li class="nav-bar__item"><font-awesome-icon :icon="['far', 'circle-user']" /></li>
        </ul>
        <form action="" class="search">
            <input type="search" placeholder="Search..." class="search">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="icon_search" />
        </form>
        
    </div>
</template>

<style lang="scss">
    @use '../style/general.scss';
    @use '../style/partials/variable.scss';
    @use '../style/partials/mixin.scss';
</style>