import { defineStore, acceptHMRUpdate } from "pinia"
import { auth } from "@config/firebase.js"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"
import { useStoreNotes } from "@stores/storeNotes.js"

export const useStoreUser = defineStore("storeUser", {
  state: () => ({
    user: {},
  }),
  actions: {
    init() {
      const storeNotes = useStoreNotes()

      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid
          const email = user.email

          this.user.uid = uid
          this.user.email = email
          this.router.push("/")

          storeNotes.init()
        } else {
          this.user = {}
          this.router.push("/auth")
          storeNotes.clearNotes()
        }
      })
    },
    registerUser({ email, password }) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user
        })
        .catch(({ code, message }) => {
          alert(`Something went wrong (${code}): ${message}`)
        })
    },
    loginUser({ email, password }) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user
        })
        .catch(({ code, message }) => {
          alert(`Something went wrong (${code}): ${message}`)
        })
    },
    signOutUser() {
      signOut(auth)
        .then(() => {
          alert("You have been signed out!")
        })
        .catch(() => {
          alert("Something went wrong when trying to sign out")
        })
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStoreUser, import.meta.hot))
}
