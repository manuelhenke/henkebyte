import VuexPersistence from 'vuex-persist';

const modulesToPersist = ['settings'];

export default ({ store }) => {
  new VuexPersistence({
    storage: window.localStorage,
    reducer: (state) => {
      return Object.fromEntries(modulesToPersist.map((module) => [module, state[module]]));
    },
  }).plugin(store);
};
