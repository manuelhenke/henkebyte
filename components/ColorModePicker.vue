<template>
  <div class="color-mode-picker">
    <div class="color-mode-picker-buttons">
      <button
        v-for="colorMode of colorModes"
        :id="`${colorMode.name}-mode-trigger`"
        :key="colorMode.name"
        :title="`Change theme to ${colorMode.name}mode`"
        :aria-label="`Change color mode to ${colorMode.name}`"
        class="btn btn-link"
        :class="{
          preferred: !$colorMode.unknown && colorMode.name === $colorMode.preference,
          selected: !$colorMode.unknown && colorMode.name === $colorMode.value,
        }"
        type="button"
        @click="changeColorMode(colorMode.name)"
      >
        <i :class="`bi bi-${colorMode.icon}`"></i>
      </button>
    </div>
    <p v-if="showCurrentColorSchemeText">
      <ColorScheme placeholder="..." tag="span">
        Color mode: <b>{{ $colorMode.preference }}</b>
        <span v-if="$colorMode.preference === 'system'"
          >(<i>{{ $colorMode.value }}</i> mode detected)</span
        >
      </ColorScheme>
    </p>

    <div
      class="toast-container position-fixed top-0 start-50 translate-middle-x pt-3 pt-sm-4 pt-lg-5"
    >
      <div
        v-for="colorMode of colorModes"
        :id="`${colorMode.name}-toast`"
        :key="colorMode.name"
        class="toast"
        role="alert"
        aria-live="status"
        aria-atomic="true"
      >
        <div class="toast-header">
          <img
            src="~/assets/images/henkebyte-icon.png"
            class="rounded me-2"
            width="25"
            alt="Logo of henkebyte"
          />
          <strong class="me-auto">HenkeByte</strong>
          <small class="text-muted">just now</small>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div class="toast-body">Theme mode changed to: {{ capitalize(colorMode.name) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'bootstrap';
import { capitalize } from 'lodash-es';

export default {
  name: 'ColorModePicker',
  props: {
    showCurrentColorSchemeText: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data: () => ({
    colorModes: [
      { name: 'system', icon: 'gear-fill' },
      { name: 'light', icon: 'sun-fill' },
      { name: 'dark', icon: 'moon-fill' },
      { name: 'sepia', icon: 'cup-fill' },
    ],
    lastActiveToast: null,
  }),
  methods: {
    capitalize,
    changeColorMode(selectedColorModeName) {
      if (this.$colorMode.preference !== selectedColorModeName) {
        // Set color mode globally
        this.$colorMode.preference = selectedColorModeName;

        // remove current active toast
        if (this.lastActiveToast) {
          this.lastActiveToast.dispose();
        }

        const toastElement = document.getElementById(`${selectedColorModeName}-toast`);

        this.lastActiveToast = new Toast(toastElement, {
          delay: 3000,
        });
        this.lastActiveToast.show();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/bootstrap-mixins.scss';

$transition-distance: 0.2rem;

.color-mode-picker-buttons {
  display: flex;
  gap: map-get($spacers, 1);
  padding: map-get($spacers, 0);
  // padding-top: $transition-distance;
  margin: map-get($spacers, 0);

  button {
    color: var(--bs-body-color);
    position: relative;
    top: 0;
    transition: top 0.1s ease;
    /* background-color: var(--bs-light);
  border: map-get($border-width, 2) solid var(--bs-body-color);
  border-radius: $border-radius; */

    &:hover {
      top: -$transition-distance;
    }

    &.preferred {
      color: var(--bs-primary);
    }

    &.selected {
      /* color: var(--bs-primary); */
    }
  }
}

p {
  margin: map-get($spacers, 0);
  padding: map-get($spacers, 0);
  opacity: 0.75;
}

.toast-container {
  max-width: calc(100vw - map-get($spacers, 2) * 2);
}
</style>
