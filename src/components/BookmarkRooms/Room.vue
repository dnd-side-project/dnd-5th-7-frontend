<template>
  <div class="flex items-center">
    <div class="flex flex-col w-44 h-56 justify-center items-center">
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
