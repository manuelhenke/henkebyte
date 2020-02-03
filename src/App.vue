<template>
    <div class="app">
        <div class="app-header">
            <h1>Welcome to Henkebyte</h1>
        </div>
    </div>
</template>

<script>
import { components } from 'aws-amplify-vue'

export default {
  name: 'app', 
  components: {
    ...components
  }
}
</script>

<style scoped>
  .app {
    background: rgb(2,0,36);
    background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .app-header{
    text-align: center;
    color: white;
    font-family: "Courier New"
  }
</style>