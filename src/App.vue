<script setup>
import Header from "@components/Header.vue"
</script>

<template>
  <Header />

  <div
    class="container max-w-[85rem] mx-auto py-6 px-4 space-y-6 sm:flex sm:items-center sm:justify-between md:grid md:grid-cols-2 md:gap-6 md:space-y-0"
  >
    <RouterView />
  </div>
</template>
