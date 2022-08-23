<template>
  <div class="ability-main row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-3">
    <div v-for="entry of sortedEntries" :key="entry.name" class="col">
      <AbilityItem :entry="entry" />
    </div>
  </div>
</template>

<script>
import { isArray, isEmpty, map, orderBy } from 'lodash-es';

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
      return orderBy(
        map(entries, (entry) => ({
          ...entry,
          libraries:
            isArray(entry.libraries) && !isEmpty(entry.libraries)
              ? this.sortByStars(entry.libraries)
              : undefined,
        })),
        ['stars', 'name'],
        ['desc', 'asc']
      );
    },
  },
};
</script>
