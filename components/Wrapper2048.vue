<template>
  <div ref="game-2048-wrapper" class="game-2048-wrapper">
    <div v-if="isInFullscreen" class="h1 display-1 text-center">2048</div>

    <div class="row my-3 text-center gy-2 justify-content-center">
      <div class="col-12 col-sm-8 col-md-5 col-lg-4 col-xl-3 d-grid">
        <button
          id="show-btn"
          class="btn btn-outline-primary"
          type="button"
          :data-bs-toggle="isEnded ? undefined : 'modal'"
          :data-bs-target="isEnded ? undefined : '#restart-modal'"
          @click="handleRestart"
        >
          Restart
        </button>
      </div>
    </div>

    <div class="d-flex justify-content-center my-3 position-relative mw-100">
      <game-2048
        id="game-2048"
        ref="game-2048"
        class="d-inline-block"
        @2048:move="handle2048Move"
        @2048:game-won="onGameWon"
        @2048:game-lost="onGameLost"
      ></game-2048>
      <div v-if="!isEnded && !isStopwatchRunning" class="overlay">
        <button class="btn btn-link btn-icon btn-lg" type="button" @click="toggleStopWatch">
          <i class="bi bi-play-circle-fill"></i>
        </button>
      </div>
    </div>

    <div class="d-flex justify-content-center align-items-center my-3 gap-3">
      <div class="d-none d-sm-inline-block">
        <button
          class="btn btn-link p-0"
          type="button"
          title="Toggle fullscreen"
          @click="toggleFullscreen"
        >
          <i v-if="isInFullscreen" class="bi bi-fullscreen-exit"></i>
          <i v-else class="bi bi-fullscreen"></i>
          Fullscreen
        </button>
      </div>
      <div class="d-flex gap-1 align-items-center justify-content-start">
        <span>
          <i class="bi bi-stopwatch"></i>
          <StopWatch ref="stopwatch">
            <template #default="{ elapsedTime }">
              <TimeString :milliseconds="elapsedTime" />
            </template>
          </StopWatch>
        </span>
        <button
          class="btn btn-link btn-icon btn-lg"
          :class="{
            invisible: isEnded || !isStopwatchRunning,
          }"
          type="button"
          @click="toggleStopWatch"
        >
          <i class="bi bi-pause-circle-fill"></i>
        </button>
      </div>
    </div>

    <ConfirmModal
      id="restart-modal"
      title="Restart the game"
      body="Are you sure, that you want to restart the game? Any Progress will be lost."
      confirm-button-text="Yes, restart"
      @confirm="restartGame"
    />

    <RainOverlay ref="rain" no-init-rain />
    <div ref="firework" class="firework-container"></div>
  </div>
</template>

<script>
import { Fireworks } from 'fireworks-js';
import '2048-webcomponent';
import globalEventNames from '@/util/global-event-names.js';

const { DISPLAY_NOTIFICATION, REMOVE_NOTIFICATION } = globalEventNames;

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Wrapper2048',
  data: () => ({
    isEnded: true,
    /** @type {Fireworks} */
    fireworks: undefined,
    endAnimationTimeoutId: undefined,
    notificationId: 'game-2048-notification',
    isInFullscreen: false,
  }),
  computed: {
    isStopwatchRunning() {
      try {
        return this.$refs.stopwatch.isRunning;
      } catch {
        return false;
      }
    },
    fullscreenTargetElement() {
      return this.$refs['game-2048-wrapper'];
    },
  },
  mounted() {
    this.fireworks = new Fireworks(this.$refs.firework, {
      acceleration: 1.01,
    });

    this.fullscreenTargetElement.addEventListener('fullscreenchange', () => {
      this.isInFullscreen = document.fullscreenElement;
    });

    // TODO: on navigation access if the user is sure, while the game is running
  },
  methods: {
    toggleFullscreen() {
      if (this.isInFullscreen) {
        document.exitFullscreen().catch((error) => console.error(error));
      } else {
        this.fullscreenTargetElement
          .requestFullscreen({
            navigationUI: 'show',
          })
          .catch((error) => console.error(error));
      }
    },
    onGameWon() {
      this.isEnded = true;
      this.$refs.stopwatch.stop();
      this.fireworks.start();

      this.$nuxt.$emit(DISPLAY_NOTIFICATION, {
        id: this.notificationId,
        body: `Congratulations, you have won!`,
        options: {
          delay: 5000,
        },
      });

      this.endAnimationTimeoutId = window.setTimeout(() => {
        this.fireworks.stop();
      }, 4000);
    },
    onGameLost() {
      this.isEnded = true;
      this.$refs.stopwatch.stop();
      this.$refs.rain.start();

      this.$nuxt.$emit(DISPLAY_NOTIFICATION, {
        id: this.notificationId,
        body: `Unfortunately, you lost this round of 2048. Just try again!`,
        options: {
          delay: 5000,
        },
      });

      this.endAnimationTimeoutId = window.setTimeout(() => {
        this.$refs.rain.clear();
      }, 40_000);
    },
    handleRestart() {
      if (this.isEnded) {
        this.restartGame();
      }
    },
    restartGame() {
      this.isEnded = true;
      this.fireworks.stop();
      this.$refs.rain.clear();
      window.clearTimeout(this.endAnimationTimeoutId);
      this.$refs.stopwatch.reset();
      this.$nuxt.$emit(REMOVE_NOTIFICATION, this.notificationId);

      this.$refs['game-2048'].restartGame();
    },
    handle2048Move() {
      this.startGame();
    },
    startGame() {
      this.isEnded = false;

      if (!this.$refs.stopwatch.isRunning) {
        this.$refs.stopwatch.start();
      }
    },
    toggleStopWatch() {
      if (this.isStopwatchRunning) {
        this.$refs.stopwatch.stop();
      } else {
        this.$refs.stopwatch.start();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/bootstrap-mixins.scss';

.game-2048-wrapper {
  &:fullscreen {
    padding: map-get($spacers, 2);
    overflow-y: auto;
    overflow-x: hidden;
    max-width: 100vw;
    background-color: rgb(var(--bs-light-rgb));
  }
}

.firework-container {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: $zindex-fixed;
}

.overlay {
  position: absolute;
  inset: -$border-width;
  background-color: rgba(var(--bs-light-rgb), 0.975);
  display: flex;
  place-content: center;
  place-items: center;

  .btn {
    font-size: 3rem;
  }
}
</style>
