<template>
  <div class="rain-overlay">
    <div class="rain front-row">
      <div
        v-for="increment in drops"
        :key="increment"
        class="drop"
        :style="getRandomConfig(increment)"
      >
        <div class="stem"></div>
        <div v-if="!noSplat" class="splat"></div>
      </div>
    </div>
    <div class="rain back-row">
      <div
        v-for="increment in backDrops"
        :key="increment"
        class="drop"
        :style="getRandomConfig(increment)"
      >
        <div class="stem"></div>
        <div v-if="!noSplat" class="splat"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { random } from 'lodash-es';

// Heavily based on: https://codepen.io/arickle/pen/XKjMZY
export default {
  name: 'RainOverlay',
  props: {
    noInitRain: {
      type: Boolean,
      required: false,
      default: false,
    },
    noSplat: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data: () => ({
    drops: [],
    backDrops: [],
  }),
  mounted() {
    if (!this.noInitRain) {
      this.start();
    }
  },
  methods: {
    getRandomConfig(increment) {
      // couple random numbers to use for various randomizations
      const randoHundo = random(1, 98);
      const randoFiver = random(0, 2);

      return {
        '--x-offset': `${increment}%`,
        '--y-offset': `${randoFiver + randoFiver - 1 + 100}%`,
        '--delay': `0.${randoHundo}s`,
        '--duration': `0.5${randoHundo}s`,
      };
    },
    start() {
      // clear out everything
      this.clear();

      let increment = 0;

      while (increment < 100) {
        increment += random(2, 5);
        // add in a new raindrop with various randomizations to certain CSS properties
        this.drops.push(increment);
        this.backDrops.push(increment);
      }
    },
    clear() {
      this.drops = [];
      this.backDrops = [];
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/css/bootstrap-mixins.scss';

.rain-overlay {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: $zindex-fixed;

  --rain-color-rgb: var(--bs-black-rgb);

  .rain {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: $zindex-fixed + 2;

    &.front-row {
      .drop {
        left: var(--x-offset);
      }
    }

    &.back-row {
      display: block;
      z-index: $zindex-fixed + 1;
      bottom: 60px;
      opacity: 0.5;

      .drop {
        right: var(--x-offset);
      }
    }
  }

  .drop {
    position: absolute;
    bottom: var(--y-offset);

    display: flex;
    flex-direction: column;
    place-content: center;
    place-items: center;

    animation: drop var(--duration) var(--delay) linear infinite;
  }

  @keyframes drop {
    0% {
      transform: translateY(0vh);
    }
    75% {
      transform: translateY(100vh);
    }
    100% {
      transform: translateY(100vh);
    }
  }

  .stem {
    display: block;
    width: 1px;
    height: 70px;
    background: linear-gradient(
      to bottom,
      rgba(var(--rain-color-rgb), 0),
      rgba(var(--rain-color-rgb), 0.5)
    );
    animation: stem var(--duration) var(--delay) linear infinite;
  }

  @keyframes stem {
    0% {
      opacity: 1;
    }
    65% {
      opacity: 1;
    }
    75% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  .splat {
    display: block;
    width: 15px;
    height: 10px;
    border-top: 2px dotted rgba(var(--rain-color-rgb), 0.75);
    border-radius: 50%;
    opacity: 1;
    transform: scale(0);
    animation: splat var(--duration) var(--delay) linear infinite;
  }

  @keyframes splat {
    0% {
      opacity: 1;
      transform: scale(0);
    }
    80% {
      opacity: 1;
      transform: scale(0);
    }
    90% {
      opacity: 0.5;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(1.5);
    }
  }
}
</style>
