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
  methods: {
    lengthCheck() {
      if (this.Rname === undefined) return "이름이 없어요";
      if (this.Rname.length > 9) return this.Rname.slice(0, 9) + "...";
      return this.Rname;
    },
  },
  created() {
    let temp = this.date.split("-");
    this.Year = temp[0];
    this.Month = temp[1];
    this.Day = temp[2];
  },
};
</script>
