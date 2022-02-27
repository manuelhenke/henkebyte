<template>
  <footer
    class="text-center d-flex gap-3 flex-column justify-content-center align-items-center"
  >
    <div class="d-flex d-md-none gap-2 small">
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
    <div class="d-flex gap-2 small">
      <!-- <nuxt-link to="/imprint">Imprint</nuxt-link>
      <i class="bi bi-slash"></i> -->
      <span>&copy; 2022 Copyright Manuel Henke</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
}
</script>
