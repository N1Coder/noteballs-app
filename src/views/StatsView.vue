<script setup>
import { useStoreNotes } from "@stores/storeNotes"
import { vAutofocus } from "@directives/vAutofocus"
import { ref } from "vue"
import { useWatchCharacters } from "@use/useWatchCharacters"

const commentInput = ref("")

// Store
const storeNotes = useStoreNotes()

// Watch
useWatchCharacters(commentInput, 50)
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="-m-1.5 overflow-x-auto">
      <div class="p-1.5 min-w-full inline-block align-middle">
        <div class="border rounded-lg overflow-hidden dark:border-gray-700">
          <table
            class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
          >
            <thead class="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase dark:text-gray-400"
                >
                  Stat
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase dark:text-gray-400"
                >
                  Value
                </th>
              </tr>
            </thead>
            <tbody class="divide-y">
              <tr>
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-800 dark:text-gray-200"
                >
                  Number of Notes
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                >
                  {{ storeNotes.getTotalNotes }}
                </td>
              </tr>

              <tr>
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-800 dark:text-gray-200"
                >
                  Total Characters Combined
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                >
                  {{ storeNotes.getTotalCharacters }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <input
      type="text"
      class="py-2 px-3 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
      placeholder="Do you like Noteballs App?"
      v-model="commentInput"
      v-autofocus
      maxlength="50"
    />
  </div>
</template>
