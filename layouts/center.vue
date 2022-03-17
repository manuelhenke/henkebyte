<template>
  <div id="center-layout">
    <div class="content-container">
      <main>
        <Nuxt />
      </main>
    </div>
    <aside>
      <FloatingContactButtons />
    </aside>
  </div>
</template>

<script>
export default {
  name: 'CenterLayout',
}
</script>

<style lang="scss" scoped>
#center-layout {
  min-height: 100vh;
  max-width: 100vw;
  display: flex;

  .content-container {
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    > * {
      width: calc(min(600px, 100%));
    }
  }
}
</style>
