<script>
    import SectionMain1 from './Sections/SectionMain-1.vue';
    import SectionMain2 from './Sections/SectionMain-2.vue';
    import SectionMain3 from './Sections/SectionMain-3.vue';
    import SectionMain4 from './Sections/SectionMain-4.vue';

    export default{
        components:{
            SectionMain1,
            SectionMain2,
            SectionMain3,
            SectionMain4,
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
    <section class="section-3">
        <SectionMain3/>
    </section>
    <section class="section-4">
        <SectionMain4/>
    </section>
</template>

<style lang="scss">
    @use '../style/general.scss';
    @use '../style/partials/variable.scss';
    @use '../style/partials/mixin.scss';
</style>