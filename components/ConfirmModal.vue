<template>
  <div class="modal fade" tabindex="-1" :aria-labelledby="titleId" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 :id="titleId" class="modal-title">{{ title }}</h5>
          <button
            v-if="!noCloseButton"
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          {{ body }}
        </div>
        <div class="modal-footer">
          <button
            type="button"
            :class="`btn ${cancelButtonType}`"
            data-bs-dismiss="modal"
            @click="$emit('cancel')"
          >
            {{ cancelButtonText }}
          </button>
          <button
            type="button"
            :class="`btn ${confirmButtonType}`"
            data-bs-dismiss="modal"
            @click="$emit('confirm')"
          >
            {{ confirmButtonText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { uniqueId } from 'lodash-es';

export default {
  name: 'ConfirmModal',
  props: {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    cancelButtonText: {
      type: String,
      required: false,
      default: 'Cancel',
    },
    cancelButtonType: {
      type: String,
      required: false,
      default: 'btn-outline-dark',
    },
    confirmButtonText: {
      type: String,
      required: false,
      default: 'Confirm',
    },
    confirmButtonType: {
      type: String,
      required: false,
      default: 'btn-primary',
    },
    noCloseButton: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ['confirm', 'cancel'],
  computed: {
    titleId() {
      return uniqueId('modal-');
    },
  },
};
</script>

<style lang="scss" scoped></style>
