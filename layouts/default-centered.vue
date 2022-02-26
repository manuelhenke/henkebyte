<template>
  <div class="container-md p-0 py-md-4">
    <div
      id="default-centered-layout"
      class="p-sm-4 p-md-5 bg-light rounded-3 shadow position-relative"
    >
      <TheHeader class="mb-2" />
      <main>
        <Nuxt />
      </main>
      <TheFooter class="mt-5" />
      <FloatingContactButtons />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultCenteredLayout',
}
</script>

<style lang="scss" scoped>
#default-centered-layout {
  height: 100%;
  @media (max-width: 768px) {
    padding: 0.75rem;
    border-radius: 0 !important;
    box-shadow: none;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    > main {
      flex: 1;
    }
  }
}
</style>
