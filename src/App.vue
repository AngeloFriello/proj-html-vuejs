<script>
    import HeaderApp from './components/HeaderApp.vue';
    import MainApp from './components/MainApp.vue';
    import FooterApp from './components/FooterApp.vue';

    export default{
        components:{
        HeaderApp,
        MainApp,
        FooterApp,
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
	<header>
		<HeaderApp/>
	</header>
	<main>
		<MainApp/>
	</main>
	<footer>
		<FooterApp/>
	</footer>
</template>

<style>

</style>
