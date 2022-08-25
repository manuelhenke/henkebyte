<template>
  <div class="toast-provider">
    <slot></slot>
    <div
      v-if="lastActiveToast"
      class="toast-container position-fixed top-0 start-50 translate-middle-x pt-3 pt-sm-4 pt-lg-5"
    >
      <div
        :id="lastActiveToast.id"
        class="toast"
        role="alert"
        aria-live="status"
        aria-atomic="true"
      >
        <div class="toast-header">
          <nuxt-img
            v-if="lastActiveToast.icon"
            :src="lastActiveToast.icon.src"
            class="rounded me-2"
            width="25"
            :alt="lastActiveToast.icon.alt"
          />
          <strong class="me-auto">{{ lastActiveToast.author }}</strong>
          <small class="text-muted">{{ lastActiveToast.date }}</small>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div class="toast-body">{{ lastActiveToast.body }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'bootstrap';
import { defaultsDeep, hasIn, uniqueId } from 'lodash-es';
import globalEventNames from '@/util/global-event-names.js';

const { DISPLAY_NOTIFICATION, REMOVE_NOTIFICATION } = globalEventNames;

export default {
  name: 'ToastProvider',
  props: {},
  data: () => ({
    lastActiveToast: undefined,
  }),
  beforeMount() {
    this.$nuxt.$on(DISPLAY_NOTIFICATION, (toast) => {
      const newToast = defaultsDeep(toast, {
        id: uniqueId(),
        author: 'HenkeByte',
        date: 'just now',
        icon: {
          src: '/icon.png',
          alt: 'Icon of HenkeByte',
        },
        options: {
          delay: 3000,
          autohide: true,
          animation: true,
        },
      });

      // remove current active toast
      this.removeToast();
      this.displayToast(newToast);
    });

    this.$nuxt.$on(REMOVE_NOTIFICATION, (toastId) => {
      if (hasIn(this.lastActiveToast, 'id') && this.lastActiveToast.id === toastId) {
        this.removeToast();
      }
    });
  },
  methods: {
    async displayToast(toast) {
      this.lastActiveToast = toast;
      await this.$nextTick();
      const toastElement = document.querySelector(`#${toast.id}`);

      if (toastElement) {
        this.lastActiveToast.element = new Toast(toastElement, toast.options);
        this.lastActiveToast.element.show();
      }
    },
    removeToast() {
      if (hasIn(this.lastActiveToast, 'element')) {
        try {
          this.lastActiveToast.element.dispose();
        } catch {}
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
