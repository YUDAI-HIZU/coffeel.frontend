export const state = () => ({
  drawer: false,
})

export const getters = ({
  drawer: state => state.drawer,
})

export const mutations = ({
  openDrawer(state) {
    state.drawer = true
  },
  closeDrawer(state) {
    state.drawer = false
  },
})

export const actions = ({
  openDrawer({ commit }) {
    commit('openDrawer')
  },
  closeDrawer({ commit }) {
    commit('openDrawer')
  }
})
