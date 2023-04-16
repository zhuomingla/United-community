import Strapi from 'strapi-sdk-js'

export default defineNuxtPlugin(() => {
  const strapi = new Strapi({
    url: 'http://localhost:1337',
    prefix: '/api',
    store: {
      key: 'strapi_jwt',
      useLocalStorage: true,
      cookieOptions: { path: '/' }
    },
    axiosOptions: {
    }
  })
  return {
    provide: {
      strapi
    }
  }
})
