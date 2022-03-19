<template>
  <div id="color-mode-picker">
    <ul>
      <li
        v-for="colorMode of colorModes"
        :key="colorMode.name"
        :title="`${capitalizeFirstLetter(colorMode.name)}mode`"
        :class="{
          preferred:
            !$colorMode.unknown && colorMode.name === $colorMode.preference,
          // selected: !$colorMode.unknown && colorMode.name === $colorMode.value,
        }"
      >
        <div class="feather" @click="changeColorMode(colorMode.name)">
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
      class="position-fixed top-0 start-50 translate-middle-x p-2"
    >
      <div class="toast-container">
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
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
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

        const toast = new Toast(toastElement, {
          delay: 3000,
        })
        toast.show()
        this.lastActiveToast = toast
      }
    },
  },
}
</script>

<style lang="scss" scoped>
$transition-distance: 3px;

ul {
  display: flex;
  gap: 5px;
  list-style: none;
  padding: 0;
  // padding-top: $transition-distance;
  margin: 0;

  li {
    display: inline-block;
    padding: 0;
  }
}

p {
  margin: 0;
  padding: 0;
  opacity: 0.75;
}

.feather {
  position: relative;
  top: 0;
  cursor: pointer;
  padding: 7px;
  // background-color: var(--bs-light);
  // border: 2px solid var(--bs-body-color);
  margin: 0;
  border-radius: 5px;
  transition: all 0.1s ease;

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
</style>
