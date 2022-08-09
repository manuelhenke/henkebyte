import { defaultsDeep, uniqueId } from 'lodash-es';

/* eslint-disable no-shadow */
export const state = () => ({
  latest: null,
});

export const mutations = {
  addElement(state, toast) {
    state.latest = toast;
  },
};

export const actions = {
  addElement({ commit }, toast) {
    commit(
      'addElement',
      defaultsDeep(toast, {
        id: uniqueId(),
        author: 'HenkeByte',
        date: 'just now',
        icon: {
          src: '/icon.png',
          alt: 'Icon of HenkeByte',
        },
        options: {
          delay: 3000,
          autohide: true,
          animation: true,
        },
      })
    );
  },
};

export const getters = {
  getLatest(state) {
    return state.latest;
  },
};
