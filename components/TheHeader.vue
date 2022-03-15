<template>
  <header>
    <nav class="d-flex justify-content-between align-items-center">
      <nuxt-link to="/" class="text-decoration-none"
        ><i class="bi bi-chevron-left"></i>Home</nuxt-link
      >
      <nuxt-link to="/"
        ><img
          src="~/assets/images/henkebyte-logo.png"
          class="img-fluid"
          width="50"
          alt="henkebyte-logo"
      /></nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>
