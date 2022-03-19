<template>
  <a pill class="btn btn-primary" :href="href" target="_blank"
    ><i :class="icon"></i><span class="button-text">{{ text }}</span></a
  >
</template>

<script>
export default {
  name: 'ContactButton',
  props: {
    href: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.btn {
  $btn-dimension: 42px;
  $gap: 5px;
  $icon-dimension: 16px;
  $btn-padding: calc(($btn-dimension - $icon-dimension) / 2);

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: $gap;
  overflow: hidden;
  max-width: $btn-dimension;
  height: $btn-dimension;
  padding: $btn-padding;
  border-width: 0;

  transition: max-width 0.5s;

  @media (hover: hover) {
    &:hover {
      max-width: 150px;
    }
  }

  .button-text {
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>
