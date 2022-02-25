<template>
  <PageTemplate>
    <template v-slot:title>F1 Countdown</template>
    <template v-slot:lead> Blabla huge fan of f1 </template>

    <vue-countdown
      v-if="duration"
      :time="duration"
      v-slot="{ days, hours, minutes, seconds }"
    >
      Time Remaining：{{ days }} days, {{ hours }} hours, {{ minutes }} minutes,
      {{ seconds }} seconds.
    </vue-countdown>
  </PageTemplate>
</template>

<script>
import PageTemplate from "@/pages/PageTemplate.vue";

export default {
  name: "F1Countdown",
  components: {
    PageTemplate,
  },
  computed: {
    duration() {
      return new Date(2022, 2, 20, 15) - Date.now();
    },
  },
};
</script>

<style></style>
