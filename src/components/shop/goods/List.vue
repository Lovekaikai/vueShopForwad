<template>
    <div>
        <div class="section">
            <div class="location">
            <span>当前位置：</span>
            <a href="/index.html">首页</a> &gt;
            <a href="/goods.html">购物商城</a>
            </div>
        </div>
        <div class="section">
        <div class="wrapper">
            <div class="wrap-box">
                <!--类别菜单-->
                <div class="left-220" style="margin:0;">
                    <div class="banner-nav">
                        <ul>
                        <!--此处声明下面可重复循环-->
                        
                            <li v-for="item in top.catelist" :key="item.id">
                                <h3>
                                    <i class="iconfont icon-arrow-right"></i>
                                    <span>{{item.title}}</span>
                                    <p>
                                    
                                        手机通讯
                                    
                                        摄影摄像
                                    
                                        存储设备
                                    
                                    </p>
                                </h3>
                                <div class="item-box">
                                    <!--如有三级分类，此处可循环-->
                                    <dl>
                                        <dt><a href="/goods/40.html">{{item.title}}</a></dt>
                                        <dd>
                                            <router-link v-for="subcom in item.subcates" :key="subcom.id" to=''>{{subcom.title}}</router-link>                
                                        </dd>
                                    </dl>
                                </div>
                            </li>              
                        </ul>
                    </div>
                </div>
                <!--/类别菜单-->
                
                <!--幻灯片-->
                <div class="left-705">
                    <div class="banner-img">
                        <el-carousel :interval="5000" arrow="always">
                            <el-carousel-item v-for="(item,index) in top.sliderlist" :key="index">
                                <img :src="item.img_url" alt="" srcset="">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
                <!--/幻灯片-->
                
                <!--推荐商品-->
                    <CommonSlide :toplist='top.toplist'></CommonSlide>
                <!--/推荐商品-->
            </div>
        </div>
        </div>
        <div class="section">
 
<!--子类-->
            <div class="main-tit">
            <h2>手机数码</h2>
                <p>  
                    <router-link v-for="item in gsContent" :key="item.id" to="">{{item.catetitle}}</router-link>     
                    <a href="/goods/40.html">更多
                        <i>+</i>
                    </a>
                </p>
            </div>
            <!--/子类-->
            <div class="wrapper clearfix">
            <div class="wrap-box">
            <ul class="img-list">
            
            <li v-for="item in gsContent" :key="item.id">
                   <router-link :to="{name:'Detail',params:{id : item.level1cateid}}"  v-for="itemSub in item.datas" :key="itemSub.id">
                        <div class="img-box">
                            <img :src="itemSub.img_url">
                            </div>
                            <div class="info">
                            <h3>{{itemSub.artTitle}}</h3>
                            <p class="price"> <b>{{itemSub.sell_price}}</b>元</p>
                                <p>
                                <strong>库存 {{itemSub.stock_quantity}}</strong>
                                <span>市场价：
                                <s>{{item.market_price}}</s>
                                </span>
                            </p>
                        </div>
                   </router-link>
            </li>
            </ul>
            </div>
            </div>
            </div>
    </div>
</template>

<script>
    import CommonSlide from './subcom/CommonSlie.vue'
    export default {
        data () {
            return {
                top:{
                    catelist:[],
                    sliderlist:[],
                    toplist:[]
                },
                gsContent:[],

            }
        },
        methods: {
            goodsTop(){
             this.$http.get(this.$api.goodsTop).then((res)=>{
                //  console.log(res.data.message)
                 this.top=res.data.message
             })
            } ,
            goodsContent(){
                this.$http.get(this.$api.goodsContent).then((res)=>{
                   
                    this.gsContent=res.data.message
                     console.log(this.gsContent)
                })
            }   
        },
        components: {
            CommonSlide
        }
        ,created () {
          this.goodsTop();
          this.goodsContent()
        }
    }
</script>

<style scoped>

</style>