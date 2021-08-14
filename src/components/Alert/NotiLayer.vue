<template>
  <div class="w-280 h-6.4 bg-white text-14 flex justify-center items-center shadow-layout animation">
    {{ this.text }}
  </div>
</template>

<script>
export default {
  props: ["text"],
  setup() {},
};
</script>

<style>
@keyframes Notishow {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.animation {
  animation-name: Notishow;
  animation-duration: 2s;
  animation-direction: normal;
  animation-timing-function: linear;
  animation-fill-mode: both;
}
</style>
