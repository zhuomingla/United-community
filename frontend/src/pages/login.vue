<script>
const { $strapi } = useNuxtApp()
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async handleSubmit () {
      console.log(this.form.username)
      if (this.form.username) {
        const { user, jwt } = await $strapi.login(
          {
            identifier: this.form.username,
            password: this.form.password
          })
        $strapi.setToken(jwt)
        sessionStorage.setItem('jwt', jwt)
      }
    }
  }
}

</script>

<template>
  <div class="login-container">
    <n-form v-model="form" label-width="80px">
      <n-form-item label="用户名">
        <input v-model="form.username" placeholder="请输入用户名">
      </n-form-item>
      <n-form-item label="密码">
        <input v-model="form.password" type="password" placeholder="请输入密码">
      </n-form-item>
      <n-form-item>
        <n-button type="primary" @click="handleSubmit">
          登录
        </n-button>
      </n-form-item>
    </n-form>
  </div>
</template>
