<template>
  <div ref="minesweeper-wrapper" class="minesweeper-wrapper">
    <div v-if="isInFullscreen" class="h1 display-1 text-center">Minesweeper</div>

    <div class="row my-3 text-center gy-2 justify-content-center">
      <div class="col-12 col-sm-8 col-md-5 col-lg-4 col-xl-3">
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
      </div>
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

    <div v-if="isCustomGameMode" class="hstack gap-3 justify-content-center">
      <div>
        <label for="custom-rows" class="form-label">Rows</label>
        <input
          id="custom-rows"
          v-model="customRows"
          type="range"
          class="form-range"
          min="1"
          max="100"
          step="1"
        />
      </div>
      <div>
        <label for="custom-columns" class="form-label">Columns</label>
        <input
          id="custom-columns"
          v-model="customColumns"
          type="range"
          class="form-range"
          min="1"
          max="100"
          step="1"
        />
      </div>
      <div>
        <label for="custom-bombs" class="form-label">Bombs</label>
        <input
          id="custom-bombs"
          v-model="customBombs"
          type="range"
          class="form-range"
          min="1"
          :max="customColumns * customRows"
          step="1"
        />
      </div>
    </div>

    <div class="my-3 row">
      <div class="col-6 d-flex align-items-center justify-content-end">
        <ShakeElement ref="bomb-counter-shake-wrapper">
          <span class="badge rounded-pill bg-danger"
            ><span id="bomb-counter"></span> Mines left</span
          >
        </ShakeElement>
      </div>
      <div class="col-6 d-flex gap-1 align-items-center justify-content-start">
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

    <div class="d-flex justify-content-center my-3 position-relative mw-100">
      <minesweeper-game
        id="minesweeper"
        ref="minesweeper"
        class="d-inline-block"
        bomb-counter-selector="#bomb-counter"
        :flag-placement-mode="flagPlacementMode"
        @minesweeper:field-interaction="handleMinesweeperInteraction"
        @minesweeper:field-click="handleMinesweeperClick"
        @minesweeper:field-long-press="handleMinesweeperClick"
        @minesweeper:game-won="onGameWon"
        @minesweeper:game-lost="onGameLost"
      ></minesweeper-game>
      <div v-if="!isEnded && !isStopwatchRunning" class="overlay">
        <button class="btn btn-link btn-icon btn-lg" type="button" @click="toggleStopWatch">
          <i class="bi bi-play-circle-fill"></i>
        </button>
      </div>
    </div>

    <div class="d-flex justify-content-center align-items-center my-3 gap-3">
      <div class="d-flex justify-content-center align-items-center gap-2">
        <div class="form-check form-switch">
          <input
            id="flagPlacementMode"
            v-model="flagPlacementMode"
            class="form-check-input"
            type="checkbox"
            role="switch"
          />
          <label class="form-check-label" for="flagPlacementMode">Place flags</label>
        </div>
        <button
          class="btn btn-link btn-icon btn-lg"
          type="button"
          title="Show further information about flag placement"
          data-bs-toggle="collapse"
          data-bs-target="#flagPlacementInfo"
          aria-expanded="false"
          aria-controls="flagPlacementInfo"
        >
          <i class="bi bi-info-circle-fill"></i>
        </button>
      </div>
      <div class="vr d-none d-sm-inline-block"></div>
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
    </div>

    <div id="flagPlacementInfo" class="collapse my-3">
      <div class="alert alert-info" role="alert">
        <h4 class="alert-heading">Information: Flags</h4>
        <p>
          Flags are there to indicate an underlying bomb. Therefore, fields with flags cannot be
          clicked to uncover the field.
          <strong
            >The maximum number of flags that can be placed is the number of bombs hidden.</strong
          >
        </p>
        <hr />
        <p>
          In addition to activating the flag placement mode, there are different ways to place flags
          (and question marks) depending on your device type:
        </p>
        <ul class="mb-0">
          <li>Long press a field (>0.5 sec)</li>
          <li v-if="$device.isWindows && !$device.isMobile">
            Hold
            <kbd>Ctrl</kbd>
            or
            <kbd>Alt</kbd>
            while clicking on a field
          </li>
          <li v-if="$device.isMacOS && !$device.isMobile && !$device.isTablet">
            Hold
            <kbd>Cmd <i class="bi bi-command"></i></kbd>
            or
            <kbd>Opt <i class="bi bi-option"></i></kbd>
            while clicking on a field
          </li>
        </ul>
      </div>
    </div>

    <section v-show="currentGameModeScoreboardEntries.length > 0 && !isCustomGameMode">
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
                <th scope="col">Duration</th>
                <th scope="col">Completion date</th>
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
import {
  capitalize,
  filter,
  find,
  lowerCase,
  map,
  meanBy,
  reverse,
  size,
  sortBy,
  toNumber,
} from 'lodash-es';
import { Fireworks } from 'fireworks-js';
import { liveQuery } from 'dexie';
import { Chart, ArcElement, DoughnutController, Legend, Title, Tooltip } from 'chart.js';
import 'minesweeper-for-web';
import { ActionType, FieldInteractionType } from 'minesweeper-for-web/lib-esm/src';
import { database } from '@/middleware/database.js';
import { timestampToDateString } from '@/util/index.js';
import globalEventNames from '@/util/global-event-names.js';

const { DISPLAY_NOTIFICATION, REMOVE_NOTIFICATION } = globalEventNames;

Chart.register(ArcElement, DoughnutController, Legend, Title, Tooltip);

const GAME_MODES = {
  NOOB: {
    name: 'noob',
    config: {
      columns: 5,
      rows: 5,
      bombs: 2,
    },
  },
  EASY: {
    name: 'easy',
    config: {
      columns: 9,
      rows: 9,
      bombs: 10,
    },
  },
  NORMAL: {
    name: 'normal',
    config: {
      columns: 16,
      rows: 16,
      bombs: 40,
    },
  },
  HARD: {
    name: 'hard',
    config: {
      columns: 30,
      rows: 16,
      bombs: 99,
    },
  },
  EXTREME: {
    name: 'extreme',
    config: {
      columns: 30,
      rows: 30,
      bombs: 200,
    },
  },
};

const customGameModeName = 'custom';

// in ms
const minimumAnimationDuration = 2000;

export default {
  name: 'MinesweeperWrapper',
  data: () => ({
    isEnded: true,
    /** @type {Fireworks} */
    fireworks: undefined,
    endAnimationTimeoutId: undefined,
    currentGameModeName: GAME_MODES.EASY.name,
    games: [],
    maxScoreboardGamesVisible: 10,
    gamesHistoryChart: undefined,
    notificationId: 'minesweeper-notification',
    sortGamesByDuration: true,
    flagPlacementMode: false,
    isInFullscreen: false,
    customRows: 20,
    customColumns: 20,
    customBombs: 50,
  }),
  computed: {
    isStopwatchRunning() {
      try {
        return this.$refs.stopwatch.isRunning;
      } catch {
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
    gameModes() {
      return {
        ...GAME_MODES,
        CUSTOM: {
          name: customGameModeName,
          config: {
            columns: toNumber(this.customColumns),
            rows: toNumber(this.customRows),
            bombs: toNumber(this.customBombs),
          },
        },
      };
    },
    gameModesSelectionOptions() {
      return map(this.gameModes, ({ name, config: { columns, rows, bombs } }) => ({
        value: lowerCase(name),
        selected: this.currentGameModeName === name,
        text: `${capitalize(name)} - ${rows}x${columns} / ${bombs} Mines`,
      }));
    },
    fullscreenTargetElement() {
      return this.$refs['minesweeper-wrapper'];
    },
    currentGameMode() {
      return find(this.gameModes, { name: this.currentGameModeName });
    },
    isCustomGameMode() {
      return this.currentGameModeName === customGameModeName;
    },
  },
  watch: {
    currentGameModeGames() {
      if (this.currentGameModeGames.length > 0 && this.$refs['game-history-chart']) {
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
              labels: [' Won', ' Lost'],
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
    const gameModeConfiguration = this.currentGameMode.config;
    this.$refs.minesweeper.setGameModeConfiguration(gameModeConfiguration);

    this.fireworks = new Fireworks(this.$refs.firework, {
      acceleration: 1.01,
    });

    liveQuery(() => database.games.toArray()).subscribe((games) => {
      this.games = sortBy(games, 'gameDuration');
    });

    this.fullscreenTargetElement.addEventListener('fullscreenchange', () => {
      this.isInFullscreen = document.fullscreenElement;
    });

    // TODO: on navigation access if the user is sure, while the game is running
  },
  methods: {
    timestampToDateString,
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
    onChangedGameMode(event) {
      event.preventDefault();
      this.restartGame();
    },
    calculateAnimationDuration() {
      const { rows, columns, bombs } = this.currentGameMode.config;
      const fields = rows * columns;
      const bombsPerField = bombs / fields;
      const baseDuration = Math.round((fields / bombsPerField) * 10);
      return Math.max(baseDuration, minimumAnimationDuration);
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

      this.addDbEntry(true);

      this.endAnimationTimeoutId = window.setTimeout(() => {
        this.fireworks.stop();
      }, this.calculateAnimationDuration());
    },
    onGameLost() {
      this.isEnded = true;
      this.$refs.stopwatch.stop();
      this.$refs.rain.start();

      this.$nuxt.$emit(DISPLAY_NOTIFICATION, {
        id: this.notificationId,
        body: `Unfortunately, you lost this round of Minesweeper. Just try again!`,
        options: {
          delay: 5000,
        },
      });

      this.addDbEntry(false);

      this.endAnimationTimeoutId = window.setTimeout(() => {
        this.$refs.rain.clear();
      }, this.calculateAnimationDuration());
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

      const gameModeConfiguration = this.currentGameMode.config;
      this.$refs.minesweeper.setGameModeConfiguration(gameModeConfiguration);
      this.$refs.minesweeper.restartGame();
    },
    handleMinesweeperClick() {
      this.startGame();
    },
    /**
     * @param {import('minesweeper-for-web/lib-esm/src').FieldInteractionEvent} event
     */
    handleMinesweeperInteraction(event) {
      const { interaction } = event.detail;
      if (
        interaction.type === FieldInteractionType.FlagAction &&
        interaction.action === ActionType.NoChange
      ) {
        this.$refs['bomb-counter-shake-wrapper'].shake();
      }
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
    resetGameHistory() {
      database.games.clear();
    },
    removeScoreboardEntry(gameId) {
      database.games.delete(gameId);
    },
    addDbEntry(isWon) {
      database.games.add({
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

.minesweeper-wrapper {
  &:fullscreen {
    padding: map-get($spacers, 2);
    overflow-y: auto;
    overflow-x: hidden;
    max-width: 100vw;
    background-color: rgb(var(--bs-light-rgb));
  }
}

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
