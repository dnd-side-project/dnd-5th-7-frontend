<template>
  <div class="flex items-center">
    <div class="flex flex-col w-44 h-44 justify-center items-center">
      <div>
        <div class="relative">
          <div id="bookCoverWrapper" class="absolute">
            <div id="bookBorderWrapper" class="absolute">
              <img src="@/assets/book_border.png" />
            </div>
            <img id="bookCover" src="@/assets/book_image_modern.png" />
          </div>
        </div>
        <img id="bookBackground" src="@/assets/book_background.png" />
      </div>
      <RoomName id="roomName" class="absolute" />
      <RoomDate id="roomDate" class="absolute" />
    </div>
  </div>
  <!-- <div class="p-3 my-3 mr-3 bg-white rounded-xl shadow-md cursor-pointer">
    <div class="flex flex-col w-36 h-44 justify-between">
      <div class="flex text-sm font-bold text-black justify-end">남은 시간</div>

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
  </div> -->
</template>

<script>
import RoomName from "./Name.vue";
import RoomDate from "./Date.vue";
export default {
  name: "Room",
  props: {},
  components: {
    RoomName,
    RoomDate,
  },
};
</script>

<style>
#bookCover {
  width: 120px;
}

#bookCoverWrapper {
  top: 30px;
  left: 30px;
}

#bookBorderWrapper {
  left: -13px;
  top: -11px;
}

#roomName {
  font-family: Pretendard;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  margin-top: 4px;
  top: 141px;
  left: 30px;
}

#roomDate {
  font-family: Pretendard;
  font-style: normal;
  font-size: 12px;
  line-height: 16px;
  margin-top: 4px;
  top: 156px;
  left: 30px;
}
</style>
