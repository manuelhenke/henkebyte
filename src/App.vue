<template>
  <div class="app">
    <div class="app-header">
      <h1 class="app-header-title">
        Henke
        <strong>byte</strong>
      </h1>
      <div class="line"></div>
      <div class="app-header-subtitle">
        <span class="message">Comming soon&hellip;</span>
      </div>
    </div>
    <span class="app-contact">
      <a href="mailto:contact@henkebyte.com">Contact</a>
    </span>
  </div>
</template>

<script>
import { components } from "aws-amplify-vue";

export default {
  name: "app",
  components: {
    ...components
  },
  mounted() {
    this.$ga.page("/");
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

  font-family: "Courier New";

  .app-header {
    padding: 30px;
    background-color: rgba(240, 240, 240, 0.25);
    -webkit-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.75);

    color: #000;
    .app-header-title {
      margin: 0;

      line-height: 100%;
      font-size: 72px;
      font-weight: 500;
    }

    .line {
      margin: 30px 0;
      border-top: black solid 2px;
    }

    .app-header-subtitle {
      display: flex;
      justify-content: center;

      .message {
        font-weight: 100;
        font-size: 22px;
      }
    }
  }

  .app-contact {
    position: fixed;
    bottom: 15px;
    right: 15px;
    a {
      color: black;
      font-weight: bold;
      padding: 10px 16px;
      display: inline-block;
      text-decoration: none;

      &:hover {
        background: rgba(240, 240, 240, 0.25);
      }
    }
  }
}
</style>