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

const notesRef = (id) => doc(db, "notes", id)
const notesQuery = query(collection(db, "notes"), orderBy("createdAt", "desc"))

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
    async getNotes() {
      // Note: For reference later
      // const querySnapshot = await getDocs(collection(db, "notes"))
      // querySnapshot.forEach((doc) => {
      //   this.notes.push({
      //     id: doc.id,
      //     content: doc.data().content,
      //   })
      // })

      onSnapshot(notesQuery, (querySnapshot) => {
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

      const id = crypto.randomUUID()
      const content = inputVal

      await setDoc(notesRef(id), {
        content,
        createdAt: new Date().getTime().toString(),
      })
    },
    async deleteNote(id) {
      await deleteDoc(notesRef(id))
    },
    async editNote(id, content) {
      await updateDoc(notesRef(id), {
        content,
        createdAt: new Date().getTime().toString(),
      })
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStoreNotes, import.meta.hot))
}
