<script setup>
import { onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import { useStoreNotes } from "@stores/storeNotes.js"
import InputNote from "@components/InputNote.vue"

const editNoteInput = ref("")

// Router
const route = useRoute()
const router = useRouter()

// Store
const storeNotes = useStoreNotes()

// Event
const handleEditNote = () => {
  const id = route.params.id
  const editedContent = editNoteInput.value

  storeNotes.editNote(id, editedContent)

  router.push("/")
}

onMounted(() => {
  const id = route.params.id
  const [contentNote] = storeNotes.getNoteContent(id)

  if (!contentNote) router.push("/")

  editNoteInput.value = contentNote.content
})
</script>

<template>
  <InputNote
    :bg-color="'bg-violet-100'"
    placeholder="Edit note"
    label="Edit note"
    v-model="editNoteInput"
  >
    <template #buttons>
      <button @click="router.back()" type="button" class="btn__danger">
        Cancel
      </button>
      <button
        @click.prevent="handleEditNote"
        :disabled="!editNoteInput"
        :class="{ 'cursor-not-allowed': !editNoteInput }"
        type="submit"
        class="btn__secondary"
      >
        Save
      </button>
    </template>
  </InputNote>
</template>
