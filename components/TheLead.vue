<template>
  <p
    class="fs-4 lead"
    :class="{
      'col-md-8': !fullWidth,
    }"
  >
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: 'TheLead',
  props: {
    fullWidth: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
