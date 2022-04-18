<template>
  <nav aria-label="Page navigation">
    <ul class="pagination justify-content-center">
      <li class="page-item" :disabled="!prev_page_link">
        <NuxtLink
          class="page-link"
          :to="prev_page_link"
          aria-label="Prev"
          v-if="prev_page_link"
          >Пред.</NuxtLink
        >
        <a class="page-link" aria-label="Previous" v-else>Пред.</a>
      </li>
      <li class="page-item" :disabled="!next_page_link">
        <NuxtLink
          class="page-link"
          :to="next_page_link"
          aria-label="Next"
          v-if="next_page_link"
          >След.</NuxtLink
        >
        <a class="page-link" aria-label="Next" v-else>След.</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    prev_page_link: {
      type: String,
      default: null,
    },
    next_page_link: {
      type: String,
      default: null,
    },
  },
}
</script>
