<template>
  <div class="flex items-center">
    <div class="flex flex-col w-48 h-60 justify-center items-center">
      <div>
        <div class="relative">
          <div id="bookCoverWrapper" class="absolute">
            <div id="bookBorderWrapper" class="absolute">
              <BookBorder id="bookBorder" />
            </div>
            <div v-if="themeCheck()"><BookModernCover id="bookCover" /></div>
            <div v-else><BookHipCover id="bookCover" /></div>
          </div>
        </div>
        <BookBackground id="bookBackground" />
      </div>
      <RoomName :name="this.name" id="bookName" class="absolute font-bold text-14" />
      <RoomDate :date="this.date" id="bookDate" class="absolute text-12" />
    </div>
  </div>
</template>

<script>
import BookBorder from "../../assets/book_border.svg";
import BookHipCover from "../../assets/book_image_hip.svg";
import BookModernCover from "../../assets/book_image_modern.svg";
import BookBackground from "../../assets/book_background.svg";
import RoomName from "../Rooms/Name.vue";
import RoomDate from "../Rooms/Date.vue";

export default {
  props: ["nname", "ndate", "ntheme"],
  data() {
    return {
      name: "",
      date: "",
      theme: "",
    };
  },
  components: {
    BookBorder,
    BookHipCover,
    BookModernCover,
    BookBackground,
    RoomName,
    RoomDate,
  },
  methods: {
    themeCheck() {
      if (this.theme.includes("Modern")) return true;
      return false;
    },
  },
  created() {
    this.name = this.nname;
    this.date = this.ndate;
    this.theme = this.ntheme;
  },
  watch: {
    nname: function () {
      this.name = this.nname;
    },
    ndate: function () {
      this.date = this.ndate;
    },
    ntheme: function () {
      this.theme = this.ntheme;
    },
  },
};
</script>

<style>
#bookCover {
  padding-right: 5px;
}

#bookName {
  padding-left: 5px;
  top: 255px;
}

#bookDate {
  top: 277px;
  padding-right: 55px;
}
</style>
