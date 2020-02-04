<template>
  <div class="app container">
    <WelcomeCard/>
    <div class="contact-button-container">
      <ContactButton/>
    </div>
  </div>
</template>

<script>
import { components } from "aws-amplify-vue";
import WelcomeCard from "./components/WelcomeCard.vue";
import ContactButton from "./components/ContactButton.vue";

export default {
  name: "app",
  components: {
    ...components,
    WelcomeCard,
    ContactButton
  },
  mounted() {
    this.$ga.page("/");
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