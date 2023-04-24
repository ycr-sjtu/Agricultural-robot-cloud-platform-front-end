<template>
  <div style="width: 100%; height: 100vh; background-color: white; overflow: hidden">
    <div style="height:80px;line-height: 80px;border-bottom: 5px solid #2376b7;display:flex; background-color: white">
      <div style="height: 80px;text-align: center;line-height: 60px">
        <img src="../assets/logo.png" alt="" style="width:200px; position: relative; top:12px">
      </div>
      <div style="width: 300px; padding-left: 30px;font-weight: bold;color: cornflowerblue">智慧农场全程全面管控云平台
      </div>
      <div style="flex: 1;"></div>
    </div>
    <div style="width: 400px;margin: 150px auto">
      <div style="color: #000000; font-size: 30px; text-align: center; margin: 50px;">欢迎登录</div>
      <el-form ref="form" :model="form" :rules="rules" size="large">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" show-password placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%" type="primary" @click="log">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>

<script>
import request from "@/utils/request.js";

export default {
  name: "Login",
  data() {
    return {
      form: {},
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
        ],
      },
    }
  },
  methods: {
    log() {
      request.post("/login", this.form).then(res => {
        console.log(res);
        console.log("test");
          if (res.data.code === '0') {
            this.$message({
              type: "success",
              message: "登录成功"
            })
            this.$router.push("/");  //登录成功之后进行页面的跳转，跳转到主页

          } else {
            this.$message({
              type: "error",
              message: res.data.msg,
            })
          }
        });
    }
  }
}
</script>

