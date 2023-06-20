<script setup>
import { ref } from "vue"
import { vAutofocus } from "@directives/vAutofocus.js"

const textareaRef = ref(null)

// Props
const props = defineProps({
  modelValue: {
    required: true,
    type: String,
  },
  placeholder: {
    type: String,
  },
  bgColor: {
    type: String,
    default: "bg-blue-100",
  },
  label: {
    type: String,
    default: "Note content",
  },
  maxChars: {
    type: Number,
    default: 1000,
  },
})

// Emit
const emit = defineEmits(["update:modelValue"])

// Event
const focusInput = () => {
  textareaRef.value.focus()
}

defineExpose({ focusInput })
</script>

<template>
  <form
    class="flex flex-col gap-4 col-span-2 border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
    :class="bgColor"
  >
    <label v-if="label" class="dark:text-gray-400 text-lg">
      {{ label }}
    </label>
    <textarea
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      ref="textareaRef"
      class="textarea"
      rows="3"
      :placeholder="placeholder"
      :maxlength="maxChars"
      v-autofocus
    ></textarea>

    <div class="flex gap-2 w-fit ml-auto">
      <slot name="buttons" />
    </div>
  </form>
</template>
