<template>
  <PageTemplate new-badge>
    <template v-slot:title>iOS-Calculator</template>
    <template v-slot:lead>
      This is an implementation of the iOS Calculator, which is available at
        <a href="https://github.com/manuelhenke/ios-calculator-for-web" target="_blank">GitHub</a>
        or at
        <a href="https://www.npmjs.com/package/ios-calculator-for-web" target="_blank">npm</a>.
    </template>
    <div class="text-center mt-3">
      <ios-calculator></ios-calculator>
    </div>
  </PageTemplate>
</template>

<script>
import PageTemplate from "./PageTemplate.vue";
import "ios-calculator-for-web";

export default {
  name: "Calculator",
  components: {
    PageTemplate
  }
};
</script>

<style lang="scss" scoped>
</style>
