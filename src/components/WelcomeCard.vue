<template>
  <div
    class="p-3 p-sm-4 p-md-5 bg-light rounded-3 shadow-lg welcome-card text-center"
  >
    <h1 class="display-5">Welcome to <span class="d-none">HenkeByte</span></h1>
    <div class="welcome-card-image-container">
      <img
        src="images/henkebyte-logo.png"
        class="img-fluid"
        alt="henkebyte-logo"
      />
    </div>
    <hr class="welcome-card-line" />
    <div class="welcome-card-message-container d-flex flex-column gap-2">
      <div v-for="navElement in navigation" :key="navElement.title">
        <h2 class="h4 mb-0">{{ navElement.title }}</h2>
        <ul>
          <li v-for="link in navElement.links" :key="link.to">
            <router-link class="btn btn-link btn-lg" :to="link.to"
              >{{ link.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "WelcomeCard",
  components: {
    Footer,
  },
  data: () => ({
    navigation: [
      {
        title: "Open Source Link",
        links: [
          {
            to: "ios-calculator",
            name: "iOS-Calculator",
          },
          {
            to: "minesweeper",
            name: "Minesweeper",
          },
        ],
      },
      {
        title: "Good to know",
        links: [
          {
            to: "f1-countdown",
            name: "F1 Countdown",
          },
        ],
      },
    ],
  }),
};
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
    img {
      width: 100%;
    }
  }

  .welcome-card-line {
    height: 2px;
    align-self: stretch;
    margin: 0;
  }

  .welcome-card-message-container {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
  }
}
</style>
