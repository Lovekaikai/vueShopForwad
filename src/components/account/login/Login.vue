<template>
    <div class="login">
        <section>
            <el-form :model="ruleForm2" status-icon :rules="rules2"  ref="ruleForm2" label-width="100px" class="demo-ruleForm" label-position="top">
            <el-form-item label="用户名" prop="user_name" >
                <el-input type="text" v-model="ruleForm2.user_name"  auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
            </el-form>            
        </section>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm2: {
          user_name: '',
          password: ''
        },
        rules2: {
            user_name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
           ],
          password: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
          var that=this;
           console.log(that.ruleForm2.user_name+"==="+that.ruleForm2.password)
        this.$refs[formName].validate((valid) => {
          if (valid) {
             
              this.$http.post(this.$api.login,this.ruleForm2).then((res)=>{
                  this.$alert("登陆成功","title",{
                      callback:()=>{
                          localStorage.setItem("username",res.data.message.user_name)
                        let  Fullpath=this.$route.query.next|| '/'
                          this.$router.push({path:Fullpath})
                      }
                  });
              })
          } else {
              this.$alert("错误")
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/style" scoped>
    .login{
        height: 100%;
        background-color: #267cb7;
        section{
          padding: 0 30px;  
          width: 400px;
          height: 300px;
          margin: 0 auto;
          position: relative;
          top: 50%;
          transform: translateY(-50%);
          border: 3px solid #fff;
          border-radius: 5px;
        }
    }
</style>
