
import firebase from "@/plugins/firebase";

export const state = () => ({
  idToken: null,
})

export const getters = {
  getIdToken: (state) => state.idToken,
  authenticated: (state) => state.idToken !== null
}

export const mutations = {
  saveIdToken(state, idToken) {
    this.$cookies.set('idToken', idToken)
    state.idToken = idToken
  },
  setIdToken(state, idToken) {
    state.idToken = idToken
  }
}

export const actions = {
  nuxtServerInit({ commit }) {
    const idToken = this.app.$cookies.get('idToken')
    if (idToken) {
      commit('setIdToken', idToken)
    }
  },
  nuxtClientInit({ commit }) {
  },
  signUp({ commit }, payload) {
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then((response) => {
        commit('saveIdToken', response.credential.idToken)
      })
      .catch(error => {
        console.error(error)
      })
  },
  signIn({ commit }, payload) {
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then((response) => {
        commit('saveIdToken', response.credential.idToken)
      })
      .catch(error => {
        console.error(error)
      })
  },
  signInWithPopup({ commit }, provider) {
    firebase.auth().signInWithPopup(provider)
      .then((response) => {
        commit('saveIdToken', response.credential.idToken)
      }).catch(error => {
        console.error(error)
      })
  },
  googleAuth({ dispatch }) {
    const provider = new firebase.auth.GoogleAuthProvider()
    dispatch('signInWithPopup', provider)
  },
  twitterAuth({ dispatch }) {
    const provider = new firebase.auth.TwitterAuthProvider()
    dispatch('signInWithPopup', provider)
  },
  facebookAuth({ dispatch }) {
    const provider = new firebase.auth.FacebookAuthProvider()
    dispatch('signInWithPopup', provider)
  }
}
