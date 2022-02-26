<template>
  <div id="default-layout" class="bg-light position-relative">
    <div class="container py-3 py-sm-4">
      <TheHeader class="mb-2" />
      <main>
        <Nuxt />
      </main>
      <TheFooter class="mt-5" />
    </div>
    <FloatingContactButtons />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style lang="scss" scoped>
#default-layout {
  .container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    > main {
      flex: 1;
    }
  }
}
</style>
