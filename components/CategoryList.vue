<template>
  <div class="list-groupn mb-3">
    <CategoryListItem
      v-for="category in categories"
      :name="category.name"
      :url="`/catalog/${category.slug}`"
      :key="category.id"
    />
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
}
</script>
