<template>
  <div
    class="
      w-full
      z-50
      overflow-hidden
      opacity-75
      flex flex-col
      items-center
      justify-center
    "
  >
    <div
      class="
        loader
        ease-linear
        rounded-full
        border-4 border-t-4 border-gray-200
        h-12
        w-12
        mb-4
      "
    ></div>
    <h2 class="text-center text-black text-xl font-semibold">Loading...</h2>
    <p class="w-1/3 text-center text-black">
      This may take a few seconds, please don't close this page.
    </p>
  </div>
</template>
<script>
export default {
  name: "Loader",
};
</script>
<style lang="postcss" scoped>
.loader {
  border-top-color: #3498db;
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;

  .loader-block {
  }
}

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
