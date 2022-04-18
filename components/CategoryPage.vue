<template>
  <div>
    <h1>{{ category.name }}</h1>
    <div class="row">
      <template v-if="category.products && category.products.length">
        <ProductCard
          class="col-sm-6 col-md-6 col-lg-4 mb-3"
          v-for="product in category.products"
          :product="product"
          :url="`/catalog/${category.slug}/${product.slug}`"
          :key="product.id"
        >
        </ProductCard>
      </template>
      <p v-else>Ничего не найдено</p>
    </div>
    <Pagination
      v-if="category.prev_page_number || category.next_page_number"
      :prev_page_link="
        category.prev_page_number &&
        `/catalog/${category.slug}/page/${category.prev_page_number}`
      "
      :next_page_link="
        category.next_page_number &&
        `/catalog/${category.slug}/page/${category.next_page_number}`
      "
    />
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
}
</script>
