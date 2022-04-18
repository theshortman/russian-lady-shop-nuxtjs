<template>
  <div class="row">
    <div class="col-7 col-sm-8 col-md-8">
      <NuxtLink :to="url">
        <ImageWithStubs :src="imageMediumUrl" :alt="product.name" />
      </NuxtLink>
    </div>
    <div class="col-5 col-sm-4 col-md-4 ps-0">
      <div class="mb-1">
        <div>
          <span class="badge bg-success"
            >{{
              product.price > product.new_price
                ? product.new_price
                : product.price
            }}
            RUB</span
          >
          <Discount :value="product.discount" v-if="product.discount > 0" />
        </div>
      </div>

      <div class="mb-2">
        <div>
          <span
            class="badge bg-secondary me-1"
            v-for="item in product.product_items"
            :key="item.key"
            >{{ item.size }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    imageMediumUrl() {
      const images = this.product.product_images

      return images && images.length ? images[0].image_medium : ''
    },
  },
}
</script>