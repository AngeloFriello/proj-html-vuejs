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
                {
                    image:'../../../public/testimonial-avata-04.jpg',
                    title:'Its a choice of quality for people with special needs',
                    text:'I am free to learn at my own pace, follow my own schedule and choose the subject I want to ciao come stai ben stai domani ciao andiamo come stai  learn from the syllabus. Great study portal for people like me.',
                    name:'FLORENCE THEMES',
                    job:'Multimedia Admin',
                    visibility: false,
                },
                {
                    image:'../../../public/testimonial-avata-03.jpg',
                    title:'High level of efficiency and scientific teaching methods',
                    text:'I am free to learn at my own pace, follow my own schedule and choose the subject I want to ciao come stai ben stai domani ciao andiamo come stai  learn from the syllabus. Great study portal for people like me.',
                    name:'MINA HOLLACE',
                    job:'Freelancer',
                    visibility: true,
                },
                {
                    image:'../../../public/testimonial-avata-02.jpg',
                    title:'Professional team of specialists and passionate mentors at reach',
                    text:'I am free to learn at my own pace, follow my own schedule and choose the subject I want to ciao come stai ben stai domani ciao andiamo come stai  learn from the syllabus. Great study portal for people like me.',
                    name:'MADLEY PONDOR',
                    job:'IT Specialist',
                    visibility: false,
                },
            ],
            tableNumber:[
                {
                    title:'Successfully',
                    subtitle:' trained',      
                    number:'1790',
                    text:'ENROLLED LEARNERS'
                },
                {
                    title:'Proudly',
                    subtitle:'Received',         
                    number:'19',
                    text:'CONTRYWIDE AWARDS'
                },
                {
                    title:'Firmly',
                    subtitle:'Established',         
                    number:'24',
                    text:'LOCAL BRANCHES'
                },
                {
                    title:'Getting',
                    subtitle:'Featured on',         
                    number:'1090',
                    text:'BLOG POSTS'
                },
            ],
            listElements:[
                'Become a Better blogger: Content Planning',
                'Promoting Your Online Business on Pinterest',
                'Gamification and Game-Based Learning',
                "Designing an Online Course from Expert's Perspective",
                "Why Online Coursis are a Future of Education",
            ],
            cardMostViewed:[
                {
                    image:'../../../public/artist-blog-03-480x352.jpeg',
                    job:'ARTIST',
                    title:'Brush Strokes Enegize Trees in Paintings',
                    date:'may 15, 2020',
                    views:'688',
                },
                {
                    image:'../../../public/artist-blog-01-480x352.jpg',
                    job:'ARTIST',
                    title:'Pocket-Sized Notebooks Hold Miniatyre Paintings',
                    date:'may 15, 2020',
                    views:'603',
                }
            ]
        }
		},
		methods:{

		},
    }
</script>

<template>
    <section class="section-1">
        <SectionMain1 />
    </section>
    <section class="section-2">
        <SectionMain2 :items="simulatedToLeard"/>
    </section>
    <section class="section-3">
        <SectionMain3 :items="smartTuroring" />
    </section>
    <section class="section-4">
        <SectionMain4 :items="topLearnes" />
    </section>
    <section class="section-5">
        <SectionMain5 :items="tableNumber" />
    </section>
    <section class="section-6">
        <SectionMain6 :items="listElements" :cards="cardMostViewed"/>
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