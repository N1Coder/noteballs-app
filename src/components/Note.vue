<script setup>
import { computed } from "@vue/reactivity"

const props = defineProps({
  note: {
    required: true,
    type: Object,
  },
})

const emit = defineEmits(["deleteNote"])

const handleDeleteNote = () => {
  emit("deleteNote", props.note.id)
}

const charactersLength = computed(() => {
  const charLength = props.note.content.length

  return charLength > 1 ? `${charLength} characters` : `${charLength} character`
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

      <small class="block text-right mt-2 text-gray-300">
        {{ charactersLength }}
      </small>
    </div>

    <div
      class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:px-5 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="flex gap-2 w-full rounded-md shadow-sm">
        <button type="button" class="btn__warning">Edit</button>

        <button @click="handleDeleteNote" type="button" class="btn__danger">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>
