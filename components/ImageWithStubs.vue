<template>
  <div class="mb-1">
    <ImageStub text="No Photo" v-if="!src" />
    <template v-else>
      <ImageStub text="Error" v-if="isImageError" />
      <ImageStub text="Loading..." v-if="!isImageError && !isImageLoaded" />
      <img
        v-show="!isImageError && isImageLoaded"
        class="img-fluid img-thumbnail"
        :src="src"
        :alt="alt"
        v-if="src"
        @load="onImageLoad"
        @error="onImageError"
      />
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isImageLoaded: false,
      isImageError: false,
    }
  },
  props: {
    src: {
      type: String,
      default: '',
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
    onImageError() {
      this.isImageError = true
    },
  },
}
</script>
