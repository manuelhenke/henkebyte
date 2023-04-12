<template>
  <span :style="timeStringStyle">{{ formattedElapsedTime }}</span>
</template>

<script>
import { millisecondsToTimeString } from '@/util/index.js';

export default {
  name: 'TimeString',
  props: {
    milliseconds: {
      type: Number,
      required: true,
    },
  },
  computed: {
    formattedElapsedTime() {
      return millisecondsToTimeString(this.milliseconds);
    },
    timeStringStyle() {
      // avoid bumping on often number change, e.g. when used together with StopWatch
      return {
        display: 'inline-block',
        'min-width': `${this.formattedElapsedTime.toString().length}ch`,
      };
    },
  },
};
</script>
