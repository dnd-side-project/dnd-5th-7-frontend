<template>
  <div class="p-3 my-3 mx-2 bg-white rounded-xl shadow-md cursor-pointer">
    <div class="flex flex-col w-36 h-52 justify-between">
      <div class="flex text-sm font-bold text-black justify-end">남은 시간</div>

      <div class="flex-shrink"></div>

      <div>
        <div class="flex text-sm font-bold text-black mb-2">방 이름</div>
        <div class="flex flex-row justify-between">
          <div class="flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <p class="text-gray-500 text-xs">5명</p>
          </div>

          <div class="flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            <p class="text-gray-500 text-xs">3개</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Room",
  props: {},
};
</script>
