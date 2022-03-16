<template>
  <div
    class="p-3 p-sm-4 p-md-5 bg-light rounded-3 shadow-lg welcome-card text-center"
  >
    <div class="welcome-card-title-container">
      <slot name="title"></slot>
    </div>
    <div class="welcome-card-image-container">
      <slot name="image"></slot>
    </div>
    <hr class="welcome-card-line" />
    <div class="welcome-card-message-container">
      <slot></slot>
    </div>
    <TheFooter />
  </div>
</template>

<script>
export default {
  name: 'WelcomeCard',
}
</script>

<style lang="scss" scoped>
.welcome-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .welcome-card-image-container {
    max-width: 200px;
  }

  .welcome-card-line {
    height: 2px;
    align-self: stretch;
    margin: 0;
  }

  .welcome-card-message-container {
    align-self: stretch;
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
  }
}
</style>
