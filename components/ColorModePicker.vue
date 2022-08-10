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
        @click="selectedColorMode = colorMode"
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
  </div>
</template>

<script>
import { capitalize } from 'lodash-es';
import globalEventNames from '@/util/globalEventNames';

const { DISPLAY_NOTIFICATION } = globalEventNames;

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
    selectedColorMode: null,
    colorModes: [
      { name: 'system', icon: 'gear-fill' },
      { name: 'light', icon: 'sun-fill' },
      { name: 'dark', icon: 'moon-fill' },
      { name: 'sepia', icon: 'cup-fill' },
    ],
  }),
  watch: {
    selectedColorMode() {
      // Set color mode globally
      this.$colorMode.preference = this.selectedColorMode.name;

      this.$nextTick().then(() => {
        let notificationBody = `Theme mode changed to: ${capitalize(this.selectedColorMode.name)}`;
        if (this.selectedColorMode.name === 'system') {
          notificationBody += ` (${capitalize(this.$colorMode.value)})`;
        }

        this.$nuxt.$emit(DISPLAY_NOTIFICATION, {
          id: `${this.selectedColorMode.name}-toast`,
          body: notificationBody,
        });
      });
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
</style>
