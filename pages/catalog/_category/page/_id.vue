<template>
  <CategoryPage :category="category" />
</template>

<script>
import config from '~/nuxt.config'

export default {
  head() {
    return {
      title: `${this.category.name} | ${config.head.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.category.description,
        },
      ],
    }
  },
  async asyncData({ params, $axios }) {
    const { category } = await $axios.$get(
      `/api/v1/categories/${params.category}/products/?page=${params.id}`
    )

    return { category }
  },
}
</script>