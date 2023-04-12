<template>
  <button
    type="button"
    class="btn btn-primary"
    :disabled="loading || disabled"
    @click="$emit('click', ...arguments)"
  >
    <span
      v-if="loading"
      class="spinner-border spinner-border-sm"
      role="status"
      aria-hidden="true"
    ></span>
    <span class="visually-hidden">Loading...</span>
    <slot />
  </button>
</template>

<script>
export default {
  name: 'LoadingButton',
  props: {
    loading: {
      default: false,
      type: Boolean,
      required: false,
    },
    disabled: {
      default: false,
      type: Boolean,
      required: false,
    },
  },
};
</script>
