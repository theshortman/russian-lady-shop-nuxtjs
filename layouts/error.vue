<template>
  <div v-if="statusCode === 404">
    <h1>Not Found (#404)</h1>
    <p class="alert alert-danger">
      Страница не найдена.
    </p>
  </div>
  <div v-else>
    <h1>Internal Server Error (#500)</h1>
    <p class="alert alert-danger">Внутренняя ошибка сервера.</p>
    <p>Пожалуйста, <NuxtLink to="/contacts">свяжитесь с нами</NuxtLink>.</p>
  </div>
</template>

<script>
import config from '~/nuxt.config'

export default {
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
  },
  head() {
    return {
      title: `Ошибка | ${config.head.title}`,
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0',
        },
      ],
    }
  },
}
</script>