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
        <h3 class="role-item">{{ itemTimeline.role }}</h3>
        <h4 class="place-item">{{ itemTimeline.place }}</h4>
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
.timeline-item {
  display: grid;
  grid-template-columns: 5ch 1fr;
  grid-column-gap: 15px;

  .year-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 15px 0;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    > * {
      margin: 0;
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
      border-left: 5px solid #ccd5db;
      padding: 20px 0 20px 15px;
      position: relative;

      &::before {
        content: '';
        display: block;
        position: absolute;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        left: -10px;
        top: 22px;
        background: var(--timeline-item-dot-color);
      }
    }
    .role-item {
      margin: 0;
      font-size: 16px;
      font-weight: 700;
    }
    .place-item {
      margin: 0;
      padding: 5px 0;
      font-size: 15px;
      font-weight: 500;
    }
    .description-item {
      margin: 0;
      font-size: 15px;
      font-weight: 300;
    }
  }
}
</style>
