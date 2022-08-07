export default {
  enablePreferGrid({ commit }) {
    commit('setPreferGrid', true);
  },
  disablePreferGrid({ commit }) {
    commit('setPreferGrid', false);
  },
};
