const users = {
  state: () => ({
    users: [
      {
        id: 1,
        name: 'Aleksey',
        phone: '8(800)555-55-55',
        city: 'Volzsky',
      },
      {
        id: 2,
        name: 'Pavel',
        phone: '8(800)555-66-66',
        city: 'Volgograd',
      },
      {
        id: 3,
        name: 'Ivan',
        phone: '8(800)444-77-77',
        city: 'Moscow',
      },
    ]
  }),
  mutations: {
    removeUser(state, payload) {
      state.users = state.users.filter(user => user.id !== payload);
    },
    addUser(state, payload) {
      state.users.push(payload);
    },
    editUser(state, payload) {
      const userIndex = state.users.findIndex(user => user.id === payload.id);
      state.users[userIndex] = {...payload};
    }
  },
  actions: {
    removeUser({commit}, id) {
      commit('removeUser', id);
    },
    addUser({commit}, payload) {
      const user = {
        ...payload,
        id: Date.now()
      }
      commit('addUser', user);
    },
    editUser({commit}, user) {
      commit('editUser', user);
    }
  },
  getters: {
    getUsers (state) {
      return state.users
    },
    getUserByID(state) {
      return (id) => state.users.find(user => user.id === id);
    }
  }
}
export default users;
