<template>
  <div>
    <h1>{{ product.name }}</h1>
    <div class="row">
      <div class="col-sm-6 col-md-5 mb-2">
        <ImageWithStubs
          :src="product.mainImage && product.mainImage.image_large"
          :alt="product.name"
        />
        <div v-if="product.product_images && product.product_images.length > 1">
          <ThumbnailItem
            v-for="image in product.product_images"
            :src="image.image_small"
            :productName="product.name"
            :key="image.id"
            @click.native="changeMainImage(image)"
          />
        </div>
      </div>
      <div class="col-sm-6 col-md-7">
        <div v-if="product.discount > 0">
          <div>
            <span class="badge bg-secondary">{{ product.price }} RUB</span>
            <Discount :value="product.discount" />
          </div>
          <div>
            <span class="fs-5 fw-bold text-success"
              >{{ product.new_price }} RUB</span
            >
          </div>
          <div class="mb-3">
            Вы экономите
            <span class="fw-bold text-danger"
              >{{ product.price - product.new_price }} RUB</span
            >
          </div>
        </div>
        <div v-else>
          <span class="fs-5 fw-bold text-success">{{ product.price }} RUB</span>
        </div>
        <div class="mb-2">
          <strong>Размеры в наличии:</strong>
        </div>
        <form
          class="mb-3"
          action=""
          method="post"
          v-if="product.product_items && product.product_items.length"
        >
          <div class="mb-2">
            <label
              class="me-2"
              v-for="item in product.product_items"
              :key="item.id"
              ><input
                class="me-1"
                type="radio"
                name="size"
                :value="item.quantity"
              />{{ item.size }}</label
            >
          </div>
          <div class="form-group">
            <button type="button" class="btn btn-danger text-white" disabled>
              ДОБАВИТЬ В КОРЗИНУ
            </button>
          </div>
        </form>
        <p class="text-danger" v-else>Нет в наличии</p>
        <p>{{ product.description }}</p>
        <div v-html="product.detail"></div>
      </div>
    </div>
  </div>
</template>

<script>
import config from '~/nuxt.config'

export default {
  head() {
    return {
      title: `${this.product.name} | ${config.head.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.product.description,
        },
      ],
    }
  },
  async asyncData({ params, $axios }) {
    const product = await $axios.$get(
      `/api/v1/categories/${params.category}/products/${params.product}`
    )

    if (product && product.product_images && product.product_images.length) {
      product.mainImage = product.product_images[0]
    }

    return { product }
  },
  methods: {
    changeMainImage(image) {
      this.product.mainImage = image
    },
  },
}
</script>