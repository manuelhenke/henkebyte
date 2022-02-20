<template>
    <div class="minesweeper-container">
        <b-button to="/" variant="primary" class="text-decoration-none">
            <b-icon icon="chevron-left" scale="1.5"></b-icon>
            <span class="button-text">Back</span>
        </b-button>
        <b-jumbotron>
            <template v-slot:header>Minesweeper</template>

            <template v-slot:lead>
                This is a example of the game, which is available at <a
                    href="https://github.com/manuelhenke/minesweeper-for-web">GitHub</a> or at <a
                    href="https://www.npmjs.com/package/minesweeper-for-web">npm</a>.
            </template>

            <hr class="my-4">

            <p>
                <b-form-select size="sm" name="gamemode" id="gamemode">
                    <b-form-select-option value="easy" selected>Easy - 9x9 / 10 Mines</b-form-select-option>
                    <b-form-select-option value="normal">Normal - 16x16 / 40 Mines</b-form-select-option>
                    <b-form-select-option value="hard">Hard - 16x30 / 99 Mines</b-form-select-option>
                    <!-- <b-form-select-option value="custom">Custom</b-form-select-option> -->
                </b-form-select>
                <span id="bombCounter"></span> Mines left.
            </p>

            <div class="minesweeper"></div>


            <b-btn block variant="outline-primary" id="show-btn" @click="showModal">Restart</b-btn>

            <b-modal ref="restart-modal" hide-footer title="Restart the game">
                <div class="d-block text-center">
                    <h3>Are you sure, that you want to restart the game?</h3>
                </div>
                <b-btn class="mt-3" variant="outline-primary" block @click="hideModal">Yes</b-btn>
            </b-modal>
        </b-jumbotron>
    </div>
</template>

<script>
    export default {
        name: "Minesweeper",
        data: () => ({
            "minesweeper": null,
            "isEnded": false
        }),
        mounted() {
            require('minesweeper-for-web');

            function getGamemodeConfiguration(currentGamemode) {
                switch (currentGamemode) {
                    case 'easy':
                        return {
                            columns: 9,
                            rows: 9,
                            bombs: 10
                        };
                    case 'normal':
                        return {
                            columns: 16,
                            rows: 16,
                            bombs: 40
                        };
                    case 'hard':
                        return {
                            columns: 30,
                            rows: 16,
                            bombs: 99
                        };
                }
            }

            const $gamemodeSelect = $('#gamemode');

            const gamemodeConfiguration = getGamemodeConfiguration($gamemodeSelect.val());

            const minesweeper = $('.minesweeper').minesweeper({
                // pls replace the path with your actual path to the icons
                'pathToIcons': '/icons/',
                'gamemodeConfiguration': gamemodeConfiguration,
                'bombCounterSelector': '#bombCounter',
                'onWinCallback': () => {
                    this.isEnded = true;
                },
                'onLoseCallback': () => {
                    this.isEnded = true;
                }
            });

            const updateIsEnded = () => this.isEnded = false;

            $gamemodeSelect.change(function (e) {
                e.preventDefault();

                const gamemodeConfiguration = getGamemodeConfiguration(this.value);
                minesweeper.createBoard(gamemodeConfiguration);
                updateIsEnded();
            });

            this.minesweeper = minesweeper;
        },
        methods: {
            showModal() {
                if (this.isEnded) {
                    this.restartGame();
                } else {
                    this.$refs['restart-modal'].show();
                }
            },
            hideModal() {
                this.restartGame();
                this.$refs['restart-modal'].hide();
            },
            restartGame() {
                this.minesweeper.restart();
                this.isEnded = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~minesweeper-for-web/dist/style.css";

    .minesweeper-container {
        max-width: 100%;
    }

    .minesweeper {
        margin: 30px 8px;
        display: flex;
        justify-content: center;
        overflow-x: scroll;
    }

</style>