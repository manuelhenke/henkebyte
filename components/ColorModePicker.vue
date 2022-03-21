<template>
  <div class="color-mode-picker">
    <ul>
      <li
        v-for="colorMode of colorModes"
        :key="colorMode.name"
        :title="`${capitalizeFirstLetter(colorMode.name)}mode`"
        :aria-label="`Change color mode to ${colorMode.name}`"
        :class="{
          preferred:
            !$colorMode.unknown && colorMode.name === $colorMode.preference,
          // selected: !$colorMode.unknown && colorMode.name === $colorMode.value,
        }"
        @click="changeColorMode(colorMode.name)"
      >
        <div class="feather">
          <i :class="`bi bi-${colorMode.icon}`"></i>
        </div>
      </li>
    </ul>
    <p v-if="showCurrentColorSchemeText">
      <ColorScheme placeholder="..." tag="span">
        Color mode: <b>{{ $colorMode.preference }}</b>
        <span v-if="$colorMode.preference === 'system'"
          >(<i>{{ $colorMode.value }}</i> mode detected)</span
        >
      </ColorScheme>
    </p>

    <div
      aria-live="polite"
      aria-atomic="true"
      class="position-fixed top-0 start-50 translate-middle-x"
    >
      <div class="toast-container pt-3 pt-sm-4 pt-lg-5">
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
              src="~/assets/images/henkebyte-logo.png"
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
          <div class="toast-body">
            Theme mode changed to: {{ capitalizeFirstLetter(colorMode.name) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'bootstrap'
import { capitalizeFirstLetter } from '~/util'

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
    capitalizeFirstLetter,
    changeColorMode(selectedColorModeName) {
      if (this.$colorMode.preference !== selectedColorModeName) {
        // Set color mode globally
        this.$colorMode.preference = selectedColorModeName

        // remove current active toast
        if (this.lastActiveToast) {
          this.lastActiveToast.dispose()
        }

        const toastElement = document.getElementById(
          `${selectedColorModeName}-toast`
        )

        this.lastActiveToast = new Toast(toastElement, {
          delay: 3000,
        })
        this.lastActiveToast.show()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/bootstrap-mixins.scss';

$transition-distance: 0.2rem;

ul {
  display: flex;
  gap: map-get($spacers, 1);
  list-style: none;
  padding: map-get($spacers, 0);
  // padding-top: $transition-distance;
  margin: map-get($spacers, 0);

  li {
    display: inline-block;
    padding: map-get($spacers, 0);
  }
}

.feather {
  position: relative;
  top: 0;
  cursor: pointer;
  padding: map-get($spacers, 2);
  margin: map-get($spacers, 0);
  transition: top 0.1s ease;
  /* background-color: var(--bs-light);
  border: map-get($border-width, 2) solid var(--bs-body-color);
  border-radius: $border-radius; */

  &:hover {
    top: -$transition-distance;
  }
}

.preferred .feather {
  border-color: var(--bs-primary);
  color: var(--bs-primary);
  // top: -$transition-distance;
}

.selected .feather {
  color: var(--bs-primary);
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
