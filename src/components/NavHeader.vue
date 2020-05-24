<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javaScript:;">小米商城</a>
                    <a href="javaScript:;">MIUI</a>
                    <a href="javaScript:;">云服务</a>
                    <a href="javaScript:;">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javaScript:;" v-if="username" @click="login">登录</a>
                    <a href="javaScript:;" v-if="!username">注册</a>
                    <a href="javaScript:;" v-if="username">我的订单</a>
                    <a href="javaScript:;" class="my-cart" @click="goToCart"><span class="icon-cart"></span>购物车</a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li class="product" v-for="(item,index) in phoneList" :key="index">
                                    <a :href="'/#/product'+item.id" target="_blank">
                                        <div class="pro-img">
                                            <img :src="item.mainImage" :alt="item.subtitle">
                                        </div>
                                        <div class="pro-name">{{item.name}}</div>
                                        <div class="pro-price">{{item.price | currency}}</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>REDMI红米</span>
                        <div class="children">
                            <li class="product" v-for="(item,index) in 6" :key="index">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="/imgs/nav-img/nav-3-1.jpg" alt="">
                                    </div>
                                    <div class="pro-name">小米CC</div>
                                    <div class="pro-price">1999元</div>
                                </a>
                            </li>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children">
                            <li class="product" v-for="(item,index) in 6" :key="index">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="/imgs/nav-img/nav-3-1.jpg" alt="">
                                    </div>
                                    <div class="pro-name">小米CC</div>
                                    <div class="pro-price">1999元</div>
                                </a>
                            </li>
                    
                        </div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javaScript:;"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"nav-header",
        data(){
            return{
                username:"jack",
                phoneList:[]
            }
        },
        filters:{
            currency(val){
                if(val == ""){
                    return "0.00"
                }
                return "￥" + val.toFixed(2) + "元"
            }
        },
        mounted(){
            this.getProductList()
        },
        methods:{
            login(){
                this.$router.push("/login")
            },
            getProductList(){
                this.$http.get("/products",{
                    params:{
                        categoryId:"100012"
                    }
                }).then((res)=>{
                    console.log(res.list)
                    if(res.list.length > 6){
                        this.phoneList = res.list.slice(0,6)
                        console.log(res.list.slice(0,6))
                        console.log(this.phoneList)
                    }
                })
            },
            goToCart(){
                this.$router.push("/cart")
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/scss/base.scss";
    @import "../assets/scss/mixin.scss";
    @import "../assets/scss/config.scss";
    .header{
        .nav-topbar{
            height: 39px;
            line-height: 39px;
            background-color: #333333;
            color:#B0B0B0 ;
            .container{
                width: 1226px;
                margin:0 auto;
                display: flex;
                justify-content: space-between;
                align-content: center;
                a{
                    display: inline-block;
                    color: #B0B0B0;
                    margin-right: 17px;
                }
                .my-cart{
                    width: 110px;
                    text-align: center;
                    background-color: #FF6600;
                    color: #ffffff;
                    .icon-cart{
                        @include bgImg(16px,12px,"/imgs/icon-cart-checked.png");
                        // display: inline-block;
                        // width: 16px;
                        // height: 12px;
                        // background: url("/imgs/icon-cart-checked.png") no-repeat center;
                        // background-size: contain;
                        // margin-right: 4px;
                    }
                }
            }
        }
        .nav-header{
            .container{
                position: relative;
                height: 112px;
                @include flex(); 
                .header-logo{
                    display: inline-block;
                    width: 55px;
                    height: 55px;
                    background-color: #FF6600;
                    a{
                        display: inline-block;
                        width: 110px;
                        height: 55px;
                        &::before{
                            content: "";
                            @include bgImg(55px,55px,"/imgs/mi-logo.png",55px);
                        }
                        &::after{
                            content: "";
                            @include bgImg(55px,55px,"/imgs/mi-home.png",55px);
                        }
                        &:hover::before{
                            margin-left: -55px;
                            transition: all 0.2s;
                        }
                    }
                }
                .header-menu{
                    display: inline-block;
                    padding-left: 209px;
                    width:643px;
                    .item-menu{
                        display: inline-block;
                        color: #333;
                        font-weight: bold;
                        font-size: 16px;
                        line-height: 112px;
                        margin-right: 20px;
                        span{
                            height: 16px;
                            cursor: pointer;
                        }
                        &:hover{
                            color: $colorA;
                            .children{
                                height: 220px;
                                opacity: 1;
                            }
                            
                        }
                        .children{
                            position: absolute;
                            top: 112px;
                            left: 0;
                            width: 1226px;
                            border-top: 1px solid #E5E5E5;
                            overflow: hidden;
                            color: $colorA;
                            // height: 220px
                            // opacity: 1;
                            height: 0;
                            opacity: 0;
                            background-color: #fff;
                            box-shadow: 0px 7px 6px 0px rgba(0,0,0,0.11);
                            z-index: 10;
                            transition:height .5s ;
                            .product{
                                float: left;
                                color: $colorA;
                                width:16.6%;
                                height: 22px;
                                font-size: 12px;
                                line-height: 12px;
                                text-align: center;
                                position: relative;
                                &:before{
                                    content: "";
                                    position: absolute;
                                    top: 28px;
                                    right: 0;
                                    border-left: 1px solid $colorF;
                                    height: 100px;
                                    width: 1px; 
                                }
                                .pro-price{
                                    color: $colorA;
                                }
                            }
                            a{
                                display: inline-block;
                            }
                            img{
                                width: auto;
                                height: 111px;
                                margin-top: 26px;
                            }
                            .pro-img{
                                height: 137px;
                            }
                            .pro-name{
                                font-weight: 500;
                                margin-top: 19px;
                                margin-bottom: 8px;
                                color: $colorB;
                            }
                            .pre-price{
                                color: $colorA;
                            }
                        }
                    }
                }
                .header-search{
                    width: 319px;
                    .wrapper{
                        height: 50px;
                        border: 1px solid #EDEDED;
                        display: flex;
                        align-items: center;
                        input{
                            border: none;
                            border-right:1px solid #e0ede0;
                            box-sizing: border-box;
                            width: 264px;
                            height: 50px;
                            padding-left: 14px;
                        }
                        a{
                            @include bgImg(18px,18px,"/imgs/icon-search.png");
                            margin-left: 17px;
                        }
                    }
                }
            }
        }
    }
</style>