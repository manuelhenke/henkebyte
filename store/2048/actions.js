export default {
  saveGameState({ commit, dispatch }, gameState) {
    commit('setGameState', gameState);
    dispatch('updateBestScore', gameState.score);
  },
  clearGameState({ commit }) {
    commit('setGameState', {});
  },
  updateBestScore({ commit, getters }, score) {
    if (score > getters.getBestScore) {
      commit('setBestScore', score);
    }
  },
};
