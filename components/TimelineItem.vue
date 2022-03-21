<template>
  <div class="timeline-item">
    <div class="year-container">
      <p v-if="yearTo" class="year-to">
        {{ yearTo }}
      </p>
      <span v-if="yearTo" class="year-divider"><i class="bi bi-dash"></i></span>
      <p v-if="yearFrom" class="year-from">
        {{ yearFrom }}
      </p>
    </div>
    <section class="content-container">
      <div class="item fw-normal" :style="backgroundColor">
        <h3 class="role-item fs-6">{{ itemTimeline.role }}</h3>
        <h4 class="place-item fs-6">{{ itemTimeline.place }}</h4>
        <p class="description-item">
          {{ itemTimeline.description }}
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TimelineItem',
  props: {
    itemTimeline: {
      type: Object,
      default: () => ({}),
    },
    colorDots: {
      type: String,
      default: 'var(--bs-secondary)',
    },
    dateLocale: {
      type: String,
      default: '',
    },
  },
  computed: {
    yearFrom() {
      if ('from' in this.itemTimeline && this.itemTimeline.from !== undefined) {
        return this.itemTimeline.from.getFullYear()
      } else {
        return null
      }
    },
    yearTo() {
      if ('to' in this.itemTimeline && this.itemTimeline.to !== undefined) {
        if (typeof this.itemTimeline.to === 'string') {
          return this.itemTimeline.to
        } else {
          return this.itemTimeline.to.getFullYear()
        }
      } else {
        return null
      }
    },
    backgroundColor() {
      return this.itemTimeline.color
        ? `--timeline-item-dot-color: ${this.itemTimeline.color}`
        : `--timeline-item-dot-color: ${this.colorDots}`
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/bootstrap-mixins.scss';

.timeline-item {
  display: grid;
  grid-template-columns: 5ch 1fr;
  grid-column-gap: map-get($spacers, 3);

  .year-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: map-get($spacers, 3) map-get($spacers, 0);
    font-weight: $font-weight-bold;
    text-align: center;
    > p {
      margin: map-get($spacers, 0);
      line-height: $headings-line-height;
    }
    .year-divider {
      line-height: 1;
    }
    .year-divider,
    .year-from {
      opacity: 0.5;
    }
  }

  .content-container {
    .item {
      $line-width: 0.3rem;
      border-left: $line-width solid $gray-400;
      padding: map-get($spacers, 3);
      position: relative;

      &::before {
        $dot-dimensions: 1rem;
        content: '';
        display: block;
        position: absolute;
        width: $dot-dimensions;
        height: $dot-dimensions;
        border-radius: $border-radius-pill;
        left: calc(($dot-dimensions / 2) + ($line-width / 2)) * -1;
        top: map-get($spacers, 3);
        background: var(--timeline-item-dot-color);
      }
    }
    .role-item {
      margin: map-get($spacers, 0);
      margin-bottom: map-get($spacers, 1);
      font-weight: $font-weight-bold;
    }
    .place-item {
      margin: map-get($spacers, 0);
      margin-bottom: map-get($spacers, 2);
      font-weight: $font-weight-normal;
    }
    .description-item {
      margin: map-get($spacers, 0);
      font-weight: $font-weight-light;
    }
  }
}
</style>
