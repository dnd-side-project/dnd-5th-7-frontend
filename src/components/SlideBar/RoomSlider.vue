<template>
  <div class="SliderBlock">
    <div class="Slider"></div>
  </div>
</template>

<script>
export default {
  name: "NoRoom",
};
</script>

<style>
.SliderBlock {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  transition: all 250ms ease-in;
  background-color: rgba(0, 0, 0, 0.6);
}
.Slider {
  width: 240px;
  position: absolute;
  top: 0;

  right: 0;
  bottom: 0;
  margin-left: 120px;
  background: white;
  transition: all 250ms ease-in;
  z-index: 100;
}
</style>
