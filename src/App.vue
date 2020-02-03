<template>
  <div class="app">
    <div class="app-header">
      <h1 class="app-header-title">Henkebyte</h1>
      <p class="app-header-subtitle">
        <span class="message">Comming soon&hellip;</span>
        <span class="contact">
          <a href="mailto:manuel.henke@yahoo.d">Contact</a>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import { components } from "aws-amplify-vue";

export default {
  name: "app",
  components: {
    ...components
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  border: 0;
  min-width: auto;
  height: 100%;
}

* {
  box-sizing: border-box;
}
</style>

<style lang="scss" scoped>
.app {
  background: rgb(170, 233, 4);
  background: linear-gradient(
    180deg,
    rgba(170, 233, 4, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .app-header {
    font-family: "Courier New";
    .app-header-title {
      margin: 0;
      text-align: center;

      font-size: 72px;
      font-weight: 500;
      color: #000;
    }
    .app-header-subtitle {
      margin: 0;

      display: flex;
      justify-content: space-between;

      font-weight: 100;

      .message {
        color: #666666;
      }

      .contact {

        a {
          text-decoration: none;
        }
      }
    }
  }
}
</style>