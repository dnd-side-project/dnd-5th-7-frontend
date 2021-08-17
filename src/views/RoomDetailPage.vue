<template>
  <div class="h-screen bg-bg"><layoutView /></div>
</template>

<script>
import layoutView from "../components/Layout/layoutView.vue";

export default {
  components: {
    layoutView,
  },
  created() {
    window.scrollTo(0, 0);
  },
};
</script>

<style></style>
