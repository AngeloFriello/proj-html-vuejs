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
    <section>
        <SectionMain1/>
    </section>
</template>

<style lang="scss">
    @use '../style/general.scss';
    @use '../style/partials/variable.scss';
    @use '../style/partials/mixin.scss';
</style>