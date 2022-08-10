<template>
  <div class="minesweeper">
    <div class="d-grid gap-2 col-12 col-md-6 col-lg-4 mx-auto my-3 text-center">
      <select
        v-model="currentGameModeName"
        class="form-select text-center"
        name="gamemode"
        @change="onChangedGameMode"
      >
        <option
          v-for="gameMode of gameModesSelectionOptions"
          :key="gameMode.value"
          :value="gameMode.value"
          :selected="gameMode.selected"
        >
          {{ gameMode.text }}
        </option>
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
        <button class="btn btn-link btn-icon btn-lg" type="button" @click="toggleStopWatch">
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
      <span class="badge rounded-pill bg-danger"><span id="bomb-counter"></span> Mines left</span>
    </div>

    <div class="alert alert-info d-flex align-items-center" role="alert">
      <i class="bi bi-info-circle-fill flex-shrink-0 me-2"></i>

      <div v-if="$device.isWindows && !$device.isMobile">
        To place a flag just hold <kbd>Ctrl</kbd> or <kbd>Alt</kbd> while clicking on a field. Or
        just hold a field to place a flag.
      </div>

      <div v-else-if="$device.isMacOS && !$device.isMobile">
        To place a flag just hold
        <kbd>Cmd <i class="bi bi-command"></i></kbd> or
        <kbd>Opt <i class="bi bi-option"></i></kbd> while clicking on a field. Or just hold a field
        to place a flag.
      </div>

      <div v-else>Just hold a field to place a flag.</div>
    </div>

    <section v-show="currentGameModeScoreboardEntries.length">
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
                v-for="game in currentGameModeScoreboardEntries.slice(0, maxScoreboardGamesVisible)"
                :key="game.rank"
                class="scoreboard-row"
              >
                <th scope="row">{{ game.rank }}</th>
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
              <tr v-if="currentGameModeScoreboardEntries.length > maxScoreboardGamesVisible">
                <th colspan="4" scope="row">...</th>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th scope="row ">&sum;&nbsp;{{ currentGameModeScoreboardEntries.length }}</th>
                <td>~<TimeString :milliseconds="currentGameModeAverageDuration" /></td>
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

    <ConfirmModal
      id="restart-modal"
      title="Restart the game"
      body="Are you sure, that you want to restart the game? Any Progress will be lost."
      confirm-button-text="Yes, restart"
      @confirm="restartGame"
    />

    <ConfirmModal
      id="reset-game-history-modal"
      title="Reset game history"
      body="Are you sure, that you want to reset the entire history (including every game mode)? This action is irreversible."
      confirm-button-text="Yes, reset"
      confirm-button-type="btn-danger"
      @confirm="resetGameHistory"
    />

    <RainOverlay ref="rain" no-init-rain />
    <div ref="firework" class="firework-container"></div>
  </div>
</template>

<script>
import { capitalize, filter, find, lowerCase, map, meanBy, reverse, size, sortBy } from 'lodash-es';
import { Fireworks } from 'fireworks-js';
import { liveQuery } from 'dexie';
import { Chart, ArcElement, DoughnutController, Legend, Title, Tooltip } from 'chart.js';
import { db } from '@/middleware/db';
import { timestampToDateString } from '@/util';
import globalEventNames from '@/util/globalEventNames';
import 'minesweeper-for-web';

const { DISPLAY_NOTIFICATION, REMOVE_NOTIFICATION } = globalEventNames;

Chart.register(ArcElement, DoughnutController, Legend, Title, Tooltip);

const GAME_MODES = {
  NOOB: {
    name: 'noob',
    endAnimationDuration: 5000,
    config: {
      columns: 5,
      rows: 5,
      bombs: 2,
    },
  },
  EASY: {
    name: 'easy',
    endAnimationDuration: 10000,
    config: {
      columns: 9,
      rows: 9,
      bombs: 10,
    },
  },
  NORMAL: {
    name: 'normal',
    endAnimationDuration: 15000,
    config: {
      columns: 16,
      rows: 16,
      bombs: 40,
    },
  },
  HARD: {
    name: 'hard',
    endAnimationDuration: 20000,
    config: {
      columns: 30,
      rows: 16,
      bombs: 99,
    },
  },
  EXTREME: {
    name: 'extreme',
    endAnimationDuration: 30000,
    config: {
      columns: 30,
      rows: 30,
      bombs: 300,
    },
  },
};

export default {
  name: 'MinesweeperWrapper',
  data: () => ({
    isEnded: true,
    /** @type {Fireworks} */
    fireworks: null,
    endAnimationTimeoutId: null,
    currentGameModeName: GAME_MODES.EASY.name,
    games: [],
    maxScoreboardGamesVisible: 10,
    gamesHistoryChart: null,
    notificationId: 'minesweeper-notification',
    sortGamesByDuration: true,
  }),
  computed: {
    isStopwatchRunning() {
      try {
        return this.$refs.stopwatch.isRunning;
      } catch (error) {
        return false;
      }
    },
    currentGameModeGames() {
      return filter(this.games, { gamemode: this.currentGameModeName });
    },
    currentGameModeScoreboardEntries() {
      const games = map(filter(this.currentGameModeGames, 'gameIsWon'), (game, index) => ({
        rank: index + 1,
        ...game,
      }));

      return this.sortGamesByDuration ? games : reverse(sortBy(games, 'gameCompletionTimestamp'));
    },
    currentGameModeAverageDuration() {
      return meanBy(this.currentGameModeScoreboardEntries, 'gameDuration');
    },
    gameModesSelectionOptions() {
      return map(GAME_MODES, ({ name, config: { columns, rows, bombs } }) => ({
        value: lowerCase(name),
        selected: this.currentGameModeName === name,
        text: `${capitalize(name)} - ${rows}x${columns} / ${bombs} Mines`,
      }));
    },
  },
  watch: {
    currentGameModeGames() {
      if (this.currentGameModeGames.length && this.$refs['game-history-chart']) {
        const wonGames = size(filter(this.currentGameModeGames, 'gameIsWon'));
        const lostGames = size(this.currentGameModeGames) - wonGames;

        if (this.gamesHistoryChart) {
          this.gamesHistoryChart.data.datasets[0].data = [wonGames, lostGames];
          this.gamesHistoryChart.options.plugins.title.text = `${size(
            this.currentGameModeGames
          )} game(s) played in total`;
          this.gamesHistoryChart.update();
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
                  text: `${size(this.currentGameModeGames)} game(s) played in total`,
                  display: true,
                  position: 'bottom',
                },
              },
            },
          };

          this.gamesHistoryChart = new Chart(this.$refs['game-history-chart'], config);
        }
      }
    },
  },
  mounted() {
    const gameModeConfiguration = this.getGameModeConfiguration();
    this.$refs.minesweeper.setGameModeConfiguration(gameModeConfiguration);

    this.fireworks = new Fireworks(this.$refs.firework, {
      acceleration: 1.01,
    });

    liveQuery(() => db.games.toArray()).subscribe((games) => {
      this.games = sortBy(games, 'gameDuration');
    });
  },
  methods: {
    timestampToDateString,
    getCurrentGameMode() {
      return find(GAME_MODES, { name: this.currentGameModeName });
    },
    getGameModeConfiguration() {
      return this.getCurrentGameMode().config;
    },
    onChangedGameMode(e) {
      e.preventDefault();
      const gameModeConfiguration = this.getGameModeConfiguration();
      this.$refs.minesweeper.setGameModeConfiguration(gameModeConfiguration);
      this.restartGame();
    },
    onGameWon() {
      this.isEnded = true;
      this.$refs.stopwatch.stop();
      this.fireworks.start();

      this.$nuxt.$emit(DISPLAY_NOTIFICATION, {
        id: this.notificationId,
        body: `Congratulations, you have won!`,
        options: {
          delay: 6000,
        },
      });

      this.addDbEntry(true);

      this.endAnimationTimeoutId = window.setTimeout(() => {
        this.fireworks.stop();
      }, this.getCurrentGameMode().endAnimationDuration);
    },
    onGameLost() {
      this.isEnded = true;
      this.$refs.stopwatch.stop();
      this.$refs.rain.start();

      this.$nuxt.$emit(DISPLAY_NOTIFICATION, {
        id: this.notificationId,
        body: `Unfortunately, you lost this round of Minesweeper. Just try again!`,
        options: {
          delay: 6000,
        },
      });

      this.addDbEntry(false);

      this.endAnimationTimeoutId = window.setTimeout(() => {
        this.$refs.rain.clear();
      }, this.getCurrentGameMode().endAnimationDuration);
    },
    clickedRestart() {
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
      this.$refs.minesweeper.restartGame();
    },
    handleMinesweeperClick() {
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
    resetGameHistory() {
      db.games.clear();
    },
    removeScoreboardEntry(gameId) {
      db.games.delete(gameId);
    },
    addDbEntry(isWon) {
      db.games.add({
        gamemode: this.currentGameModeName,
        gameDuration: this.$refs.stopwatch.elapsedTime,
        gameCompletionTimestamp: Date.now(),
        gameIsWon: isWon,
      });
    },
  },
};
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
