<template>
  <svg
    class="img-fluid img-thumbnail"
    width="600"
    height="912"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="No photo"
    preserveAspectRatio="xMidYMid slice"
    focusable="false"
  >
    <rect width="100%" height="100%" fill="#ffffff"></rect>
    <text x="50%" y="50%" fill="#dee2e6" dy=".3em" text-anchor="middle">
      {{ text }}
    </text>
  </svg>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: null,
    },
  },
}
</script>
