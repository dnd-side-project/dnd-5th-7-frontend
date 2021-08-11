<template>
  <div class="flex items-center">
    <div class="flex flex-col w-48 h-60 justify-center items-center">
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
</template>

<script>
import BookBorder from "../../assets/book_border.svg";
import BookCover from "../../assets/book_image_modern.svg";
import BookBackground from "../../assets/book_background.svg";
import RoomName from "../Rooms/Name.vue";
import RoomDate from "../Rooms/Date.vue";

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

<style></style>
