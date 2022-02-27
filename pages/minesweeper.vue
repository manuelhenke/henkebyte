<template>
  <div id="minesweeper-page">
    <TheTitle badge-text="New">Minesweeper</TheTitle>
    <TheLead>
      This is an implementation of the game
      <a
        href="https://www.instructables.com/id/How-to-beat-Minesweeper/"
        target="_blank"
        title="Minesweeper Tutorial"
        >Minesweeper</a
      >, which is available at
      <a
        href="https://github.com/manuelhenke/minesweeper-for-web"
        target="_blank"
        >GitHub</a
      >
      or
      <a
        href="https://www.npmjs.com/package/minesweeper-for-web"
        target="_blank"
        >npm</a
      >.
    </TheLead>

    <hr class="my-4" />

    <div class="d-grid gap-2 col-12 col-md-6 col-lg-4 mx-auto my-3 text-center">
      <select ref="gamemode" class="form-select text-center" name="gamemode">
        <option value="easy" selected>Easy - 9x9 / 10 Mines</option>
        <option value="normal">Normal - 16x16 / 40 Mines</option>
        <option value="hard">Hard - 16x30 / 99 Mines</option>
        <!-- <option value="custom">Custom</option> -->
      </select>
      <button
        id="show-btn"
        class="btn btn-outline-primary"
        type="button"
        :data-bs-toggle="isEnded ? null : 'modal'"
        :data-bs-target="isEnded ? null : '#restart-modal'"
        @click="clickedRestart"
      >
        Restart
      </button>
    </div>

    <div class="text-center mt-3">
      <minesweeper-game
        id="minesweeper"
        ref="minesweeper"
        class="d-inline-block"
        bomb-counter-selector="#bomb-counter"
        @field-click="handleMinesweeperClick"
      ></minesweeper-game>
    </div>
    <div class="my-3 d-flex gap-3 align-items-center justify-content-center">
      <span>
        <i class="bi bi-stopwatch"></i> <StopWatch ref="stopwatch"></StopWatch>
      </span>
      <span class="badge rounded-pill bg-danger"
        ><span id="bomb-counter"></span> Mines left</span
      >
    </div>

    <div class="alert alert-primary d-flex align-items-center" role="alert">
      <i class="bi bi-info-circle-fill flex-shrink-0 me-2"></i>

      <div v-if="supportedInput === 'windows'">
        To place a flag just hold <kbd>Ctrl</kbd> or <kbd>Alt</kbd> while
        clicking on a field. Or just hold a field to place a flag.
      </div>

      <div v-else-if="supportedInput === 'mac'">
        To place a flag just hold
        <kbd>Cmd <i class="bi bi-command"></i></kbd> or
        <kbd>Opt <i class="bi bi-option"></i></kbd> while clicking on a field.
        Or just hold a field to place a flag.
      </div>

      <div v-else>Just hold a field to place a flag.</div>
    </div>

    <div
      id="restart-modal"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="restartModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="restartModalLabel" class="modal-title">Restart the game</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            Are you sure, that you want to restart the game? Any Progress will
            be lost.
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-dark"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              @click="restartGame"
            >
              Yes, restart
            </button>
          </div>
        </div>
      </div>
    </div>
    <div ref="firework" class="firework-container"></div>
  </div>
</template>

<script>
import Platform from 'platform-detect'
import { Fireworks } from 'fireworks-js'
import 'minesweeper-for-web'

export default {
  name: 'MinesweeperPage',
  layout: 'default-centered',
  data: () => ({
    isEnded: false,
    /** @type {Fireworks} */
    fireworks: null,
  }),
  head: {
    title: 'Minesweeper - HenkeByte',
    meta: [
      {
        hid: 'title',
        name: 'title',
        property: 'og:title',
        content: 'Minesweeper - HenkeByte',
      },
      {
        hid: 'description',
        name: 'description',
        property: 'og:description',
        content:
          'Showcase of the implementation of the project "minesweeper-for-web" which is available at GitHub and npm.',
      },
    ],
  },
  computed: {
    supportedInput() {
      if (Platform.mouse) {
        if (Platform.macos) {
          return 'mac'
        } else {
          return 'windows'
        }
      }

      return 'hold'
    },
  },
  mounted() {
    function getGameModeConfiguration(currentGameMode) {
      switch (currentGameMode) {
        case 'hard':
          return {
            columns: 30,
            rows: 16,
            bombs: 99,
          }
        case 'normal':
          return {
            columns: 16,
            rows: 16,
            bombs: 40,
          }
        case 'easy':
        default:
          return {
            columns: 9,
            rows: 9,
            bombs: 10,
          }
      }
    }

    this.$refs.gamemode.addEventListener('change', (e) => {
      e.preventDefault()

      const gameModeConfiguration = getGameModeConfiguration(e.target.value)
      this.$refs.minesweeper.setGameModeConfiguration(gameModeConfiguration)
    })

    this.$refs.minesweeper.addEventListener('game-won', () => {
      this.isEnded = true
      this.$refs.stopwatch.stop()
      this.fireworks.start()
      window.setTimeout(() => {
        this.fireworks.stop()
      }, 10000)
    })

    this.$refs.minesweeper.addEventListener('game-lost', () => {
      this.isEnded = true
      this.$refs.stopwatch.stop()
    })

    this.fireworks = new Fireworks(this.$refs.firework, {
      particles: 200,
      explosion: 10,
      sound: false,
    })
  },
  methods: {
    clickedRestart() {
      if (this.isEnded) {
        this.restartGame()
      }
    },
    restartGame() {
      this.fireworks.stop()
      this.$refs.stopwatch.reset()
      this.$refs.minesweeper.restartGame()
      this.isEnded = false
    },
    handleMinesweeperClick() {
      if (!this.$refs.stopwatch.isRunning && !this.isEnded) {
        this.$refs.stopwatch.start()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@media (max-width: 768px) {
  #minesweeper {
    border-width: 0;
    outline: 4px solid rgb(189, 189, 189);
  }
}

.firework-container {
  position: absolute;
  inset: 0;
  pointer-events: none;

  > * {
    height: 100%;
    width: 100%;
  }
}
</style>
