<template>
  <section class="timeline-main">
    <div v-if="hasItems" class="wrapper-timeline">
      <div
        v-for="(timelineContent, timelineIndex) in dataTimeline"
        :key="timelineIndex"
        :class="wrapperItemClass(timelineIndex)"
      >
        <TimelineItem
          :item-timeline="timelineContent"
          :date-locale="dateLocale"
          :color-dots="colorDots"
        />
      </div>
    </div>
    <p v-else>{{ messageWhenNoItems }}</p>
  </section>
</template>

<script>
import TimelineItem from './TimelineItem.vue'

export default {
  name: 'TimelineMain',
  components: {
    TimelineItem,
  },
  props: {
    timelineItems: {
      type: Array,
      default: () => [],
    },
    messageWhenNoItems: {
      type: String,
      default: '',
    },
    colorDots: {
      type: String,
      default: 'var(--bs-secondary)',
    },
    uniqueTimeline: {
      type: Boolean,
      default: false,
    },
    uniqueYear: {
      type: Boolean,
      default: false,
    },
    order: {
      type: String,
      default: '',
    },
    dateLocale: {
      type: String,
      default: '',
    },
  },
  computed: {
    hasItems() {
      return !!this.timelineItems.length
    },
    dataTimeline() {
      if (this.order === 'desc')
        return this.orderItems(this.timelineItems, 'desc')
      if (this.order === 'asc')
        return this.orderItems(this.timelineItems, 'asc')
      return this.timelineItems
    },
  },
  methods: {
    wrapperItemClass(timelineIndex) {
      const isSameYearPreviousAndCurrent =
        this.checkYearTimelineItem(timelineIndex)
      const isUniqueYear =
        this.uniqueYear &&
        isSameYearPreviousAndCurrent &&
        this.order !== undefined
      return {
        'wrapper-item': true,
        'unique-timeline': this.uniqueTimeline || isUniqueYear,
      }
    },
    checkYearTimelineItem(timelineIndex) {
      const previousItem = this.dataTimeline[timelineIndex - 1]
      const nextItem = this.dataTimeline[timelineIndex + 1]
      const currentItem = this.dataTimeline[timelineIndex]
      if (!previousItem || !nextItem) {
        return false
      }
      const fullPreviousYear = previousItem.from
      const fullNextYear = nextItem.from
      const fullCurrentYear = currentItem.from
      return (
        (fullPreviousYear === fullCurrentYear &&
          fullCurrentYear === fullNextYear) ||
        fullCurrentYear === fullNextYear
      )
    },
    getTimelineItemsAssembled(items) {
      const itemsGroupByYear = []
      items.forEach((item) => {
        const fullTime = item.from
        if (itemsGroupByYear[fullTime]) {
          return itemsGroupByYear[fullTime].push(item)
        }
        itemsGroupByYear[fullTime] = [item]
      })
      return itemsGroupByYear
    },
    orderItems(items, typeOrder) {
      const itemsGrouped = this.getTimelineItemsAssembled(items)
      const keysItemsGrouped = Object.keys(itemsGrouped)
      const timeItemsOrdered = keysItemsGrouped.sort((a, b) => {
        if (typeOrder === 'desc') {
          return b - a
        }
        return a - b
      })
      const mappedItems = timeItemsOrdered.map(
        (timeItem) => itemsGrouped[timeItem]
      )
      return [].concat.apply([], mappedItems)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/bootstrap-mixins.scss';

.timeline-main {
  text-align: left;
  width: 100%;

  .wrapper-timeline {
    position: relative;
  }

  .wrapper-item:not(:last-child) {
    margin-bottom: map-get($spacers, 3);
    &.unique-timeline {
      margin-bottom: map-get($spacers, 0);
    }
  }
}
</style>
