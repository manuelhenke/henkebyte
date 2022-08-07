<template>
  <div class="minesweeper">
    <div class="d-grid gap-2 col-12 col-md-6 col-lg-4 mx-auto my-3 text-center">
      <select
        v-model="currentGamemode"
        class="form-select text-center"
        name="gamemode"
        @change="onChangedGamemode"
      >
        <option value="easy" selected>Easy - 9x9 / 10 Mines</option>
        <option value="normal">Normal - 16x16 / 40 Mines</option>
        <option value="hard">Hard - 16x30 / 99 Mines</option>
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
        @game-won="onGameWon"
        @game-lost="onGameLost"
      ></minesweeper-game>
      <div v-if="!isEnded && !isStopwatchRunning" class="overlay">
        <button
          class="btn btn-link btn-icon btn-lg"
          type="button"
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
          <StopWatch ref="stopwatch">
            <template #default="{ elapsedTime }">
              <TimeString :milliseconds="elapsedTime" />
            </template>
          </StopWatch>
        </span>
        <button
          v-if="!isEnded && isStopwatchRunning"
          class="btn btn-link btn-icon btn-lg"
          type="button"
          @click="toggleStopWatch"
        >
          <i class="bi bi-pause-circle-fill"></i>
        </button>
      </div>
      <span class="badge rounded-pill bg-danger"
        ><span id="bomb-counter"></span> Mines left</span
      >
    </div>

    <div class="alert alert-info d-flex align-items-center" role="alert">
      <i class="bi bi-info-circle-fill flex-shrink-0 me-2"></i>

      <div v-if="$device.isWindows && !$device.isMobile">
        To place a flag just hold <kbd>Ctrl</kbd> or <kbd>Alt</kbd> while
        clicking on a field. Or just hold a field to place a flag.
      </div>

      <div v-else-if="$device.isMacOS && !$device.isMobile">
        To place a flag just hold
        <kbd>Cmd <i class="bi bi-command"></i></kbd> or
        <kbd>Opt <i class="bi bi-option"></i></kbd> while clicking on a field.
        Or just hold a field to place a flag.
      </div>

      <div v-else>Just hold a field to place a flag.</div>
    </div>

    <section v-show="currentGamemodeScoreboardEntries.length">
      <div class="d-flex gap-2 align-items-center justify-content-between">
        <h2>Personal Scoreboard</h2>
        <button
          class="btn btn-outline-danger"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#reset-game-history-modal"
        >
          Reset
        </button>
      </div>
      <div class="row">
        <div class="col-12 col-md-8">
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
                v-for="(game, index) in currentGamemodeScoreboardEntries.slice(
                  0,
                  maxScoreboardGamesVisible
                )"
                :key="index"
                class="scoreboard-row"
              >
                <th scope="row">{{ index + 1 }}</th>
                <td>
                  <TimeString :milliseconds="game.gameDuration" />
                </td>
                <td>
                  {{ timestampToDateString(game.gameCompletionTimestamp) }}
                </td>
                <td class="scoreboard-action">
                  <button
                    class="btn btn-link btn-icon btn-lg"
                    type="button"
                    title="Remove entry"
                    @click="removeScoreboardEntry(game.id)"
                  >
                    <i class="bi bi-trash-fill"></i>
                  </button>
                </td>
              </tr>
              <tr
                v-if="
                  currentGamemodeScoreboardEntries.length >
                  maxScoreboardGamesVisible
                "
              >
                <th colspan="4" scope="row">...</th>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th scope="row">Avg.</th>
                <td>
                  ~<TimeString :milliseconds="currentGamemodeAverageDuration" />
                </td>
                <td></td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="col-12 col-md-4">
          <canvas ref="game-history-chart"></canvas>
        </div>
      </div>
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

    <div
      id="reset-game-history-modal"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="resetGameHistoryModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="resetGameHistoryModalLabel" class="modal-title">
              Reset game history
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            Are you sure, that you want to reset the entire history (including
            every gamemode)? This action is irreversible.
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
              class="btn btn-danger"
              data-bs-dismiss="modal"
              @click="resetGameHistory"
            >
              Yes, reset
            </button>
          </div>
        </div>
      </div>
    </div>

    <div ref="firework" class="firework-container"></div>
  </div>
</template>

<script>
import { Fireworks } from 'fireworks-js'
import { liveQuery } from 'dexie'
import {
  Chart,
  ArcElement,
  DoughnutController,
  Legend,
  Title,
  Tooltip,
} from 'chart.js'
import { db } from '~/middleware/db'
import { timestampToDateString } from '~/util'
import 'minesweeper-for-web'

Chart.register(ArcElement, DoughnutController, Legend, Title, Tooltip)

export default {
  name: 'MinesweeperWrapper',
  data: () => ({
    isMounted: false,
    isEnded: true,
    /** @type {Fireworks} */
    fireworks: null,
    currentGamemode: 'easy',
    games: [],
    maxScoreboardGamesVisible: 10,
    gamesHistoryChart: null,
  }),
  computed: {
    isStopwatchRunning() {
      if (!this.isMounted) return

      // this.$refs is available
      return this.$refs.stopwatch.isRunning
    },
    currentGamemodeGames() {
      return this.games.filter((game) => game.gamemode === this.currentGamemode)
    },
    currentGamemodeScoreboardEntries() {
      return this.currentGamemodeGames.filter((game) => game.gameIsWon)
    },
    currentGamemodeAverageDuration() {
      const sum = this.currentGamemodeScoreboardEntries
        .map((game) => game.gameDuration)
        .reduce((a, b) => a + b, 0)
      const avg = sum / this.currentGamemodeScoreboardEntries.length || 0
      return avg
    },
  },
  watch: {
    currentGamemodeGames() {
      if (
        this.currentGamemodeGames.length &&
        this.$refs['game-history-chart']
      ) {
        const wonGames = this.currentGamemodeGames.filter(
          (game) => game.gameIsWon
        ).length
        const lostGames = this.currentGamemodeGames.length - wonGames

        if (this.gamesHistoryChart) {
          this.gamesHistoryChart.data.datasets[0].data = [wonGames, lostGames]
          this.gamesHistoryChart.options.plugins.title.text = `${this.currentGamemodeGames.length} game(s) played in total`
          this.gamesHistoryChart.update()
        } else {
          const config = {
            type: 'doughnut',
            data: {
              labels: ['Won', 'Lost'],
              datasets: [
                {
                  label: 'Games History',
                  data: [wonGames, lostGames],
                  backgroundColor: ['#198754', '#dc3545'],
                  hoverOffset: 4,
                },
              ],
            },
            options: {
              plugins: {
                title: {
                  text: `${this.currentGamemodeGames.length} game(s) played in total`,
                  display: true,
                  position: 'bottom',
                },
              },
            },
          }

          this.gamesHistoryChart = new Chart(
            this.$refs['game-history-chart'],
            config
          )
        }
      }
    },
  },
  mounted() {
    this.isMounted = true

    const gameModeConfiguration = this.getGameModeConfiguration()
    this.$refs.minesweeper.setGameModeConfiguration(gameModeConfiguration)

    this.fireworks = new Fireworks(this.$refs.firework, {
      acceleration: 1.01,
    })

    liveQuery(() => db.games.toArray()).subscribe((games) => {
      this.games = games.sort(
        (gameA, gameB) => gameA.gameDuration - gameB.gameDuration
      )
    })
  },
  methods: {
    timestampToDateString,
    getGameModeConfiguration() {
      switch (this.currentGamemode) {
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
    },
    onChangedGamemode(e) {
      e.preventDefault()
      const gameModeConfiguration = this.getGameModeConfiguration()
      this.$refs.minesweeper.setGameModeConfiguration(gameModeConfiguration)
      this.restartGame()
    },
    onGameWon() {
      this.isEnded = true
      this.$refs.stopwatch.stop()
      this.fireworks.start()

      this.addDbEntry(true)

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
    },
    onGameLost() {
      this.isEnded = true
      this.$refs.stopwatch.stop()

      this.addDbEntry(false)
    },
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
    resetGameHistory() {
      db.games.clear()
    },
    removeScoreboardEntry(gameId) {
      db.games.delete(gameId)
    },
    addDbEntry(isWon) {
      db.games.add({
        gamemode: this.currentGamemode,
        gameDuration: this.$refs.stopwatch.elapsedTime,
        gameCompletionTimestamp: Date.now(),
        gameIsWon: isWon,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/bootstrap-mixins.scss';

$border-width: map-get($border-widths, 4);

#minesweeper {
  border-width: $border-width;
}

@include media-breakpoint-down(sm) {
  #minesweeper {
    border-width: 0;
    outline: $border-width solid rgb(189, 189, 189);
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

@include only-on-hover-device {
  .scoreboard-row:not(:hover) .scoreboard-action > * {
    visibility: hidden;
  }
}
</style>
