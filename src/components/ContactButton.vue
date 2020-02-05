<template>
  <span class="app-contact">
    <b-button pill variant="primary" class="text-decoration-none" :href="'mailto:' + this.mail">
      <b-icon icon="envelope" scale="1.5"></b-icon>
      <span class="button-text">Contact</span>
    </b-button>
  </span>
</template>


<script>
export default {
  name: "ContactButton",
  data() {
    return {
      mail: "contact@henkebyte.com"
    };
  }
};
</script>

<style lang="scss" scoped>
.app-contact {
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    &:hover {
      .button-text {
        margin-left: 5px;
        opacity: 1;
        width: 60px;
      }
    }

    .button-text {
      display: inline-block;
      line-height: 1;

      opacity: 0;
      width: 0;
      transition: all 0.5s;
      display: inline-flex;
      justify-content: center;
    }
  }
}
</style>