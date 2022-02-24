<template>
  {{ formattedElapsedTime }}
</template>

<script>
export default {
  name: "StopWatch",
  data: () => ({
    elapsedTime: 0,
    timer: undefined,
  }),
  computed: {
    formattedElapsedTime() {
      const date = new Date(null);
      date.setSeconds(this.elapsedTime / 1000);
      const utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") + 1, 5);
    },
    isRunning() {
      return !!this.timer;
    },
  },
  methods: {
    start() {
      this.timer = setInterval(() => {
        this.elapsedTime += 1000;
      }, 1000);
    },
    stop() {
      clearInterval(this.timer);
      this.timer = undefined;
    },
    reset() {
      this.elapsedTime = 0;
    },
  },
};
</script>

<style></style>
