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
		props:{

		},
		data(){
			return{
				headerInp:['Home','Pages','Courses','Features','Blog','Shop',],
				footerInp:{
					adress:'Adress',
					id: '382 NE 191st St# 87394 Miami,FL 33179-3899',
					orario:'+1 (305) 547--9909 (9am-5pm EST, Monday - Friday)',
					email:'support@,maxcoach.com',
					listFooterStarts:[
						'Start here',
						'Blog',
						'About us',
					],
					listFooterMids:[
						'Success story',
						'Courses',
						'Contact us'
					],
					listFooterEnds:[
						'Membership',
						'Purchase guide',
						'Privacy policy',
						'Tearms of services'
					],
				}

			}
		},
		methods:{

		},
    }
</script>

<template>
	<header>
		<HeaderApp :items="headerInp"/>
	</header>
	<main>
		<MainApp/>
	</main>
	<footer>
		<FooterApp :items="footerInp"/>
	</footer>
</template>

<style>

</style>
