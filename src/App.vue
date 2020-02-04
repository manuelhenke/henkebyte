<template>
  <div class="app">
    <div class="app-header">
      <!-- <h1 class="app-header-title">Henkebyte</h1> -->
      <img src="henkebyte-logo.png" alt="henkebyte-logo" />
      <div class="line"></div>
      <div class="app-header-subtitle">
        <span class="message">Comming soon&hellip;</span>
      </div>
    </div>
    <span class="app-contact">
      <b-button variant="link" class="text-decoration-none" href="mailto:contact@henkebyte.com">
        <b-icon icon="envelope" scale="1.5"></b-icon>
        <span class="button-text">Contact</span>
      </b-button>
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

<style lang="scss" scoped>
.app {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .app-header {
    padding: 30px 60px;
    background-color: rgba(240, 240, 240, 0.5);
    -webkit-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);

    color: #139187;
    .app-header-title {
      margin: 0;

      line-height: 100%;
      font-size: 72px;
      font-weight: 500;
    }

    .line {
      margin: 30px -30px;
      border-top: #139187 solid 2px;
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

    .btn {
      &:hover {
        .button-text {
          margin-left: 5px;
          width: 60px;
          opacity: 1;
        }
      }

      .button-text {
        display: inline-block;
        opacity: 0;
        width: 0;
        transition: all 0.5s;
      }
    }
  }
}
</style>