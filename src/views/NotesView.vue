<script setup>
import Note from "@components/Note.vue"
import InputNote from "@components/InputNote.vue"
import { ref } from "vue"
import { useStoreNotes } from "@stores/storeNotes.js"

const newNoteInput = ref(""),
  inputNoteRef = ref(null)

// Store
const storeNotes = useStoreNotes()

// Event
const addNewNote = () => {
  storeNotes.addNewNote(newNoteInput.value)

  newNoteInput.value = ""
  inputNoteRef.value.focusInput()
}
</script>

<template>
  <InputNote
    placeholder="Add a new note!"
    ref="inputNoteRef"
    label="Add a new note!"
    v-model="newNoteInput"
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

  <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
</template>
