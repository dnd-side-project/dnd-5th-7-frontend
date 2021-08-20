<template>
  <div class="flex items-center justify-center">
    <div class="flex flex-col w-168 h-60 justify-center items-center">
      <div>
        <div class="relative">
          <div id="bookCoverWrapper" class="absolute">
            <div id="bookBorderWrapper" class="absolute">
              <BookBorder id="bookBorder" />
            </div>
            <div v-if="themeCheck()"><BookSimpleCover id="bookCover" /></div>
            <div v-else><BookHipCover id="bookCover" /></div>
          </div>
        </div>
        <BookBackground id="bookBackground" />
      </div>
      <RoomName :name="this.name" id="roomName" class="text-left absolute" />
      <RoomDate :date="this.date" id="roomDate" class="absolute" />
    </div>
  </div>
</template>

<script>
import BookBorder from "../../assets/book_border.svg";
import BookHipCover from "../../assets/book_image_hip.svg";
import BookSimpleCover from "../../assets/book_image_modern.svg";
import BookBackground from "../../assets/book_background.svg";
import RoomName from "./Name.vue";
import RoomDate from "./Date.vue";
export default {
  name: "Room",
  props: ["data"],
  data() {
    return {
      Rdata: this.data,
      name: this.data.name,
      date: this.data.date,
      theme: this.data.theme,
    };
  },
  components: {
    RoomName,
    RoomDate,
    BookBorder,
    BookHipCover,
    BookSimpleCover,
    BookBackground,
  },
  methods: {
    themeCheck() {
      if (this.theme == "simple") return true;
      return false;
    },
  },
  created() {
    // console.log(this.data.theme);
    this.name = this.data.name;
    this.date = this.data.date;
    this.theme = this.data.theme;
  },
};
</script>

<style>
#bookBackground {
  width: 168px;
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
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  top: 170px;
  left: 23px;
}

#roomDate {
  font-family: "Pretendard-regular";
  font-style: normal;
  font-size: 12px;
  line-height: 16px;
  padding-top: 3px;
  top: 188px;
  left: 23px;
}
</style>
