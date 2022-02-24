<template>
  <PageTemplate new-badge>
    <template v-slot:title>Minesweeper</template>
    <template v-slot:lead>
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
    </template>

    <div class="d-grid gap-2 col-12 col-md-6 col-lg-4 mx-auto my-3 text-center">
      <select class="form-select text-center" name="gamemode" ref="gamemode">
        <option value="easy" selected>Easy - 9x9 / 10 Mines</option>
        <option value="normal">Normal - 16x16 / 40 Mines</option>
        <option value="hard">Hard - 16x30 / 99 Mines</option>
        <!-- <option value="custom">Custom</option> -->
      </select>
      <button
        class="btn btn-outline-primary"
        type="button"
        id="show-btn"
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

    <div
      ref="windows-info"
      class="alert alert-primary d-flex align-items-center d-none"
      role="alert"
      hidden
    >
      <i class="bi bi-info-circle-fill flex-shrink-0 me-2"></i>
      <div>
        To place a flag just hold <kbd>Ctrl</kbd> or <kbd>Alt</kbd> while
        clicking on a field.
      </div>
    </div>

    <div
      ref="mac-info"
      class="alert alert-primary d-flex align-items-center d-none"
      role="alert"
      hidden
    >
      <i class="bi bi-info-circle-fill flex-shrink-0 me-2"></i>
      <div>
        To place a flag just hold
        <kbd>Cmd <i class="bi bi-command"></i></kbd> or
        <kbd>Opt <i class="bi bi-option"></i></kbd> while clicking on a field.
      </div>
    </div>

    <div
      ref="mobile-info"
      class="alert alert-primary d-flex align-items-center d-none"
      role="alert"
      hidden
    >
      <i class="bi bi-info-circle-fill flex-shrink-0 me-2"></i>
      <div>Just hold a field to place a flag.</div>
    </div>

    <div
      class="modal fade"
      id="restart-modal"
      tabindex="-1"
      aria-labelledby="restartModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="restartModalLabel">Restart the game</h5>
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
    <div class="firework-container" ref="firework"></div>
  </PageTemplate>
</template>

<script>
import PageTemplate from "@/pages/PageTemplate.vue";
import StopWatch from "@/components/StopWatch.vue";
import Platform from "platform-detect";
import { Fireworks } from "fireworks-js";

import "minesweeper-for-web";
//import { Modal } from 'bootstrap'

export default {
  name: "Minesweeper",
  components: {
    PageTemplate,
    StopWatch,
  },
  data: () => ({
    isEnded: false,
    /** @type {Fireworks} */
    fireworks: null,
  }),
  mounted() {
    function getGameModeConfiguration(currentGameMode) {
      switch (currentGameMode) {
        case "hard":
          return {
            columns: 30,
            rows: 16,
            bombs: 99,
          };
        case "normal":
          return {
            columns: 16,
            rows: 16,
            bombs: 40,
          };
        case "easy":
        default:
          return {
            columns: 9,
            rows: 9,
            bombs: 10,
          };
      }
    }

    this.$refs["gamemode"].addEventListener("change", (e) => {
      e.preventDefault();

      const gameModeConfiguration = getGameModeConfiguration(e.target.value);
      this.$refs["minesweeper"].setGameModeConfiguration(gameModeConfiguration);
    });

    this.$refs["minesweeper"].addEventListener("game-won", () => {
      this.isEnded = true;
      this.$refs["stopwatch"].stop();
      this.fireworks.start();
      window.setTimeout(() => {
        this.fireworks.stop();
      }, 10000);
    });

    this.$refs["minesweeper"].addEventListener("game-lost", () => {
      this.isEnded = true;
      this.$refs["stopwatch"].stop();
      console.log("lose");
    });

    if (Platform.mouse) {
      if (Platform.macos) {
        this.$refs["mac-info"].classList.remove("d-none");
      } else {
        this.$refs["windows-info"].classList.remove("d-none");
      }
    }

    if (Platform.touch) {
      this.$refs["mobile-info"].classList.remove("d-none");
    }

    this.fireworks = new Fireworks(this.$refs["firework"], {
      particles: 200,
      explosion: 10,
    });
  },
  methods: {
    clickedRestart() {
      if (this.isEnded) {
        this.restartGame();
      }
    },
    restartGame() {
      this.fireworks.stop();
      this.$refs["stopwatch"].reset();
      this.$refs["minesweeper"].restartGame();
      this.isEnded = false;
    },
    handleMinesweeperClick() {
      if (!this.$refs["stopwatch"].isRunning && !this.isEnded) {
        this.$refs["stopwatch"].start();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 768px) {
  #minesweeper {
    border-width: 4px;
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
