<template>
  <div class="vstack gap-1 align-items-center">
    <div
      class="btn-group mb-2"
      role="group"
      aria-label="Basic outlined example"
    >
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
    <div id="website-screenshots" class="carousel slide" data-bs-ride="true">
      <div class="carousel-indicators">
        <button
          v-for="(slide, index) in slides"
          :key="slide.fileName"
          type="button"
          data-bs-target="#website-screenshots"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
          aria-current="true"
          :aria-label="slide.label"
        ></button>
      </div>
      <div class="carousel-inner">
        <div
          v-for="(slide, index) in slides"
          :key="slide.fileName"
          class="carousel-item"
          :class="{ active: index === 0 }"
        >
          <img
            :src="`${imagesPath}${slide.fileName}.png`"
            class="d-block w-100"
            :alt="`${slide.label} of the website henkebyte.com`"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#website-screenshots"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#website-screenshots"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <small class="text-muted">Overview of sample pages</small>
  </div>
</template>

<script>
import { sample, capitalize } from 'lodash'

const deviceTypes = {
  DESKTOP: 'desktop',
  TABLET: 'tablet',
  MOBILE: 'mobile',
}

export default {
  name: 'WebsiteScreenshotGallery',
  data: () => ({
    devices: Object.values(deviceTypes),
    selectedDevice: deviceTypes.DESKTOP,
    slides: [
      {
        fileName: 'home',
        label: 'Home page',
      },
      {
        fileName: 'about-me',
        label: 'About Me page',
      },
      {
        fileName: 'resources-overview',
        label: 'Resources Overview page',
      },
      {
        fileName: 'minesweeper',
        label: 'Minesweeper page',
      },
      {
        fileName: 'ios-calculator',
        label: 'iOS-Calculator page',
      },
    ],
  }),
  computed: {
    imagesPath() {
      return `/images/website-story/${this.selectedDevice}/${this.$colorMode.value}/`
    },
  },
  mounted() {
    if (this.$device.isMobile) {
      this.selectedDevice = deviceTypes.MOBILE
    } else if (this.$device.isTablet) {
      this.selectedDevice = deviceTypes.TABLET
    } else if (this.$device.isDesktop) {
      this.selectedDevice = deviceTypes.DESKTOP
    } else {
      this.selectedDevice = sample(this.devices)
    }
  },
  methods: {
    capitalize,
  },
}
</script>
