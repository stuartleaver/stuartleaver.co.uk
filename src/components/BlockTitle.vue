<template>
  <div class="block-title">
    <h3>{{ title }}</h3>
  </div>
</template>
<script>
export default {
  name: "BlockTitle",
  props: {
    title: String,
  },
};
</script>
<style lang="postcss" scoped>
.block-title {
  @apply flex left-0 mt-1 mb-3 text-xl font-semibold;
}

.block-title h3 {
  @apply relative text-left;
}

.block-title h3:after {
  @apply absolute right-0 left-0 w-auto bottom-0 mx-auto bg-blue-500;
  content: "";
  height: 2px;
  -webkit-transition: all 0.15s ease-in-out;
  -moz-transition: all 0.15s ease-in-out;
  -o-transition: all 0.15s ease-in-out;
  -ms-transition: all 0.15s ease-in-out;
  transition: all 0.15s ease-in-out;
}
</style>
