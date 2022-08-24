<template>
  <a pill class="contact-button btn btn-primary" :href="href" target="_blank"
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
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/bootstrap-mixins.scss';

.contact-button {
  $btn-dimension: 2.5rem;
  $gap: map-get($spacers, 1);
  $icon-dimension: 1rem;
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

  @include only-on-hover-device {
    &:hover {
      max-width: 10rem;
    }
  }

  .button-text {
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>
