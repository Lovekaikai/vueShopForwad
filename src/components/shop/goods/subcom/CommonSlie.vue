<template>
    <div>
        <div class="left-220">
                    <ul class="side-img-list">
                        <li v-for="(item,i) in toplist" :key="item.id">
                            <div class="img-box">
                                <label>{{i+1}}</label>
                                <img :src="item.img_url">
                            </div>
                          
                            <div class="txt-box">
                                <router-link :to="{name:'Detail',params: { id: item.id }}">{{item.title}}</router-link>
                                <span>{{item.add_time | getDate }}</span>
                            </div>
                        </li>
                    </ul>
       </div>

    </div>
</template>

<script>
    export default {
    props:['toplist'] ,
    

    filters:{
            getDate(time){
                let date=new Date();
                return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
            }
    }
    }
</script>

<style scoped>

</style>