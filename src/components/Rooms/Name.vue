<template>
  <span>{{ this.lengthCheck() }}</span>
</template>

<script>
export default {
  name: "RoomName",
  props: ["name"],
  data() {
    return {
      Rname: this.name,
    };
  },
  methods: {
    lengthCheck() {
      if (this.Rname === undefined) return "이름이 없어요";
      if (this.Rname.length > 11) return this.Rname.slice(0, 10) + "...";
      return this.Rname;
    },
  },
  watch: {
    name: function () {
      this.Rname = this.name;
    },
  },
};
</script>
