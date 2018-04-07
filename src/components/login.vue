<template>
  <div>
    <span slot="title" style="fontSize: 25px; color: green">注册</span>
    <el-form ref="loginForm" :model="loginForm" label-position="left" label-width="80px"  :rules="loginRule">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" type="password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="passwordCheck">
        <el-input v-model="loginForm.passwordCheck" type="password"></el-input>
      </el-form-item>
      <el-form-item label="昵称" prop="nickname">
        <el-input v-model="loginForm.nickname"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="loginForm.email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="close">取消</el-button>
        <el-button @click="login">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
// 辅助函数，帮助生成计算属性
import { mapState } from 'vuex'
export default {
  data () {
    return {
      title: '登录',
      loginForm: {
        username: '',
        password: '',
        passwordCheck: '',
        nickname: '',
        email: ''
      },
      loginRule: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        passwordCheck: [
          { required: true, message: '请确认密码', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
        ]
      }
    }
  },
  computed: {
    ...mapState([
      'loginState'
    ])
  },
  props: {
    visible: {
      default: 'true'
    }
  },
  methods: {
    login () {
      this.$axios.post('/login/', this.loginForm)
        .then(value => {
          if (value.data === 'success') {
            // 发送提示信息
            this.$message({
              message: '恭喜你，注册成功！',
              type: 'success'
            })
            // 注册成功后的操作：1.关闭注册窗口 2.更改登录状态
            this.close()
            this.$store.commit({
              type: 'changeLoginState',
              loginState: 1
            })
            console.log('loginsate:' + this.loginState)
          } else {
            // 发送提示信息
            this.$message.error('抱歉，注册失败!')
          }
          console.log(value.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    close () {
      console.log('关闭窗口')
      this.$emit('update:visible', false)
      // 清除表单数据
      this.$refs.loginForm.resetFields()
    }
  }
}
</script>
<style>
</style>
