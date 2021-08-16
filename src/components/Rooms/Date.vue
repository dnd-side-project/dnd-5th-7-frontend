<template>
  <span style="color: #9f9f9f">{{ this.Year }}.{{ this.Month }}.{{ this.Day }}</span>
</template>

<script>
export default {
  name: "RoomDate",
  props: ["date"],
  data() {
    return {
      Rdate: this.date,
      Year: "",
      Month: "",
      Day: "",
    };
  },
  created() {
    let temp = this.date.split("-");
    this.Year = temp[0];
    this.Month = temp[1];
    this.Day = temp[2];
  },
  watch: {
    date: function () {
      let temp = this.date.split("-");
      this.Rdate = this.date;
      this.Year = temp[0];
      this.Month = temp[1];
      this.Day = temp[2];
    },
  },
};
</script>
