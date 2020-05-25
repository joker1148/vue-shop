<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <div class="nav-menu">
                    <ul class="menu-wrap">
                        <li class="menu-item">
                            <a href="javascript:;">手机 电话卡</a>
                            <div class="children">
                                <ul v-for="(item,index) in menuList" :key="index">
                                    <li v-for="(sub,idx) in item" :key="idx">
                                        <a :href="sub ? '/#/product/' + sub.id : ''">
                                            <img :src="sub ? sub.img :  require('../../public/imgs/item-box-1.png')" alt="">
                                            {{sub ? sub.name : "小米9"}}
                                        </a>
                                    </li>       
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电视 盒子</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">笔记本 平板</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">家电 插线板</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">耳机 音箱</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">家电 穿戴</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电源 配件</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">生活 箱包</a>
                        </li>
                    </ul>
                </div>
                <swiper :options="swiperOption">
                    <swiper-slide v-for="(item,index) in sliderList" :key="index">
                        <a :href="'/#/product/'">
                            <img :src="item.img">
                        </a>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class="ads-box"></div>
            <div class="banner"></div>
            <div class="product-box"></div>
        </div>
        <service-bar></service-bar>
    </div>
</template>

<script>
    import ServiceBar from '@/components/ServiceBar.vue'
    import {
        swiper,
        swiperSlide
    } from 'vue-awesome-swiper'
    // import '../api/swiper.min.css'
    import 'swiper/css/swiper.css'
    export default {
        name: "index",
        components: {
            ServiceBar,
            swiper,
            swiperSlide
        },
        data() {
            return {
                swiperOption: {
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    autoplay: true,
                    loop: true,
                    effect: 'cube',
                    cubeEffect: {
                        slideShadows: true,
                        shadow: true,
                        shadowOffset: 100,
                        shadowScale: 0.6
                    },
                },
                sliderList: [{
                        id: "42",
                        img: require("../../public/imgs/slider/slide-1.jpg")
                    },
                    {
                        id: "45",
                        img: require("../../public/imgs/slider/slide-2.jpg")
                    },
                    {
                        id: "46",
                        img: require("../../public/imgs/slider/slide-3.jpg")
                    },
                    {
                        id: "42",
                        img: require("../../public/imgs/slider/slide-4.jpg")
                    },
                    {
                        id: "42",
                        img: require("../../public/imgs/slider/slide-5.jpg")
                    }
                ],
                menuList:[
                    [
                        {
                            id:30,
                            img: require("../../public/imgs/item-box-1.png"),
                            name:"小米CC9"
                        },
                        {
                            id:31,
                            img: require("../../public/imgs/item-box-2.png"),
                            name:"小米8青春版"
                        },
                        {
                            id:32,
                            img: require("../../public/imgs/item-box-3.jpg"),
                            name:"小米8青春版"
                        },
                        {
                            id:33,
                            img: require("../../public/imgs/item-box-4.jpg"),
                            name:"小米8青春版"
                        },
                    ],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
                ]
            }
        }
    }
</script>

<style lang="scss">
@import "../assets/scss/config.scss";

@import "../assets/scss/mixin.scss";
    .index {
        overflow: hidden;
        .swiper-box {
            position: relative;
            .nav-menu {
                position: absolute;
                width: 264px;
                height: 451px;
                top: 0;
                left: 0;
                z-index: 9;
                padding: 26px 0;
                background-color: #55585a7a;
                box-sizing: border-box;
                .menu-wrap {
                    .menu-item {
                        height: 50px;
                        line-height: 50px;
                        a{
                            display: block;
                            position: relative;
                            font-size: 16px;
                            color: #fff;
                            padding-left: 30px;
                            &:after{
                                position: absolute;
                                right: 30px;
                                top: 17.5px;
                                content: "";
                                z-index: 1000;
                                @include bgImg(10px,15px,'/imgs/icon-arrow.png')
                            }
                        }
                        &:hover{
                            background-color: $colorA;
                            .children{
                                display: block;
                            }
                        }
                        .children{
                            display: none;
                            width: 962px;
                            height: 451px;
                            background-color: $colorG;
                            position: absolute;
                            top: 0;
                            left: 264px;
                            border: 1px solid #E5E5E5;
                            ul{
                                display: flex;
                                justify-content: space-between;
                                height: 75px;
                                li{
                                    height: 75px;
                                    line-height: 75px;
                                    flex: 1;
                                    padding-left: 23px;
                                    color: black;
                                }
                                a{
                                    color: $colorB;
                                    font-size: 14px;
                                }
                                img{
                                    width: 42px;
                                    height: 35px;
                                    vertical-align: middle;
                                    margin-right: 15px;
                                }
                            }
                        }
                    }
                }
            }

            .swiper-container {
                width: 1261px;
                height: 451px;
                .swiper-button-prev{
                    left: 274px;
                }
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>