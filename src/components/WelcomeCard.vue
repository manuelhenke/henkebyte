<template>
  <div class="p-3 p-sm-4 p-md-5 bg-light rounded-3 shadow-lg welcome-card text-primary text-center">
    <h1 class="display-5">Welcome to <span class="d-none">HenkeByte</span></h1>
    <div class="welcome-card-image-container">
      <img src="images/henkebyte-logo.png" class="img-fluid" alt="henkebyte-logo">
    </div>
    <hr class="welcome-card-line"/>
    <div class="welcome-card-message-container">
      <ul>
        <li v-for="link in links" :key="link.to">
          <router-link class="btn btn-link btn-lg" :to="link.to">{{ link.name }}<i class="bi bi-chevron-right"></i></router-link>
        </li>
      </ul>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  name: "WelcomeCard",
  components: {
    Footer
  },
  data: () => ({
    links: [
      {
        to: "ios-calculator",
        name: "iOS-Calculator"
      },
      {
        to: "minesweeper",
        name: "Minesweeper"
      }
    ]
  })
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