<template>
  <div class="h-72 rounded-xl flex justify-center items-center">
    <Calendar class="custom-calendar" is-expanded title-position="left" disable-page-swipe />
  </div>
</template>

<script>
export default {
  name: "Compo",
  props: {},
};
</script>

<style scoped>
/deep/ .custom-calendar.vc-container {
  border: 0;
}
/deep/ .custom-calendar .vc-arrow {
  display: none;
}

/deep/ .custom-calendar .vc-header {
  border-bottom: 2px solid #000000;
  padding: 10px 16px;
}
/deep/ .custom-calendar .vc-weeks {
  margin-top: 10px;
}
</style>
