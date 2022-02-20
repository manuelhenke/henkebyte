<template>
    <div class="calculator-container">
        <router-link to="/">< Back</router-link>
        <h1 class="text-dark">iOS-Calculator</h1>
        <div class="ios-calculator"></div>
    </div>
</template>

<script>
    export default {
        name: "Calculator",
        mounted() {
            console.log("loading npm package");

            require('ios-calculator-for-web');
        }
    }
</script>

<style lang="scss" scoped>
    @import "~ios-calculator-for-web/dist/style.css";

    .calculator-container {
        padding: 30px 60px;
        @media (max-width: 600px) {
            padding: 15px;
        }
        background-color: rgba(255, 255, 255, 0.5);
        -webkit-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
        box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);

        .ios-calculator {
            margin: 30px 8px;
            display: flex;
            justify-content: center;
        }
    }
</style>