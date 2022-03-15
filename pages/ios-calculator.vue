<template>
  <div>
    <TheTitle badge-text="New">iOS-Calculator</TheTitle>
    <TheLead
      >This is an implementation of the iOS-Calculator, which is available at
      <a
        href="https://github.com/manuelhenke/ios-calculator-for-web"
        target="_blank"
        >GitHub</a
      >
      or
      <a
        href="https://www.npmjs.com/package/ios-calculator-for-web"
        target="_blank"
        >npm</a
      >.</TheLead
    >

    <hr class="my-4" />

    <div class="text-center mt-3">
      <ios-calculator></ios-calculator>
    </div>
  </div>
</template>

<script>
import 'ios-calculator-for-web'

export default {
  name: 'CalculatorPage',
  layout: 'default-centered',
  head: {
    title: 'iOS-Calculator - HenkeByte',
    meta: [
      {
        hid: 'title',
        name: 'title',
        property: 'og:title',
        content: 'iOS-Calculator - HenkeByte',
      },
      {
        hid: 'description',
        name: 'description',
        property: 'og:description',
        content:
          'Showcase of the implementation of the project "ios-calculator-for-web" which is available at GitHub and npm.',
      },
    ],
  },
}
</script>
