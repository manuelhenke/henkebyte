<template>
  <span class="shake-element" :class="{ shake: isShaking }">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'ShakeElement',
  props: {
    shakeDuration: {
      type: Number,
      required: false,
      default: 1000,
    },
  },
  data: () => ({
    isShaking: false,
    timeoutId: undefined,
  }),
  methods: {
    shake() {
      this.isShaking = true;
      window.clearTimeout(this.timeoutId);
      this.timeoutId = window.setTimeout(() => {
        this.isShaking = false;
      }, this.shakeDuration);
    },
  },
};
</script>

<style>
.shake-element {
  display: inline-block;
}

.shake {
  animation-name: shake;
  animation-timing-function: cubic-bezier(0.36, 0.07, 0.19, 0.97);
  animation-fill-mode: both;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
