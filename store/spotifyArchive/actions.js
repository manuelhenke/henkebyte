export default {
  setTokens({ commit }, tokens) {
    commit('setAccessToken', tokens.accessToken);
    commit('setRefreshToken', tokens.refreshToken);
  },
  updateAccessToken({ commit }, accessToken) {
    commit('setAccessToken', accessToken);
  },
};
