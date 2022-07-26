<template>
  <div class="hstack display-5 gap-3 mb-1">
    <h1 class="mb-0 fw-bold display-5">
      <slot></slot>
    </h1>
    <span v-if="badgeText" :class="`badge fw-bold bg-${badgeColor}`">{{
      badgeText
    }}</span>
  </div>
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
