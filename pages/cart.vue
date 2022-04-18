<template>
  <div>
    <h1>Корзина</h1>

    <p>Пока пусто!</p>
  </div>
</template>

<script>
import config from '~/nuxt.config'

export default {
  head() {
    return {
      title: `Корзина | ${config.head.title}`,
    }
  },
}
</script>
