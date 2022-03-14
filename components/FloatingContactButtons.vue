<template>
  <div class="contact-button-container d-none d-md-flex">
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
</template>

<script>
export default {
  name: 'FloatingContactButtons',
}
</script>

<style lang="scss" scoped>
.contact-button-container {
  position: fixed;
  bottom: 15px;
  right: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 5px;
}
</style>
