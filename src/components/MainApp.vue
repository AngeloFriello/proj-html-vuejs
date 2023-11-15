<script>
    import SectionMain1 from './Sections/SectionMain-1.vue';

    export default{
        components:{
            SectionMain1,
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
    <section class="section-1">
        <SectionMain1/>
    </section>
    <section>
        
    </section>
</template>

<style lang="scss">
    @use '../style/general.scss';
    @use '../style/partials/variable.scss';
    @use '../style/partials/mixin.scss';
</style>