<template>
  <div class="flex items-center">
    <div class="flex flex-col w-48 h-56 justify-center items-center">
      <div>
        <div class="relative">
          <div id="bookCoverWrapper" class="absolute">
            <div id="bookBorderWrapper" class="absolute">
              <BookBorder id="bookBorder" />
            </div>
            <BookCover id="bookCover" />
          </div>
        </div>
        <BookBackground id="bookBackground" />
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
import BookBorder from "../../assets/book_border.svg";
import BookCover from "../../assets/book_image_hip.svg";
import BookBackground from "../../assets/book_background.svg";
import RoomName from "./Name.vue";
import RoomDate from "./Date.vue";
export default {
  name: "Room",
  props: {},
  components: {
    RoomName,
    RoomDate,
    BookBorder,
    BookCover,
    BookBackground,
  },
};
</script>

<style>
#bookBackground {
  width: 154px;
}

#bookCover {
  width: 128px;
}

#bookCoverWrapper {
  top: 13px;
  left: 23px;
}

#bookBorder {
  height: 200px;
}

#bookBorderWrapper {
  left: -11px;
  top: -7px;
}

#roomName {
  font-family: Pretendard;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  margin-top: 4px;
  top: 161px;
  left: 30px;
}

#roomDate {
  font-family: Pretendard;
  font-style: normal;
  font-size: 12px;
  line-height: 16px;
  margin-top: 4px;
  top: 176px;
  left: 30px;
}
</style>
