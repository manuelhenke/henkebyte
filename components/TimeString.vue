<template>
  <span class="time-string">{{ formattedElapsedTime }}</span>
</template>

<script>
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
      const overallSeconds = Math.floor(this.milliseconds / 1000)
      const minutes = Math.floor(overallSeconds / 60)
      const seconds = overallSeconds % 60

      return minutes + ':' + String(seconds).padStart(2, '0')
    },
  },
}
</script>
