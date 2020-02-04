<template>
  <span class="app-contact">
    <b-button variant="link" class="text-decoration-none" :href="'mailto:' + this.mail">
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
        &:hover {
            .button-text {
                margin-left: 5px;
                width: 60px;
                opacity: 1;
            }
        }

        .button-text {
            display: inline-block;
            opacity: 0;
            width: 0;
            transition: all 0.5s;
        }
    }
}
</style>