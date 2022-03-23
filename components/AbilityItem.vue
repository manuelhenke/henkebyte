<template>
  <div class="ability-item">
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
      class="libraries collapse mt-2"
    >
      <AbilityItem
        v-for="library of entry.libraries"
        :key="library.name"
        :entry="library"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AbilityItem',
  props: {
    entry: {
      type: Object,
      required: true,
    },
  },
  computed: {
    librariesHtmlId() {
      return 'libraries-' + this._uid
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/bootstrap-mixins.scss';

.skill-expand-trigger {
  cursor: pointer;
}

.stars {
  display: flex;
  gap: map-get($spacers, 1);

  --accent-color: var(--bs-secondary);

  > [class^='star-'] {
    $star-dimension: 2rem;
    border: map-get($border-widths, 1) solid var(--accent-color);
    border-radius: $border-radius-pill;
    color: var(--accent-color);
    height: $star-dimension;
    width: $star-dimension;
    display: flex;
    place-content: center;
    place-items: center;
    font-size: calc($star-dimension / 2);
    line-height: 1;
  }
  .star-filled {
    background: var(--accent-color);
    color: var(--bs-light);
  }
}

.libraries {
  border-left: map-get($border-widths, 2) solid var(--bs-secondary);
  padding: map-get($spacers, 1) map-get($spacers, 2);
  display: flex;
  flex-direction: column;
  gap: map-get($spacers, 2);
}
</style>
