<template>
  <div class="app-root p-md-4">
    <div class="container-md">
      <router-view class="view"></router-view>
    </div>
    <div class="contact-button-container">
      <ContactButton
        text="LinkedIn"
        href="https://www.linkedin.com/in/manuel-henke/"
        icon="bi bi-linkedin"
      />
      <ContactButton
        text="GitHub"
        href="https://github.com/manuelhenke"
        icon="bi bi-github"
      />
      <ContactButton
        text="E-Mail"
        href="mailto:contact@henkebyte.com"
        icon="bi bi-envelope"
      />
    </div>
  </div>
</template>

<script>
import ContactButton from "./components/ContactButton.vue";

export default {
  name: "app",
  components: {
    ContactButton,
  },
};
</script>

<style lang="scss" scoped>
.app-root {
  background: linear-gradient(
    30deg,
    rgba(170, 233, 4, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
  min-height: 100vh;
  max-width: 100vw;
  display: flex;

  > [class^="container"] {
    padding: 0 !important;
    flex: 1;
  }

  .contact-button-container {
    position: fixed;
    bottom: 15px;
    right: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 5px;

    @media (max-width: 768px) {
      display: none;
    }
  }
}
</style>
