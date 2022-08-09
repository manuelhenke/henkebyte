<template>
  <div class="toast-provider">
    <slot></slot>
    <div
      v-if="toast"
      class="toast-container position-fixed top-0 start-50 translate-middle-x pt-3 pt-sm-4 pt-lg-5"
    >
      <div :id="toast.id" class="toast" role="alert" aria-live="status" aria-atomic="true">
        <div class="toast-header">
          <img
            v-if="toast.icon"
            :src="toast.icon.src"
            class="rounded me-2"
            width="25"
            :alt="toast.icon.alt"
          />
          <strong class="me-auto">{{ toast.author }}</strong>
          <small class="text-muted">{{ toast.date }}</small>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div class="toast-body">{{ toast.body }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'bootstrap';
import { isNil, isObject } from 'lodash-es';

export default {
  name: 'ToastProvider',
  props: {},
  data: () => ({
    lastActiveToast: null,
  }),
  computed: {
    toast() {
      return this.$store.getters['toasts/getLatest'];
    },
  },
  watch: {
    toast(newToast, oldToast) {
      if (
        (newToast !== oldToast && isNil(oldToast)) ||
        (isObject(newToast) && isObject(oldToast) && newToast.id !== oldToast.id)
      ) {
        this.displayToast(this.toast);
      }
    },
  },
  methods: {
    async displayToast(toast) {
      if (!isObject(toast) || !toast.id) return;

      // remove current active toast
      if (this.lastActiveToast) {
        this.lastActiveToast.dispose();
      }

      await this.$nextTick();
      const toastElement = document.getElementById(toast.id);

      if (toastElement) {
        this.lastActiveToast = new Toast(toastElement, toast.options);
        this.lastActiveToast.show();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/bootstrap-mixins.scss';

.toast-container {
  max-width: calc(100vw - map-get($spacers, 2) * 2);
}
</style>
