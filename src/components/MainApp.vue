<script>
    import SectionMain1 from './Sections/SectionMain-1.vue';
    import SectionMain2 from './Sections/SectionMain-2.vue';
    import SectionMain3 from './Sections/SectionMain-3.vue';
    import SectionMain4 from './Sections/SectionMain-4.vue';
    import SectionMain5 from './Sections/SectionMain-5.vue';
    import SectionMain6 from './Sections/SectionMain-6.vue';
    import SectionMain7 from './Sections/SectionMain-7.vue';

    export default{
        components:{
            SectionMain1,
            SectionMain2,
            SectionMain3,
            SectionMain4,
            SectionMain5,
            SectionMain6,
            SectionMain7,
        },
        props:{
       
        },
        
		data(){
			return{
                simulatedToLeard:[
                {
                    image:'../../../public/stock-full-hd-01.jpg',
                    price:'$40.00',
                    name:'Learn to Write a Professional Author',
                    lessons:'20',
                    students:'50',
                },
                {
                    image:'../../../public/stock-full-hd-02.jpg',
                    price:'Free',
                    name:'Learn to Write a Professional Author',
                    lessons:'24',
                    students:'769',
                },
                {
                    image:'../../../public/stock-full-hd-03.jpg',
                    price:'$19.00',
                    name:'Learn to Write a Professional Author',
                    lessons:'17',
                    students:'62',
                },
                {
                    image:'../../../public/stock-full-hd-04.jpg',
                    price:'$26.00',
                    name:'Learn to Write a Professional Author',
                    lessons:'14',
                    students:'67',
                },
                {
                    image:'../../../public/stock-full-hd-05.jpg',
                    price:'$39.00',
                    name:'Learn to Write a Professional Author',
                    lessons:'6',
                    students:'51',
                },
                {
                    image:'../../../public/stock-full-hd-06.jpg',
                    price:'$59.00',
                    name:'Learn to Write a Professional Author',
                    lessons:'14',
                    students:'76',
                }
            ],
            smartTuroring:[
                {
                    image:'../../../public/home-1.png',
                    title:'Customize Preferences',
                    text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At consectetur harum nam dolores adipisci deleniti alias eveniet culpa provident soluta!',
                    link:'Start here',
                },
                {
                    image:'../../../public/home-2.png',
                    title:'Cloud Storage',
                    text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At consectetur harum nam dolores adipisci deleniti alias eveniet culpa provident soluta!',
                    link:'Get Free Quote',
                },
                {
                    image:'../../../public/home-3.png',
                    title:'Multimedia Channels',
                    text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At consectetur harum nam dolores adipisci deleniti alias eveniet culpa provident soluta!',
                    link:'Start now',
                },
                
            ],
            topLearnes:[
                
            ]
        }
		},
		methods:{

		},
    }
</script>

<template>
    <section class="section-1">
        <SectionMain1  />
    </section>
    <section class="section-2">
        <SectionMain2 :items="simulatedToLeard"/>
    </section>
    <section class="section-3">
        <SectionMain3 :items="smartTuroring" />
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