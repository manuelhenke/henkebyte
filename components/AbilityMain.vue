<template>
  <div class="ability-main row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-3">
    <div v-for="entry of sortedEntries" :key="entry.name" class="col">
      <AbilityItem :entry="entry" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AbilityMain',
  props: {
    entries: {
      type: Array,
      required: true,
    },
  },
  computed: {
    sortedEntries() {
      return this.sortByStars(this.entries);
    },
  },
  methods: {
    sortByStars(entries) {
      return Array.from(entries)
        .map((entry) => ({
          ...entry,
          libraries: entry.libraries ? this.sortByStars(entry.libraries) : undefined,
        }))
        .sort((e1, e2) => e2.stars - e1.stars);
    },
  },
};
</script>
