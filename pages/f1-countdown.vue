<template>
  <div id="f1-countdown-page">
    <TheTitle badge-text="New">F1 Countdown</TheTitle>
    <TheLead>Blabla huge fan of f1</TheLead>

    <vue-countdown v-if="duration" v-slot="{ days, hours, minutes, seconds }" :time="duration">
      Time Remaining：{{ days }} days, {{ hours }} hours, {{ minutes }} minutes,
      {{ seconds }} seconds.
    </vue-countdown>
  </div>
</template>

<script>
import VueCountdown from '@chenfengyuan/vue-countdown';

export default {
  name: 'F1Countdown',
  components: {
    VueCountdown,
  },
  layout: 'default-centered',
  computed: {
    duration() {
      return new Date(2022, 2, 20, 15) - Date.now();
    },
  },
};
</script>
