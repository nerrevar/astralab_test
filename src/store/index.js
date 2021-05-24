import Vue from 'vue'
import Vuex from 'vuex'

import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(Vuex)

const firebaseConfig = {
  apiKey: 'AIzaSyC4VT28fW5urLc3iRZmidKIPRF_Wkha7rw',
  authDomain: 'astralabtest.firebaseapp.com',
  projectId: 'astralabtest',
  storageBucket: 'astralabtest.appspot.com',
  messagingSenderId: '836632717701',
  appId: '1:836632717701:web:d11044d113209431cf7cec',
}

firebase.initializeApp(firebaseConfig)

export default new Vuex.Store({
  state: {
    firebaseApp: firebase.app(),
    user: { displayName: 'John Doe' },
  },
  getters: { getFirebaseApp: state => state.firebaseApp },
  mutations: { setUser: (state, payload) => state.user = payload.user },
  actions: {},
  modules: {},
})
