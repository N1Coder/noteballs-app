import { defineStore, acceptHMRUpdate } from "pinia"
import { db } from "@config/firebase.js"
import {
  collection,
  onSnapshot,
  setDoc,
  deleteDoc,
  doc,
  updateDoc,
  query,
  orderBy,
} from "firebase/firestore"
import { useStoreUser } from "@stores/storeUser"

const notesDocRef = (id, userId) => doc(db, "users", userId, "notes", id)

let notesCollectionRef
let notesQuery
let getNotesSnapshot

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [],
      isLoading: true,
    }
  },
  getters: {
    getNoteContent: (state) => {
      const notes = state.notes

      return (id) => notes.filter((note) => note.id === id)
    },
    getTotalNotes: (state) => {
      return state.notes.length
    },
    getTotalCharacters: (state) => {
      let countChars = 0

      state.notes.forEach((note) => {
        countChars += note.content.length
      })

      return countChars
    },
  },
  actions: {
    async init() {
      const storeUser = useStoreUser()
      const userId = storeUser.user.uid

      notesCollectionRef = collection(db, "users", userId, "notes")
      notesQuery = query(notesCollectionRef, orderBy("createdAt", "desc"))

      await this.getNotes()
    },
    async getNotes() {
      // Note: For reference later
      // const querySnapshot = await getDocs(collection(db, "notes"))
      // querySnapshot.forEach((doc) => {
      //   this.notes.push({
      //     id: doc.id,
      //     content: doc.data().content,
      //   })
      // })

      getNotesSnapshot = onSnapshot(notesQuery, (querySnapshot) => {
        this.notes = []

        querySnapshot.forEach((doc) => {
          this.notes.push({
            id: doc.id,
            content: doc.data().content,
            createdAt: doc.data().createdAt,
          })
        })

        this.isLoading = false
      })
    },
    async addNewNote(inputVal) {
      if (!inputVal) return

      const storeUser = useStoreUser()
      const userId = storeUser.user.uid
      const id = crypto.randomUUID()
      const content = inputVal

      await setDoc(notesDocRef(id, userId), {
        content,
        createdAt: new Date().getTime().toString(),
      })
    },
    async deleteNote(id) {
      const storeUser = useStoreUser()
      const userId = storeUser.user.uid

      await deleteDoc(notesDocRef(id, userId))
    },
    async editNote(id, content) {
      const storeUser = useStoreUser()
      const userId = storeUser.user.uid

      await updateDoc(notesDocRef(id, userId), {
        content,
        createdAt: new Date().getTime().toString(),
      })
    },
    clearNotes() {
      this.notes = []
      if (getNotesSnapshot) getNotesSnapshot() // unsubscribe from active snapshot listener
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStoreNotes, import.meta.hot))
}
