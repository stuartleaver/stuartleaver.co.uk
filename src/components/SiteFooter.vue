<template>
  <footer>
    <div class="copyright">
      &copy; Stuart Leaver {{ new Date().getFullYear() }}
    </div>
  </footer>
</template>
<script>
export default {
  name: "SiteFooter",
};
</script>
<style lang="postcss">
footer {
  @apply bottom-0 left-0 right-0 mt-5;
}
.copyright {
  @apply mb-3 text-center text-xs text-gray-500;
}
</style>
