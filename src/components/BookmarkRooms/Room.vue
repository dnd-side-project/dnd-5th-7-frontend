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
</template>

<script>
import RoomName from "../Rooms/Name.vue";
import RoomDate from "../Rooms/Date.vue";

export default {
  name: "Room",
  props: {},
  components: {
    RoomName,
    RoomDate,
  },
};
</script>
