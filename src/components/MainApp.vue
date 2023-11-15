<script>
    import SectionMain1 from './Sections/SectionMain-1.vue';
    import SectionMain2 from './Sections/SectionMain-2.vue';

    export default{
        components:{
            SectionMain1,
            SectionMain2,
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
    <section class="section-2">
        <SectionMain2/>
    </section>
</template>

<style lang="scss">
    @use '../style/general.scss';
    @use '../style/partials/variable.scss';
    @use '../style/partials/mixin.scss';
</style>