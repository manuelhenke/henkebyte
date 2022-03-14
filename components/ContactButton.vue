<template>
  <span class="app-contact">
    <a
      pill
      class="btn btn-primary text-light text-decoration-none"
      :href="href"
      target="_blank"
    >
      <i :class="icon"></i>
      <span class="button-text">{{ text }}</span>
    </a>
  </span>
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
.app-contact {
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    @media (hover: hover) {
      &:hover {
        .button-text {
          margin-left: 5px;
          opacity: 1;
          max-width: 100px;
        }
      }
    }

    .button-text {
      display: inline-block;
      line-height: 1;

      white-space: nowrap;
      opacity: 0;
      max-width: 0;
      transition: all 0.5s;
      display: inline-flex;
      justify-content: flex-start;
      overflow: hidden;
    }
  }
}
</style>
