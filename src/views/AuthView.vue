<script setup>
import { reactive } from "vue"
import { useStoreUser } from "@stores/storeUser.js"

// store
const storeUser = useStoreUser()

// data credentials
const dataCredentials = reactive({
  email: "",
  password: "",
})

const onSubmit = (e) => {
  const submitterId = e.submitter.id

  if (!dataCredentials.email || !dataCredentials.password) {
    alert("Please enter an email and password!")

    return
  }

  switch (submitterId) {
    case "signin":
      storeUser.loginUser(dataCredentials)
      dataCredentials.email = dataCredentials.password = ""
      break

    case "signup":
      storeUser.registerUser(dataCredentials)
      dataCredentials.email = dataCredentials.password = ""
      break

    default:
      alert("Unknown status, Please try again!")
      break
  }
}
</script>

<template>
  <section class="col-span-2">
    <div class="border-b border-gray-200 dark:border-gray-700 w-fit mx-auto">
      <nav
        class="-mb-0.5 flex justify-center space-x-6"
        aria-label="Tabs"
        role="tablist"
      >
        <button
          type="button"
          class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 active"
          id="horizontal-alignment-item-1"
          data-hs-tab="#horizontal-alignment-1"
          aria-controls="horizontal-alignment-1"
          role="tab"
        >
          Sign In
        </button>
        <button
          type="button"
          class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600"
          id="horizontal-alignment-item-2"
          data-hs-tab="#horizontal-alignment-2"
          aria-controls="horizontal-alignment-2"
          role="tab"
        >
          Sign Up
        </button>
      </nav>
    </div>

    <div class="mt-3">
      <div
        id="horizontal-alignment-1"
        role="tabpanel"
        aria-labelledby="horizontal-alignment-item-1"
      >
        <form @submit.prevent="onSubmit" class="form__card">
          <h2 class="text-center text-2xl dark:text-white">Sign In</h2>

          <div class="field">
            <label
              for="email"
              class="block text-sm font-medium mb-2 dark:text-white"
              >Email</label
            >

            <input
              type="email"
              id="email"
              class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              placeholder="you@email.com"
              v-model="dataCredentials.email"
            />
          </div>

          <div class="field">
            <label
              for="password"
              class="block text-sm font-medium mb-2 dark:text-white"
              >Password</label
            >

            <input
              type="password"
              id="password"
              class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              placeholder="Enter a password here"
              v-model="dataCredentials.password"
            />
          </div>

          <button id="signin" class="btn__primary">Sign In</button>
        </form>
      </div>
      <div
        id="horizontal-alignment-2"
        class="hidden"
        role="tabpanel"
        aria-labelledby="horizontal-alignment-item-2"
      >
        <form @submit.prevent="onSubmit" class="form__card">
          <h2 class="text-center text-2xl dark:text-white">Sign Up</h2>

          <div class="field">
            <label
              for="email"
              class="block text-sm font-medium mb-2 dark:text-white"
              >Email</label
            >

            <input
              type="email"
              id="email"
              class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              placeholder="you@email.com"
              v-model="dataCredentials.email"
            />
          </div>

          <div class="field">
            <label
              for="password"
              class="block text-sm font-medium mb-2 dark:text-white"
              >Password</label
            >

            <input
              type="password"
              id="password"
              class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              placeholder="Enter a password here"
              v-model="dataCredentials.password"
            />
          </div>

          <button id="signup" class="btn__primary">Sign Up</button>
        </form>
      </div>
    </div>
  </section>
</template>
