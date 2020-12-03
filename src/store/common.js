const commmon = {
  state: () => ({
    modal: false,
  }),
  mutations: {
    setModal(state, payload) {
      state.modal = payload;
    }
  },
  actions: {
    setModal({commit}, status) {
      commit('setModal', status);
    }
  },
  getters: {
    getModal(state) {
      return state.modal;
    }
  }
}
export default commmon;