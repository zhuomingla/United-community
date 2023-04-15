<script setup>
import { keyBy } from 'lodash'

const { $strapi } = useNuxtApp()
const { data: list } = await $strapi.find('messages')
const { jwt: test } = await $strapi.getToken(key)
</script>
<template>
  <div>
    <p>{{ list }}</p>
    <p>test</p>
    <NuxtLink to="login">
      login
    </NuxtLink>
    <p>{{ test }}</p>
  </div>
</template>
