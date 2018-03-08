<template>
    <div>
        <el-tabs type="border-card">
            <el-tab-pane label="图文信息">
             <span v-html="top.goodsinfo.content"></span>
            </el-tab-pane>
            <el-tab-pane label="配置管理">
                <div class="comment-box">
                    <!--取得评论总数-->
                    <form id="commentForm" @submit.prevent="commentContent" name="commentForm" class="form-box" url="/tools/submit_ajax.ashx?action=comment_add&amp;channel_id=2&amp;article_id=98">
                        <div class="avatar-box">
                            <i class="iconfont icon-user-full"></i>
                        </div>
                        <div class="conn-box">
                            <div class="editor">
                                <textarea v-model= "commenttxt.commenttxt" id="txtContent" name="txtContent" sucmsg=" " datatype="*10-1000" nullmsg="请填写评论内容！"></textarea>
                                <span class="Validform_checktip"></span>
                            </div>
                            <div class="subcon">
                                <input id="btnSubmit" name="submit" type="submit" value="提交评论" class="submit">
                                <span class="Validform_checktip"></span>
                            </div>
                        </div>
                    </form>
                    <ul id="commentList" class="list-box">
                        <p v-if="comment.length===0" style="margin:5px 0 15px 69px;line-height:42px;text-align:center;border:1px solid #f7f7f7;">暂无评论，快来抢沙发吧！</p>
                        <li v-for="(item,i) in comment" :key="i">
                            <div class="avatar-box">
                                <i class="iconfont icon-user-full"></i>
                            </div>
                            <div class="inner-box">
                                <div class="info">
                                    <span>{{item.user_name}}</span>
                                    <span>{{item.add_time}}</span>
                                </div>
                                <p>{{item.content}}</p>
                            </div>
                        </li>
                    </ul>
                    <!--放置页码-->
                    <div class="page-box" style="margin:5px 0 0 62px">
                        <div class="block">
                            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" 
                            :current-page="currentPage" :page-sizes="[2, 4, 4, 6]" :page-size="2" layout="total, sizes, prev, pager, next, jumper" :total="totalcount">
                            </el-pagination>
                        </div>
                    </div>
                    <!--/放置页码-->
                </div>
            </el-tab-pane>
        </el-tabs>

    </div>
</template>

<script>
    export default {
        props:['id'],
        data(){
            return {
                 currentPage:1,
                 comment:[],
                 top:{
                    goodsinfo:{}
                 },
                 totalcount:10,
                 pageIndex:1,
                 pageSize:1,
                 commenttxt:{
                        "commenttxt":"评论内容"  
                }
                 

            }
        },
        methods: {
            getComment(){
                let url=`${this.$api.commentList}goods/${this.id}?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`
                this.$http.get(url).then((res)=>{
                    this.totalcount=res.data.totalcount
                    this.comment=res.data.message
                })
            },
             getGodsDetail() {
                this.$http.get(this.$api.goodsDetail + this.id).then(res => {
                    this.top = res.data.message;
                    // console.log(this.top)
                });
            },
             handleSizeChange(val){
                 this.pageSize=val;
                 this.getComment();
            },
            handleCurrentChange(val){
                this.currentPage=val;
                this.getComment()
            },
            commentContent(){
                let url=`${this.$api.comment}goods/${this.id}`;
                this.$http.post(url,this.commenttxt).then((res)=>{
                    this.$alert('添加成功');
                    this.$router.push({path:this.$route.path})
                })
            }
        },
        watch:{
            id(){
                this.getComment();
                this.getGodsDetail();
            }
        },
        created () {
            this.getGodsDetail();
            this.getComment();
            console.log(this.$route)
        }
    }
</script>
<style scoped>

</style>


