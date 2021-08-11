<template>
  <v-app>
    <form class="w-full max-w-sm p-3">
      <div class="flex items-center border-b border-teal-500 py-2">
        <input
          class="my-input appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 outline-none"
          type="text"
          placeholder="Jane Doe"
          aria-label="Full name"
        />
        <button
          class="flex-shrink-0 border-transparent text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
          type="button"
        >
          Cancel
        </button>
      </div>
    </form>
  </v-app>
</template>

<style>
.my-input :focus {
  outline: none;
}
</style>
