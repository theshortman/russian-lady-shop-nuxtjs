<template>
  <span class="badge bg-danger">-{{ value }}%</span>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
}
</script>