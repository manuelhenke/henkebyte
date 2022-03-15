<template>
  <h1 class="display-5 fw-bold">
    <slot></slot>
    <span v-if="badgeText" :class="`badge bg-${badgeColor}`">{{
      badgeText
    }}</span>
  </h1>
</template>

<script>
export default {
  name: 'TheTitle',
  props: {
    badgeText: {
      type: String,
      required: false,
      default: '',
    },
    badgeColor: {
      type: String,
      required: false,
      default: 'info',
    },
  },
}
</script>
