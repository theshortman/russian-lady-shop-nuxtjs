<template>
  <div>
    <h1>Контакты</h1>

    <p>russkay-lady@yandex.ru</p>
  </div>
</template>

<script>
import config from '~/nuxt.config'

export default {
  head() {
    return {
      title: `Контакты | ${config.head.title}`,
    }
  },
}
</script>