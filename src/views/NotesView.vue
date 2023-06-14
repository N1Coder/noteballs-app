<template>
  <form
    class="flex flex-col gap-4 col-span-2 bg-blue-100 border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
  >
    <label class="dark:text-gray-400 text-lg"> Note Content </label>
    <textarea
      class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
      rows="3"
      placeholder="Add a new note"
    ></textarea>

    <button
      type="button"
      class="py-3 px-4 w-fit justify-center items-center self-end gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
    >
      Add New Note
    </button>
  </form>

  <div
    v-for="i in 3"
    class="flex flex-col bg-white border shadow-sm rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
  >
    <div class="p-4 md:p-5 dark:text-white">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, officia.
      Laudantium fuga adipisci atque pariatur consequuntur quo enim incidunt
      architecto accusamus unde nemo doloribus, sapiente magni odio, voluptate
      voluptas soluta!
    </div>
    <div
      class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:px-5 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="flex gap-2 w-full rounded-md shadow-sm">
        <button
          type="button"
          class="py-3 px-4 w-full justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-amber-500 text-white hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
        >
          Edit
        </button>

        <button
          type="button"
          class="py-3 px-4 w-full justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-rose-500 text-white hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>
