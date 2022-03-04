<template>
  <div>
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
      <select
        ref="gamemode"
        v-model="currentGamemode"
        class="form-select text-center"
        name="gamemode"
      >
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

    <div class="text-center my-3 position-relative">
      <minesweeper-game
        id="minesweeper"
        ref="minesweeper"
        class="d-inline-block"
        bomb-counter-selector="#bomb-counter"
        @field-click="handleMinesweeperClick"
      ></minesweeper-game>
      <div v-if="!isEnded && !isStopwatchRunning" class="overlay">
        <button
          v-if="!isEnded"
          class="btn btn-link btn-icon btn-lg"
          @click="toggleStopWatch"
        >
          <i class="bi bi-play-circle-fill"></i>
        </button>
      </div>
    </div>

    <div class="my-3 d-flex gap-5 align-items-center justify-content-center">
      <div class="d-flex gap-2 align-items-center justify-content-center">
        <span>
          <i class="bi bi-stopwatch"></i>
          <StopWatch ref="stopwatch"></StopWatch>
        </span>
        <button
          v-if="!isEnded && isStopwatchRunning"
          class="btn btn-link btn-icon btn-lg"
          @click="toggleStopWatch"
        >
          <i class="bi bi-pause-circle-fill"></i>
        </button>
      </div>
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

    <section v-if="currentGamemodeScoreboard.length">
      <h2>Personal Scoreboard</h2>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Game Duration</th>
            <th scope="col">Played on</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(game, index) in currentGamemodeScoreboard.slice(0, 3)"
            :key="index"
            class="scoreboard-row"
          >
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ game.gameDuration }}</td>
            <td>
              {{ toDateString(game.gameCompletionTimestamp) }}
            </td>
            <td class="scoreboard-action">
              <button
                class="btn btn-link btn-icon btn-lg"
                @click="removeScoreboardEntry(game.id)"
              >
                <i class="bi bi-trash-fill"></i>
              </button>
            </td>
          </tr>
          <tr v-if="currentGamemodeScoreboard.length > 3">
            <th colspan="4" scope="row">...</th>
          </tr>
        </tbody>
        <tfoot v-if="currentGamemodeScoreboard.length > 3">
          <tr>
            <td colspan="4">
              {{ currentGamemodeScoreboard.length }} games in total
            </td>
          </tr>
        </tfoot>
      </table>
    </section>

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
import { liveQuery } from 'dexie'
import { db } from '~/middleware/db'
import 'minesweeper-for-web'

export default {
  name: 'MinesweeperPage',
  layout: 'default-centered',
  data: () => ({
    isMounted: false,
    isEnded: true,
    /** @type {Fireworks} */
    fireworks: null,
    currentGamemode: 'easy',
    games: [],
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
    isStopwatchRunning() {
      if (!this.isMounted) return

      // this.$refs is available
      return this.$refs.stopwatch.isRunning
    },
    currentGamemodeScoreboard() {
      return this.games.filter((game) => game.gamemode === this.currentGamemode)
    },
  },
  mounted() {
    this.isMounted = true

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
      const gameModeConfiguration = getGameModeConfiguration(
        this.currentGamemode
      )
      this.$refs.minesweeper.setGameModeConfiguration(gameModeConfiguration)
      this.restartGame()
    })

    const gameModeConfiguration = getGameModeConfiguration(this.currentGamemode)
    this.$refs.minesweeper.setGameModeConfiguration(gameModeConfiguration)

    this.$refs.minesweeper.addEventListener('game-won', async () => {
      this.isEnded = true
      this.$refs.stopwatch.stop()
      this.fireworks.start()

      await db.games.add({
        gamemode: this.currentGamemode,
        gameDuration: this.$refs.stopwatch.formattedElapsedTime,
        gameCompletionTimestamp: Date.now(),
      })

      let fireworkDuration
      switch (this.currentGamemode) {
        case 'hard':
          fireworkDuration = 20000
          break
        case 'normal':
          fireworkDuration = 15000
          break
        case 'easy':
        default:
          fireworkDuration = 10000
          break
      }

      window.setTimeout(() => {
        this.fireworks.stop()
      }, fireworkDuration)
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

    liveQuery(() => db.games.toArray()).subscribe((games) => {
      this.games = games.sort((gameA, gameB) =>
        gameA.gameDuration.localeCompare(gameB.gameDuration, undefined, {
          numeric: true,
          sensitivity: 'base',
        })
      )
    })
  },
  methods: {
    clickedRestart() {
      if (this.isEnded) {
        this.restartGame()
      }
    },
    restartGame() {
      this.isEnded = true
      this.fireworks.stop()
      this.$refs.stopwatch.reset()
      this.$refs.minesweeper.restartGame()
    },
    handleMinesweeperClick() {
      this.isEnded = false
      if (!this.$refs.stopwatch.isRunning) {
        this.$refs.stopwatch.start()
      }
    },
    toggleStopWatch() {
      if (this.isStopwatchRunning) {
        this.$refs.stopwatch.stop()
      } else {
        this.$refs.stopwatch.start()
      }
    },
    toDateString(timestamp) {
      const event = new Date(timestamp)
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
      return event.toLocaleDateString('en-EN', options)
    },
    removeScoreboardEntry(gameId) {
      db.games.delete(gameId)
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

.overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(var(--bs-light-rgb), 0.975);
  display: flex;
  place-content: center;
  place-items: center;

  .btn {
    font-size: 3rem;
  }
}

@media (hover: hover) {
  .scoreboard-row:not(:hover) .scoreboard-action > * {
    visibility: hidden;
  }
}
</style>
