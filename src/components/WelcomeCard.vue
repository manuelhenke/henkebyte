<template>
  <div class="welcome-card text-primary">
    <div class="welcome-card-title">Welcome</div>
    <div class="welcome-card-image-container">
      <b-img src="henkebyte-logo.png" rounded="0" alt="henkebyte-logo"></b-img>
    </div>
    <div class="welcome-card-line border-primary"></div>
    <div class="welcome-card-message-container">
      <ul>
        <li><router-link to="ios-calculator">iOS-Calculator ></router-link></li>
        <li><router-link to="minesweeper">Minesweeper ></router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomeCard"
};
</script>

<style lang="scss" scoped>
.welcome-card {
  padding: 30px 60px;
  @media (max-width: 600px) {
    padding: 15px;
  }
  background-color: rgba(255, 255, 255, 0.5);
  -webkit-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);

  .welcome-card-title {
    display: none;
    margin-bottom: 30px;

    line-height: 1;
    text-align: center;
    font-size: 72px;
    font-weight: 100;
  }

  .welcome-card-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    max-width: 200px;
     
    @media (max-width: 600px) {
      margin-bottom: 15px;
    }
    img {
      width: 100%;
    }
  }

  .welcome-card-line {
    margin: 30px -15px;
    border-top: solid 2px;
      
    @media (max-width: 600px) {
      margin: 15px 0;
    }
  }

  .welcome-card-message-container {
    display: flex;
    justify-content: center;
    font-weight: 100;
    font-size: 22px;
    font-style: italic;

    @media (max-width: 600px) {
      font-size: 16px;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
  }
}
</style>