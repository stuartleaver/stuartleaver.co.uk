<template>
  <div id="page-container" class="page-container">
    <header id="site-header" class="header">
      <div class="header-content flex justify-between">
        <SiteTitle first-name="Stuart" last-name="Leaver" />
        <nav class="site-menu flex justify-center items-center">
          <router-link to="/" class="site-menu-item">Home</router-link>
          <router-link to="/about" class="site-menu-item">About</router-link>
          <router-link to="/blog" class="site-menu-item">Blog</router-link>
        </nav>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import SiteTitle from "@/components/SiteTitle.vue";

export default {
  name: "App",
  components: {
    SiteTitle,
  },
};
</script>

<style lang="postcss">
.page-container {
}

.header-content {
  @apply max-w-5xl mx-auto;
}

.site-menu {
  @apply mt-8;
}

.site-menu a,
.site-menu a:hover {
  @apply py-2 mx-5 text-center text-gray-600 text-base leading-none font-normal relative opacity-60;
}

.site-menu a:last-child {
  @apply pr-0;
}

.site-menu a:hover {
  @apply bg-transparent opacity-100;
}

.site-menu a:after {
  @apply absolute right-0 left-0 bottom-0 w-0 mx-auto bg-blue-500;
  content: "";
  height: 2px;
  -webkit-transition: all 0.15s ease-in-out;
  -moz-transition: all 0.15s ease-in-out;
  -o-transition: all 0.15s ease-in-out;
  -ms-transition: all 0.15s ease-in-out;
  transition: all 0.15s ease-in-out;
}

a.router-link-active:hover:after,
a.router-link-active:after {
  @apply w-6;
}

a.router-link-active {
  @apply bg-transparent opacity-100;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: "Roboto", Helvetica, sans-serif;
  font-weight: 400;
  font-style: normal;
  background-color: #f5f5f5;
  @apply text-base;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
