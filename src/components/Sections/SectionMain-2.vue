<script>
    export default{
        props:{
            
        }
    }
</script>

<template>
    <div class="container">
        <div class="row flex f-wrap">
            <div class="col-12 ">
                <p class="small_text">SIMULATED TO LEARN?</p>
                <h2>Featured Online Courses</h2>
            </div>
            <div class="col-6">

                <div class="card flex">
                    <div>
                        <img src="../../../public/stock-full-hd-01.jpg" alt="" class="card_img">
                    </div>
                    <div class="card_info">
                        <p class="price">$40.00</p>
                        <h3>Learn to Write a Professional Author</h3>
                        <div class="flex">
                            <p><font-awesome-icon :icon="['far', 'file']" /> 20 lessons</p>
                            <p><font-awesome-icon :icon="['far', 'user']" /> 50 Students</p>
                        </div>
                    </div>
                </div>

                <div class="card flex">
                    <div>
                        <img src="../../../public/stock-full-hd-02.jpg" alt="" class="card_img">
                    </div>
                    <div class="card_info">
                        <p class="price">$40.00</p>
                        <h3>Learn to Write a Professional Author</h3>
                        <div class="flex">
                            <p><font-awesome-icon :icon="['far', 'file']" /> 20 lessons</p>
                            <p><font-awesome-icon :icon="['far', 'user']" /> 50 Students</p>
                        </div>
                    </div>
                </div>

                <div class="card flex">
                    <div>
                        <img src="../../../public/stock-full-hd-03.jpg" alt="" class="card_img">
                    </div>
                    <div class="card_info">
                        <p class="price">$40.00</p>
                        <h3>Learn to Write a Professional Author</h3>
                        <div class="flex">
                            <p><font-awesome-icon :icon="['far', 'file']" /> 20 lessons</p>
                            <p><font-awesome-icon :icon="['far', 'user']" /> 50 Students</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-6">

                <div class="card flex">
                    <div>
                        <img src="../../../public/stock-full-hd-04.jpg" alt="" class="card_img">
                    </div>
                    <div class="card_info">
                        <p class="price">$40.00</p>
                        <h3>Learn to Write a Professional Author</h3>
                        <div class="flex">
                            <p><font-awesome-icon :icon="['far', 'file']" /> 20 lessons</p>
                            <p><font-awesome-icon :icon="['far', 'user']" /> 50 Students</p>
                        </div>
                    </div>
                </div>

                <div class="card flex">
                    <div>
                        <img src="../../../public/stock-full-hd-05.jpg" alt="" class="card_img">
                    </div>
                    <div class="card_info">
                        <p class="price">$40.00</p>
                        <h3>Learn to Write a Professional Author</h3>
                        <div class="flex">
                            <p><font-awesome-icon :icon="['far', 'file']" /> 20 lessons</p>
                            <p><font-awesome-icon :icon="['far', 'user']" /> 50 Students</p>
                        </div>
                    </div>
                </div>

                <div class="card flex">
                    <div>
                        <img src="../../../public/stock-full-hd-06.jpg" alt="" class="card_img">
                    </div>
                    <div class="card_info">
                        <p class="price">$40.00</p>
                        <h3>Learn to Write a Professional Author</h3>
                        <div class="flex">
                            <p><font-awesome-icon :icon="['far', 'file']" /> 20 lessons</p>
                            <p><font-awesome-icon :icon="['far', 'user']" /> 50 Students</p>
                        </div>
                    </div>
                </div>

            </div>

            <div class="col-12">
                <button class="button_green">Viow all courses <font-awesome-icon :icon="['fas', 'arrow-right']" /></button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @use '../../style/general.scss';
    @use '../../style/partials/variable.scss';
    @use '../../style/partials/mixin.scss';
</style>