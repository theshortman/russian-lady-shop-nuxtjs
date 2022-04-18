<template>
  <div>
    <div class="border-bottom text-danger text-center px-2">
      Магазин закрыт. Спасибо всем, кто у нас покупал.
    </div>
    <TheNavbar />
    <div class="container-lg mb-5">
      <div class="row">
        <div class="col-md-4 col-lg-3">
          <TheCart />
          <div><CategoryList :categories="categories"/></div>
        </div>
        <div class="col-md-8 col-lg-9">
          <Nuxt />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      categories: [],
    }
  },
  async fetch() {
    const categories = await this.$axios.$get(
      '/api/v1/categories/'
    )

    this.categories = categories || []
  },
}
</script>