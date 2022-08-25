<template>
  <img :src="imgSrc" />
</template>

<script>
export default {
  name: 'DynamicImage',
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  computed: {
    imgSrc() {
      return `${this.$router.options.base}${this.src}`.replace('//', '/');
    },
  },
};
</script>
