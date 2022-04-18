<template>
  <NuxtLink
    :to="url"
    class="list-group-item list-group-item-action"
    :class="{ active: isRouteActive }"
    >{{ name }}</NuxtLink
  >
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  computed: {
    isRouteActive() {
      return this.$route.path.includes(this.url)
    },
  },
}
</script>