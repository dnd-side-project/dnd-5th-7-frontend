<template>
  <div class="flex flex-row justify-between">
    <div class="flex text-sm font-bold text-black mb-2">방 이름</div>
    <div class="flex flex-row cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
      <p class="text-gray-500 text-xs">5명</p>
    </div>
  </div>
  <div class="w-full h-px border-t border-gray-400"></div>
</template>

<script>
export default {
  props: {
    width: { type: [Number, String], default: 30 },
    height: { type: [Number, String], default: 30 },
  },
};
</script>
