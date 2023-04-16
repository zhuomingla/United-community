<script setup>
import Strapi from 'strapi-sdk-js'
const strapi = new Strapi()
const { data: list } = await strapi.find('messages')
</script>
<script>
export default {
  data () {
    return {
      data: {
        test: '1',
        user: ''
      }
    }
  },
  async mounted () {
    const strapi = new Strapi({
      url: 'http://localhost:1337',
      prefix: '/api',
      store: {
        key: 'strapi_jwt',
        useLocalStorage: true,
        cookieOptions: { path: '/' }
      },
      axiosOptions: {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('strapi_jwt')}`
        }
      }
    })
    const test = localStorage.getItem('strapi_jwt')
    this.data.test = test
    this.data.user = await strapi.fetchUser()
  }
}
</script>
<template>
  <div>
    <p>{{ list }}</p>
    <p>test</p>
    <NuxtLink to="login">
      login
    </NuxtLink>
    <p>{{ data.test }}</p>
    <p>{{ data.user }}</p>
  </div>
</template>
