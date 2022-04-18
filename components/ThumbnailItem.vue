<template>
  <img
    class="img-fluid img-thumbnail mb-1 me-1"
    :src="src"
    :alt="alt"
    style="cursor: pointer"
    v-show="isImageLoaded"
    @load="onImageLoad"
  />
</template>

<script>
export default {
  data() {
    return {
      isImageLoaded: false,
    }
  },
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
  },
  methods: {
    onImageLoad() {
      this.isImageLoaded = true
    },
  },
}
</script>