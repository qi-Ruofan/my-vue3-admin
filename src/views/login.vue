<template>
  <div class="login">
    <div class="lg-container">
      <div class="lg-register">
        <p>没有账号？</p>
        <div class="register-btn">
          <el-button type="primary">供应商注册</el-button>
          <el-button type="success">专家注册</el-button>
        </div>
      </div>
      <div class="lg-signin">
        <h2>普通登录</h2>
        <el-form class="lg-form" ref="ruleFormRef" :model="ruleForm" :rules="rules">
          <el-form-item label="" prop="email">
            <el-input v-model="ruleForm.email" type="text" placeholder="请输入邮箱" class="user-num"></el-input>
          </el-form-item>
          <el-form-item label="" prop="pass">
            <el-input v-model="ruleForm.pass" type="password" placeholder="请输入密码" class="user-num" />
          </el-form-item>
          <div class="validate">
            <el-input v-model="ruleForm.captcha" class="validate-num"  placeholder="请输入验证码" @keyup.enter="submitForm(ruleFormRef)"></el-input>
            <img class="validate-img" :src="codeImageSrc" alt="" title="看不清？换一张" @click.stop="randCodeChange">
          </div>
          <div class="forget">
            <el-link class="forget-link">忘记密码</el-link>
          </div>
          <el-button class="login-btn" @click="submitForm(ruleFormRef)">登录</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { reactive, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'

const router = useRouter()
const store = useStore()
let codeImageSrc = ref('')
let captchaId = ref(0)

interface User {
  email: string
  pass: string
  captcha: string
}

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<User>({
  email: '',
  pass: '',
  captcha: ''
})
const rules = reactive<FormRules>({
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
  ],
  pass: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ],
})

onMounted(() => {
  randCodeChange()
}) 

const randCodeChange = () => {
  store.dispatch('users/getCaptcha').then(res => {
    if(res.data.errcode === 0) {
      codeImageSrc.value = res.data.captchaDataURL
      captchaId.value = res.data.captchaId
      console.log(codeImageSrc.value)
    } else {
      ElMessage.error('获取验证码失败')
    }
  })
}

const submitForm = (formEl: FormInstance | undefined) => {
  if(!formEl) return 
  formEl.validate((valid) => {
    if(valid) {
      const params = {
        captchaId: captchaId.value,
        ...ruleForm
      }
      store.dispatch('users/login', params).then(res => {
        if(res.data.errcode === 0) {
          debugger
          store.commit('users/updateToken', res.data.token)
          ElMessage.success('登录成功')
          router.push('/')
        } else {
          ElMessage.error('登录失败')
        }
      }).catch(error => {
        ElMessage.error(error.errmsg)
      })
    } else {
      console.log('error submit')
      return
    }
  })
}
</script>

<style lang='scss' scoped>
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('@/assets/image/loginbg.png') no-repeat 100% 100%;
  .lg-container {
    display: flex;
    width: 962px;
    height: 561px;
    background: #fff;
  }
  .lg-register {
    padding: 200px 0 0 80px;
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 387px;
    height: 100%;
    background: url('@/assets/image/login.png') no-repeat;
    box-sizing: border-box;
    p {
      color: #fff;
      font-size: 22px;
      font-weight: 400;
    }
    .register-btn {
      margin-top: 30px;
    }
  }
  .lg-signin {
    flex: 1;
    padding: 79px;
    h2 {
      text-align: center;
      font-weight: 400;
      font-size: 18px;
      color: #027BD0;
      padding-bottom: 20px;
      border-bottom: 3px solid #027BD0;
    }
    .lg-form {
      margin-top: 10px;
      .validate {
        margin-top: 10px;
        display: flex;
        height: 42px;
        .validate-num {
          flex: 1;
        }
        .validate-img {
          margin-left: 30px;
          width: 120px;
          height: 42px;
          background: lightblue;
        }
      }
      .forget {
        margin-top: 20px;
        display: flex;
        justify-content: end;
        .forget-link {
          color: #027BD0;
        }
      }
      .login-btn {
        margin-top: 30px;
        width: 100%;
        height: 48px;
        background: #007CCC;
        border-color: #007CCC;
        color: #fff;
      }
    }
  }
}
</style>
<style lang="scss">
.user-num {
  height: 42px;
  font-size: 14px;
  margin-top: 10px;
  .el-input__wrapper {
    background: rgb(232, 240, 254) !important;
  }
}
</style>
