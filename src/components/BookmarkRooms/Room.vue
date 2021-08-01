<template>
  <div class="flex items-center">
    <div class="flex w-36 h-44 justify-center items-center">
      <!-- <div><bookCover /></div> -->
      <div><bookImg /></div>
    </div>
  </div>
</template>

<script>
import bookImg from "../../assets/book_background.svg";
// import bookCover from "../../assets/book_image_hip.svg";

export default {
  name: "Room",
  props: {},
  components: {
    bookImg,
    // bookCover,
  },
};
</script>
