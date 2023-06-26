<script setup>
import Modal from "@components/Modal.vue"
import { computed, reactive } from "@vue/reactivity"
import { useStoreNotes } from "@stores/storeNotes"

const modalData = reactive({
  deleteModalStatus: false,
})

// Props
const props = defineProps({
  note: {
    required: true,
    type: Object,
  },
})

// Emit
const emit = defineEmits(["deleteNote"])

// Store
const storeNotes = useStoreNotes()

// Computed
const charactersLength = computed(() => {
  const charLength = props.note.content.length

  return charLength > 1 ? `${charLength} characters` : `${charLength} character`
})

const createdAt = computed(() => {
  const timestamp = props.note.createdAt
  const locale = navigator.language
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "2-digit",
    month: "numeric",
    year: "numeric",
  }

  return new Intl.DateTimeFormat(locale, options).format(timestamp)
})
</script>

<template>
  <div
    class="flex flex-col bg-white border shadow-sm rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
  >
    <div class="p-4 md:p-5 dark:text-white">
      <p>
        {{ note.content }}
      </p>

      <span
        class="block text-right mt-2 text-gray-500 dark:text-gray-300 space-x-1"
      >
        <small> {{ createdAt }}, </small>

        <small>
          {{ charactersLength }}
        </small>
      </span>
    </div>

    <div
      class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:px-5 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="flex gap-2 w-full rounded-md shadow-sm">
        <RouterLink
          :to="`/editNote/${note.id}`"
          type="button"
          class="btn__warning"
          >Edit</RouterLink
        >

        <button
          @click="modalData.deleteModalStatus = true"
          type="button"
          class="btn__danger"
        >
          Delete
        </button>

        <Modal
          v-if="modalData.deleteModalStatus"
          v-model="modalData.deleteModalStatus"
        >
          <template #title>
            <h3 class="font-bold text-gray-800 dark:text-white">Delete Note</h3>
          </template>

          <template #content>
            <p class="mt-1 text-gray-800 dark:text-gray-400">
              Are you sure to delete this note?
            </p>
          </template>

          <template #actionBtn>
            <button
              @click="storeNotes.deleteNote(note.id)"
              class="hs-dropup-toggle btn__danger w-fit"
            >
              Delete
            </button>
          </template>
        </Modal>
      </div>
    </div>
  </div>
</template>
