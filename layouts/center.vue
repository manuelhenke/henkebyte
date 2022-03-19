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

  // this is kinda hacky to achieve only for mobile phones to use this value for min-height
  // on mobile device 100vh doesn't result in 100% of the visible screen. App bar and url tool bar also counts
  @media (hover: none) and (max-width: 768px) {
    min-height: -webkit-fill-available;
  }

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
