<script setup>
import Note from "@components/Note.vue"
import { ref } from "vue"

const newNoteInput = ref(""),
  newNoteInputRef = ref(null)

const notes = ref([
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
])

const addNewNote = () => {
  if (!newNoteInput.value) return

  notes.value.unshift({
    id: crypto.randomUUID(),
    content: newNoteInput.value,
  })

  newNoteInput.value = ""
  newNoteInputRef.value.focus()
}

const handleDeleteNote = (id) => {
  notes.value = notes.value.filter((note) => note.id !== id)
}
</script>

<template>
  <form
    class="flex flex-col gap-4 col-span-2 bg-blue-100 border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
  >
    <label class="dark:text-gray-400 text-lg"> Note Content </label>
    <textarea
      class="textarea"
      rows="3"
      placeholder="Add a new note"
      v-model="newNoteInput"
      ref="newNoteInputRef"
    ></textarea>

    <button
      @click.prevent="addNewNote"
      :disabled="!newNoteInput"
      :class="{ 'cursor-not-allowed': !newNoteInput }"
      type="submit"
      class="btn__primary"
    >
      Add New Note
    </button>
  </form>

  <Note
    v-for="note in notes"
    :key="note.id"
    :note="note"
    @delete-note="handleDeleteNote"
  />
</template>
