import VuexPersistence from 'vuex-persist';

const modulesToPersist = ['settings', '2048'];

export default ({ store }) => {
  new VuexPersistence({
    storage: window.localStorage,
    reducer: (state) => {
      return Object.fromEntries(modulesToPersist.map((module) => [module, state[module]]));
    },
  }).plugin(store);
};
