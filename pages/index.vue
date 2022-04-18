<template>
  <div class="row">
    <ProductCard
      class="col-sm-6 col-md-6 col-lg-4 mb-3"
      v-for="product in category.products"
      :product="product"
      :url="`/catalog/${category.slug}/${product.slug}`"
      :key="product.id"
    >
    </ProductCard>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { category } = await $axios.$get(
      '/api/v1/categories/belorusskie-platya/products/'
    )

    return { category }
  },
}
</script>
