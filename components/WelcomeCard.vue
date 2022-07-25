<template>
  <div class="welcome-card card bg-light shadow">
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
@import '@/assets/css/bootstrap-mixins.scss';

.welcome-card {
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  gap: map-get($spacers, 3);
  text-align: center;
  border: none;

  padding: map-get($spacers, 3);

  @include media-breakpoint-up(sm) {
    padding: map-get($spacers, 4);
  }

  @include media-breakpoint-up(md) {
    padding: map-get($spacers, 5);
  }

  .welcome-card-image-container {
    max-width: 12rem;
  }

  .welcome-card-line {
    height: map-get($border-widths, 2);
    align-self: stretch;
    margin: map-get($spacers, 0);
  }

  .welcome-card-message-container {
    align-self: stretch;
    ul {
      list-style: none;
      padding: map-get($spacers, 0);
      margin: map-get($spacers, 0);
    }
  }
}
</style>
