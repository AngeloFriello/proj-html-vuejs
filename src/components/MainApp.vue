<script>
    import SectionMain1 from './Sections/SectionMain-1.vue';
    import SectionMain2 from './Sections/SectionMain-2.vue';
    import SectionMain3 from './Sections/SectionMain-3.vue';
    import SectionMain4 from './Sections/SectionMain-4.vue';
    import SectionMain5 from './Sections/SectionMain-5.vue';
    import SectionMain6 from './Sections/SectionMain-6.vue';
    import SectionMain7 from './Sections/SectionMain-7.vue';

    export default{
        props:{
            simulatedToLeard:{
                price:[''],
                name:[''],
                lessons:'',
                Studends:'',
            }
        },
        components:{
            SectionMain1,
            SectionMain2,
            SectionMain3,
            SectionMain4,
            SectionMain5,
            SectionMain6,
            SectionMain7,
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
        <SectionMain1 :filippo="cucina" />
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
    <section class="section-5">
        <SectionMain5/>
    </section>
    <section class="section-6">
        <SectionMain6/>
    </section>
    <section class="section-7">
        <SectionMain7/>
    </section>
</template>

<style lang="scss">
    @use '../style/general.scss';
    @use '../style/partials/variable.scss';
    @use '../style/partials/mixin.scss';
</style>