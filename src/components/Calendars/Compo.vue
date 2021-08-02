<template>
  <div class="h-72 rounded-xl flex justify-center items-center">
    <Calendar class="custom-calendar" is-expanded title-position="left" disable-page-swipe />
    <div></div>
  </div>
</template>

<script>
export default {
  name: "Compo",
  props: {},
};
</script>

<style scoped>
::v-deep .custom-calendar.vc-container {
  border: 0;
}
::v-deep .custom-calendar .vc-arrow {
  display: none;
}

::v-deep.custom-calendar .vc-header {
  border-bottom: 2px solid #000000;
  padding: 10px 16px;
}
::v-deep .custom-calendar .vc-weeks {
  margin-top: 10px;
}
</style>
