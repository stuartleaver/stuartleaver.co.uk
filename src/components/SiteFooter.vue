<template>
  <footer><div class="copyright">&copy; Stuart Leaver</div></footer>
</template>
<script>
export default {
  name: "SiteFooter",
};
</script>
<style lang="postcss">
footer {
  @apply fixed bottom-0 left-0 right-0;
}
.copyright {
  @apply mb-3 text-center text-xs text-gray-500;
}
</style>
