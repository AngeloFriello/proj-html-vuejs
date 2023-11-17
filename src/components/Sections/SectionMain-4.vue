<script>
    export default{
        props:{
            items:{
                type:Object,
                required:true,
            }
        },
        data(){
            return{
                currentIndex: 1,
                PreIndex: '',
                LastIndex: '',

            }
        },
        computed:{
            preIndex(){
                if(this.currentIndex == 0){
                    return (3)
                }else{
                    return (this.currentIndex - 1)
                } 
            },
            lastIndex(){
                if(this.currentIndex == 3){
                    return (0)
                }else{
                    return (this.currentIndex + 1)
                } 
            },
            
        },
        methods:{
            toggleImage1(){
                console.log(this.currentIndex)
                return (this.currentIndex = 0)
            },
            toggleImage2(){
                console.log(this.currentIndex)
                return (this.currentIndex = 1)
            },
            toggleImage3(){
                console.log(this.currentIndex)
                return (this.currentIndex = 2)
            },
            toggleImage4(){
                console.log(this.currentIndex)
                return (this.currentIndex = 3)
            },
            
        },
        
    }
    
</script>

<template>
    <div class="container-fluid">
        <div class="row flex f-wrap">
            <div class="col-12">
                <p class="small_text">GREAT WORDS ABOUT MAXCOACH</p>
                <h3>Our <a href="">top learnes'</a> verbatim </h3>
            </div>
        </div>
        <div class="row flex">

            <div class="col-4" :class="items[preIndex].visibility === false ? 'active' : 'ciro' ">
                <h4>{{ items[preIndex].title}}</h4>
                <p>{{ items[preIndex].text }}</p>
                <div class="card">
                    <div>
                        <img :src=" items[preIndex].image " alt="">
                    </div>
                    <div>
                        <h5>{{items[preIndex].name}}</h5>
                        <p>{{ items[preIndex].job }}</p>
                    </div>
                </div>                
            </div>

            <div class="col-4" >
                <h4>{{ items[currentIndex].title }}</h4>
                <p>{{ items[currentIndex].text }}</p>
                <div class="card">
                    <div>
                        <img :src=" items[currentIndex].image " alt="">
                    </div>
                    <div>
                        <h5>{{items[currentIndex].name}}</h5>
                        <p>{{ items[currentIndex].job }}</p>
                    </div>
                </div>                
            </div>

            <div class="col-4" :class="items[lastIndex].visibility === false ? 'active' : 'ciro' ">
                <h4>{{ items[lastIndex].title }}</h4>
                <p>{{ items[lastIndex].text }}</p>
                <div class="card">
                    <div>
                        <img :src=" items[lastIndex].image " alt="">
                    </div>
                    <div>
                        <h5>{{items[lastIndex].name}}</h5>
                        <p>{{ items[lastIndex].job }}</p>
                    </div>
                </div>                
            </div>
    
        </div>

        <div class="row">
            <div class="col-3">
                <div class="point" @click="toggleImage1()" :class="this.currentIndex == 0 ? 'point-active' : 'ciro'" ></div>
                <div class="point" @click="toggleImage2()" :class="this.currentIndex == 1 ? 'point-active' : 'ciro'" ></div>
                <div class="point" @click="toggleImage3()" :class="this.currentIndex == 2 ? 'point-active' : 'ciro'" ></div>
                <div class="point" @click="toggleImage4()" :class="this.currentIndex == 3 ? 'point-active' : 'ciro'" ></div>
            </div>
        </div>

        <div class="row">
            <div class="col-12 p-relative">
                <img src="../../../public/maxcoach-shape-01.png" alt="" class="p-absolute img_left">
                <img src="../../../public/maxcoach-shape-02.png" alt="" class="p-absolute img_right">
                <h4>Start today for getting <a href="" class="c_green f-w_light">Online Certification</a></h4>
                <h3>You can be your own guiding star with our help!</h3>
                <button class="button_green">Get started now</button>
            </div>
        </div>
    </div>

</template>

<style lang="scss">
    @use '../../style/general.scss';
    @use '../../style/partials/variable.scss';
    @use '../../style/partials/mixin.scss';
</style>