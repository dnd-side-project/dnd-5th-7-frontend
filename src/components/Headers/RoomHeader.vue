<template>
  <div>
    <div class="flex flex-row justify-between items-center p-5 h-56 header">
      <cancleIcon class="cursor-pointer" @click="goback()" />
      <div class="text-16 header-text">{{ this.title }}</div>
      <div class="flex w-56 justify-between">
        <div @click="likeBtnClicked">
          <likeFillIcon v-if="isLIkeClicked()" class="cursor-pointer" />
          <likeIcon v-else class="cursor-pointer" />
        </div>
        <hamburgerIcon class="z-10 cursor-pointer" @click="onClickSlider" />
      </div>
    </div>
    <div class="divider"></div>
  </div>
</template>

<script>
import cancleIcon from "../../assets/icon_cancle.svg";
import likeIcon from "../../assets/like.svg";
import likeFillIcon from "../../assets/like_fill.svg";
import hamburgerIcon from "../../assets/hamburger.svg";
import RoomService from "../../api/Room/services/room.service";

export default {
  props: ["title", "rid", "like"],
  components: {
    cancleIcon,
    likeIcon,
    hamburgerIcon,
    likeFillIcon,
  },
  data() {
    return {
      isClicked: false,
      isLiked: this.like,
    };
  },
  async created() {
    // this.isLiked = this.like;
    this.isLiked = await this.like;
    console.log(await this.isLiked);
  },
  methods: {
    goback() {
      window.history.back();
    },
    goto(page) {
      this.$router.push(page);
    },
    onClickSlider() {
      this.isClicked = !this.isClicked;
      this.$emit("onClickSlider", this.isClicked);
    },
    async likeBtnClicked() {
      await RoomService.BookmarkRoom(this.rid).then((res) => {
        this.isLiked = !this.isLiked;
        console.log(res);
      });
    },
    isLIkeClicked() {
      return this.isLiked || this.like;
    },
  },
};
</script>

<style>
.divider {
  height: 2px;
  background: #eaeaea;
  transform: matrix(1, 0, 0, -1, 0, 0);
}

.header-text {
}
</style>
