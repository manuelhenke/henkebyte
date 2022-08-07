import VuexPersistence from 'vuex-persist';

const modulesToPersist = ['settings'];

export default ({ store }) => {
  new VuexPersistence({
    storage: window.localStorage,
    reducer: (state) => {
      const stateToSave = {};
      modulesToPersist.forEach((module) => {
        stateToSave[module] = state[module];
      });
      return stateToSave;
    },
  }).plugin(store);
};
