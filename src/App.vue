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
				headerInp:[
					{
						name:'Home',
						visibility: false,
					},
					{
						name:'Pages',
						visibility: false,
					},
					{
						name:'Courses',
						visibility: false,
					},
					{
						name:'Features',
						visibility: false,
					},
					{
						name:'Blog',
						visibility: false,
					},
					{
						name:'Shop',
						visibility: false,
					},
				],
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
				},
				dropDownHeader:[
					'Start here',
					'Success Story',
					'About me',
					'About us 01',
					'About us 02',
					'About us 03',
					'Contact me',
					'Contact us',
					'Purchase Guide',
					'Privacy Policy',
					'Terms of Service',
				]

			}
		},
		methods:{

		},
    }
</script>

<template>
	<header>
		<HeaderApp :items="headerInp" :dropDown="dropDownHeader"/>
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
