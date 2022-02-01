<template>
  <div id="page-container" class="page-container">
    <header id="site-header" class="header">
      <div
        class="
          header-content
          relative
          flex flex-wrap
          items-center
          justify-between
        "
      >
        <div
          class="container mx-auto flex flex-wrap items-center justify-between"
        >
          <div
            class="
              w-full
              relative
              flex
              justify-between
              lg:w-auto lg:static lg:block lg:justify-start
            "
          >
            <SiteTitle first-name="Stuart" last-name="Leaver" />
            <button
              class="site-menu-button"
              type="button"
              v-on:click="toggleNavbar()"
            >
              <font-awesome-icon :icon="['fa', 'bars']" size="lg" />
            </button>
          </div>
          <nav
            class="
              site-menu
              flex
              justify-center
              items-center
              lg:w-auto
              sm:w-full
            "
          >
            <div
              v-bind:class="{ hidden: !showMenu, flex: showMenu }"
              class="lg:flex lg:flex-grow items-center sm:w-full"
            >
              <ul
                class="flex flex-col lg:flex-row list-none items-end sm:w-full"
              >
                <li>
                  <router-link to="/" class="site-menu-item">Home</router-link>
                </li>
                <li>
                  <router-link to="/cv" class="site-menu-item">CV</router-link>
                </li>
                <li>
                  <router-link to="/certifications" class="site-menu-item"
                    >Certifications</router-link
                  >
                </li>
                <li>
                  <router-link to="/blog" class="site-menu-item"
                    >Blog</router-link
                  >
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <router-view />
    <SiteFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import SiteTitle from "@/components/SiteTitle.vue";
import SiteFooter from "@/components/SiteFooter.vue";

export default {
  name: "App",
  components: {
    SiteTitle,
    SiteFooter,
  },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleNavbar: function () {
      this.showMenu = !this.showMenu;
    },
  },
  watch: {
    $route() {
      this.showMenu = false;
    },
  },
};
</script>

<style lang="postcss">
.page-container {
}

.header-content {
  @apply max-w-5xl mx-auto pb-8;
}

.site-menu {
  @apply mt-8;
}

.site-menu li {
  @apply md:mb-2;
}

.site-menu-button {
  @apply cursor-pointer text-xl leading-none mt-9 px-3 border border-solid border-transparent rounded block lg:hidden outline-none focus:outline-none;
}

.site-menu a,
.site-menu a:hover {
  @apply block lg:py-2 sm:py-2 mx-5 text-center text-gray-600 text-base leading-none font-normal relative opacity-60;
}

.site-menu li:last-child a {
  @apply lg:mr-0;
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

.menu-button {
  @apply text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none;
}
</style>
