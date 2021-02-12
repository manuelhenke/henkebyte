<template>
  <b-container class="app">
    <router-view class="view"></router-view>
    <div class="contact-button-container">
      <ContactButton />
    </div>
  </b-container>
</template>

<script>
import { components } from "aws-amplify-vue";
import ContactButton from "./components/ContactButton.vue";

export default {
  name: "app",
  components: {
    ...components,
    ContactButton
  }
};
</script>

<style lang="scss" scoped>
.app {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .contact-button-container {
    position: fixed;
    bottom: 15px;
    right: 15px;
  }
}
</style>