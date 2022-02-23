<template>
  <div class="content-container">
      <WelcomeCard></WelcomeCard>
  </div>
</template>

<script>
import WelcomeCard from '../components/WelcomeCard.vue';
export default {
  name: "Home",
  components: {
    WelcomeCard
  }
};
</script>

<style lang="scss" scoped>
.content-container {
  height: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  > * {
    width: calc(min(600px, 100%));
  }
}
</style>