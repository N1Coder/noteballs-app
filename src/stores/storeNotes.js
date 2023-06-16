import { defineStore, acceptHMRUpdate } from "pinia"

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content: `The death of something can become your greatest strength.`,
        },
        {
          id: "id2",
          content: `To be a leader, bring certainty, to an environment where there isn’t any.`,
        },
        {
          id: "id3",
          content: `Peace is the only battle worth waging`,
        },
      ],
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
    addNewNote(inputVal) {
      if (!inputVal) return

      this.notes.unshift({
        id: crypto.randomUUID(),
        content: inputVal,
      })
    },
    deleteNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id)
    },
    editNote(id, content) {
      const getId = this.notes.findIndex((note) => note.id === id)

      this.notes[getId].content = content
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStoreNotes, import.meta.hot))
}
