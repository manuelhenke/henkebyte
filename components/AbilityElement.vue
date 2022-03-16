<template>
  <div>
    <div
      v-if="Array.isArray(entry.libraries)"
      class="mb-1 text-primary skill-expand-trigger"
      data-bs-toggle="collapse"
      :data-bs-target="`#${librariesHtmlId}`"
      aria-expanded="false"
      :aria-controls="librariesHtmlId"
    >
      <h4 class="d-inline fs-6 mb-0">{{ entry.name }}</h4>
      <i class="bi bi-chevron-expand"></i>
    </div>
    <h4 v-else class="fs-6 mb-1">{{ entry.name }}</h4>

    <div class="stars">
      <span
        v-for="index in 5"
        :key="index"
        :class="index <= entry.stars ? 'star-filled' : 'star-unfilled'"
      >
        <i v-if="index <= entry.stars" class="bi bi-code-slash"></i>
        <i v-else class="bi bi-code"></i>
      </span>
    </div>

    <div
      v-if="Array.isArray(entry.libraries)"
      :id="librariesHtmlId"
      class="collapse mt-2"
    >
      <div class="libraries">
        <AbilityElement
          v-for="library of entry.libraries"
          :key="library.name"
          :entry="library"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AbilityElement',
  props: {
    entry: {
      type: Object,
      required: true,
    },
  },
  computed: {
    librariesHtmlId() {
      return this.entry.name.replace(/[^\w]/gi, '-') + '-libraries'
    },
  },
}
</script>

<style lang="scss" scoped>
.skill-expand-trigger {
  cursor: pointer;
}

.stars {
  display: flex;
  gap: 5px;

  --accent-color: var(--bs-secondary);

  > * {
    border: 1px solid var(--accent-color);
    border-radius: 100%;
    color: var(--accent-color);
    height: 30px;
    width: 30px;
    display: flex;
    place-content: center;
    place-items: center;
    font-size: 15px;
    line-height: 1;
  }
  .star-filled {
    background: var(--accent-color);
    color: var(--bs-light);
  }
}

.libraries {
  border-left: 2px solid var(--bs-secondary);
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
</style>
