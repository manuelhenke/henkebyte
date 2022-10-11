<template>
  <div class="vstack align-items-center">
    <div class="btn-group mb-2" role="group" aria-label="Basic outlined example">
      <button
        v-for="device in devices"
        :key="device"
        type="button"
        class="btn btn-outline-primary"
        :class="{ active: device === selectedDevice }"
        @click="selectedDevice = device"
      >
        {{ capitalize(device) }}
      </button>
    </div>
    <div class="bg-dark px-2">
      <Flicking
        ref="flicking"
        class="py-4"
        :options="{
          align: 'center',
          circular: true,
          resizeOnContentsReady: true,
        }"
        :plugins="plugins"
      >
        <div
          v-for="slide in slides"
          :key="slide.fileName"
          :class="`slide-panel slide-panel-${selectedDevice}`"
        >
          <DynamicImage
            :src="`${imagesPath}${slide.fileName}.png`"
            class="d-block w-100"
            :alt="`${slide.label} of the website henkebyte.com`"
            draggable="false"
          />
        </div>
        <span slot="viewport" class="flicking-arrow-prev"></span>
        <span slot="viewport" class="flicking-arrow-next"></span>
        <div slot="viewport" class="flicking-pagination"></div>
      </Flicking>
    </div>
  </div>
</template>

<script>
import { DIRECTION, Flicking } from '@egjs/vue-flicking';
import { Fade, AutoPlay, Arrow, Pagination, PAGINATION } from '@egjs/flicking-plugins';
import { sample, capitalize, replace, toLower } from 'lodash-es';
import { routes } from '@/util/routes.cjs';

const DEVICE_TYPES = {
  DESKTOP: 'desktop',
  TABLET: 'tablet',
  MOBILE: 'mobile',
};

export default {
  name: 'WebsiteScreenshotGallery',
  components: { Flicking },
  props: {
    disableAutoPlay: {
      type: Boolean,
      required: false,
      default: false,
    },
    autoPlayDuration: {
      type: Number,
      required: false,
      default: 10_000,
    },
  },
  data: () => ({
    devices: Object.values(DEVICE_TYPES),
    selectedDevice: DEVICE_TYPES.DESKTOP,
    slides: Object.values(routes)
      .filter((route) => route !== routes.HENKEBYTE_WEBSITE)
      .map((route) => ({
        fileName: replace(toLower(route.name), ' ', '-'),
        label: `${route.name} page`,
      })),
    plugins: [new Fade(), new Pagination({ type: PAGINATION.TYPE.SCROLL }), new Arrow()],
  }),
  computed: {
    imagesPath() {
      return `images/website-story/${this.selectedDevice}/${this.$colorMode.value}/`;
    },
    slidePanelWidthClass() {
      switch (this.selectedDevice) {
        case DEVICE_TYPES.DESKTOP: {
          return 'w-75';
        }
        case DEVICE_TYPES.TABLET: {
          return 'w-50';
        }
        case DEVICE_TYPES.MOBILE: {
          return 'w-25';
        }
        default: {
          return 'w-100';
        }
      }
    },
  },
  watch: {
    selectedDevice() {
      this.$refs.flicking.resize();
    },
  },
  mounted() {
    if (this.$device.isMobile) {
      this.selectedDevice = DEVICE_TYPES.MOBILE;
    } else if (this.$device.isTablet) {
      this.selectedDevice = DEVICE_TYPES.TABLET;
    } else if (this.$device.isDesktop) {
      this.selectedDevice = DEVICE_TYPES.DESKTOP;
    } else {
      this.selectedDevice = sample(this.devices);
    }

    if (!this.disableAutoPlay) {
      this.plugins.push(
        new AutoPlay({
          duration: this.autoPlayDuration,
          direction: DIRECTION.NEXT,
          stopOnHover: true,
        })
      );
    }
  },
  methods: {
    capitalize,
  },
};
</script>

<style lang="scss">
@import '@egjs/vue-flicking/dist/flicking.css';
@import '@egjs/flicking-plugins/dist/flicking-plugins.css';
@import '@/assets/css/bootstrap-mixins.scss';

.slide-panel {
  margin-right: map-get($spacers, 2);
  width: 75%;
}

.flicking-arrow-next,
.flicking-arrow-prev {
  &::before,
  &::after {
    background-color: var(--bs-secondary);
  }

  &.flicking-arrow-disabled {
    opacity: 0.1;
  }
}

.flicking-pagination {
  bottom: calc(map-get($spacers, 3) / 2);
  .flicking-pagination-slider {
    > * {
      background-color: rgba(var(--bs-secondary-rgb), 0.5);
      &[class$='-active'] {
        background-color: var(--bs-secondary);
      }
    }
  }
}

@include media-breakpoint-down(md) {
  .slide-panel-mobile {
    width: 50%;
  }
  .flicking-arrow-next,
  .flicking-arrow-prev {
    display: none;
  }
}

@include media-breakpoint-up(md) {
  .slide-panel-mobile {
    width: 25%;
  }
  .slide-panel-tablet {
    width: 50%;
  }
}
</style>
