<script setup>
import Note from "@components/Note.vue"
import InputNote from "@components/InputNote.vue"
import { onMounted, ref } from "vue"
import { useStoreNotes } from "@stores/storeNotes.js"
import { useWatchCharacters } from "@use/useWatchCharacters.js"
import { MAX_CHARS_NOTE } from "@config/config.js"
import NoteLoading from "@components/NoteLoading.vue"

const newNoteInput = ref(""),
  inputNoteRef = ref(null)

// Lifecycle
onMounted(() => {
  storeNotes.getNotes()
})

// Store
const storeNotes = useStoreNotes()

// Event
const addNewNote = () => {
  storeNotes.addNewNote(newNoteInput.value)

  newNoteInput.value = ""
  inputNoteRef.value.focusInput()
}

// Watch
useWatchCharacters(newNoteInput, MAX_CHARS_NOTE)
</script>

<template>
  <InputNote
    placeholder="Add a new note!"
    ref="inputNoteRef"
    label="Add a new note!"
    v-model="newNoteInput"
    :max-chars="MAX_CHARS_NOTE"
  >
    <template #buttons>
      <button
        @click.prevent="addNewNote"
        :disabled="!newNoteInput"
        :class="{ 'cursor-not-allowed': !newNoteInput }"
        type="submit"
        class="btn__primary"
      >
        Add New Note
      </button>
    </template>
  </InputNote>

  <template v-if="storeNotes.isLoading">
    <NoteLoading v-for="i in 4" />
  </template>

  <template v-else>
    <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />

    <div
      v-if="!storeNotes.notes.length"
      class="bg-blue-500 text-sm text-white rounded-md p-4 col-span-2"
      role="alert"
    >
      <span class="font-bold block">No notes available...</span>
    </div>
  </template>
</template>
