<template>
  <span>
    <slot :elapsed-time="elapsedTime">
      {{ elapsedTime }}
    </slot>
  </span>
</template>

<script>
export default {
  name: 'StopWatch',
  data: () => ({
    elapsedTime: 0,
    timer: undefined,
  }),
  computed: {
    isRunning() {
      return !!this.timer
    },
  },
  methods: {
    start() {
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        this.elapsedTime += 1000
      }, 1000)
    },
    stop() {
      clearInterval(this.timer)
      this.timer = undefined
    },
    reset() {
      this.stop()
      this.elapsedTime = 0
    },
  },
}
</script>
