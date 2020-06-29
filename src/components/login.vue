<template>
  <div class="login">
    <div id="container">
      <header>
        <img src="../assets/timg.jpeg" alt />
      </header>
      <main>
        <el-form :model="loginForm" :rules="loginRules" ref="ruleForm">
          <el-form-item prop="username">
            <i class="el-icon-user"></i>
            <el-input v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <i class="el-icon-suitcase"></i>
            <el-input v-model="loginForm.password" type="password"></el-input>
          </el-form-item>
        </el-form>
      </main>
      <footer>
        <el-button type="primary" @click="submitForm">登入</el-button>
        <el-button type="danger">
          <router-link
            to="/register"
            style="text-decoration: none;color: #fff; display:inline-block;width: 100%;height:100%;"
          >注册</router-link>
        </el-button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    // 定义校验规则
    const checkPhone = (phoneRule, value, callback) => {
      const regPhone = /^1[34579]\d{9}$/
      if (value === '') {
        return callback(new Error('手机号不能为空'))
      } else if (regPhone.test(value)) {
        return callback()
      }
      callback(new Error('手机号码不合法'))
    }
    // 定义密码规则
    const checkPass = (passwordRule, value, callback) => {
      const regPass = /^[0-9a-zA-Z-_]{6,16}$/
      if (value === '') {
        return callback(new Error('密码不能为空'))
      } else if (!regPass.test(value)) {
        return callback(new Error('密码不合法'))
      }
      callback()
    }
    return {
      loginForm: {
        username: '13507905280',
        password: '12345678'
      },
      loginRules: {
        username: [{ validator: checkPhone, trigger: 'blur' }],
        password: [{ validator: checkPass, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs.ruleForm.validate(async valid => {
        if (!valid) return
        const { data: res } = await this.$http.get('/login/cellphone', {
          params: {
            phone: this.loginForm.username,
            password: this.loginForm.password
          }
        })
        if (res.code !== 200) {
          this.$message.error(res.message)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f44336;
  #container {
    width: 500px;
    height: 400px;
    background: snow;
    box-shadow: 0 0 5px silver;
    position: relative;
    header {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -42%);
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 5px solid rgba(255, 255, 255, 1);
        box-shadow: 0 0 3px silver;
      }
    }
    main {
      padding: 10px;
      margin-top: 140px;
      .el-form {
        padding: 10px 0;
        .el-input {
          height: 50px;
        }
      }
    }
    .el-input {
      padding: 0 10px !important;
      box-sizing: border-box;
    }
    footer {
      text-align: center;
    }
  }
}
</style>
